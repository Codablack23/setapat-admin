"use client";
import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../AdminContext";
import { ApplicationsLoader } from "./components/Loader";
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from "dayjs";
import ApplicationDetails from "./components/ApplicationDetails";
import ApplicationsList from "./components/ApplicationList";

dayjs.extend(relativeTime)

interface Data{
  [key:string]:any
}

export default function Page(){

  const {loading,user} = useContext(AdminContext)
  const [application,setApplication] = useState<Data | null>(null)
  useEffect(()=>{
    if(!loading && !user){
      window.location.assign("/login")
    }
  },[loading,user])

  return (
   loading
   ?<ApplicationsLoader/>
   :<div>
    <p className="font-light my-8">Human Resource { ">" } <span className="font-medium">Designer Applications</span></p>
     <div className="grid md:grid-cols-5 gap-5">
       <div className="md:col-span-2">
         <ApplicationsList
         application={application}
         selectApplication={setApplication}
         />
       </div>
       <div className="md:col-span-3">
          <div className="bg-white min-h-[400px] p-4">
            {
              application
              ?<ApplicationDetails
              application={application}
              />
              :<div className="text-center min-h-[400px] max-w-[360px] mx-auto flex items-center justify-center">
                   <div>
                      <p><i className="bi bi-inbox text-7xl text-gray-200"></i></p>
                      <p className="text-xl font-bold">No Application Selected</p>
                      <p className="text">Please select an application to see application preview and details</p>
                   </div>
              </div>
            }
          </div>
       </div>
     </div>
   </div>
  )
}