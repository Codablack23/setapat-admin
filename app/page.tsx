"use client";

import { Skeleton } from "antd";
import useAuth from "./hooks/useAuth"
import { useContext, useEffect } from "react";
import Sections from "./components/Dashboard/Sections";
import { AdminContext } from "./AdminContext";
import Overview from "./components/Dashboard/Overview";

function Loader(){
  return (
    <div className="grid md:grid-cols-2 gap-6">
    <div>
      <div className="my-4">
      <Skeleton.Button active block style={{height:"40px"}}/>
      </div> 
      <div className="my-4">
      <Skeleton.Button active block style={{height:"40px"}}/>
      </div> 
      <div className="my-4">
      <Skeleton.Button block active style={{height:"40px"}}/>
      </div> <div className="my-4">
      <Skeleton.Button block active style={{height:"40px"}}/>
      </div>
    </div>
    <div>
     <div className="my-4">
     <Skeleton.Button block active style={{height:"200px"}}/>
     </div>
    </div>
   </div>
  )
}
const accountLinks = [
  {title:"Users",url:"/users"},
  {title:"Admins",url:"/admins"},
  {title:"Designers",url:"/designers"},
  {title:"Supervisors",url:"/supervisors"},
]
const products_and_pricing = [
  {title:"Design Types",url:"/design-types"},
  {title:"Pricing",url:"/pricing"},
]
const Feedbacks = [
  {title:"Designer Feedbacks",url:"/feedbacks"},
  {title:"Customer Feedbacks",url:`/feedbacks?type="customer`},
]
const HR = [
  {title:"Designer Applications",url:"/applications"},
]
export default function Home() {
  const {loading,user,overview} = useContext(AdminContext)
  useEffect(()=>{
    if(!loading && !user){
      window.location.assign("/login")
    }
  },[loading,user])
  return (
   loading
   ?<Loader/>
   :user
   ?(
    <div className="grid md:grid-cols-5 mt-10 gap-8">
        <div className="md:col-span-3">
          <Sections
          title="Accounts"
          links={accountLinks}
          />  
          <Sections
          title="Human Resource"
          links={HR}
          />
          <Sections
          title="Products and Pricing"
          links={products_and_pricing}
          />   
          <Sections
          title="Customer and Designers Feedback"
          links={Feedbacks}
          />  
        </div> 
        <div className="md:col-span-2">
         <Overview/>
        </div>
    </div>
   )
   :<Loader/>
  )
}
