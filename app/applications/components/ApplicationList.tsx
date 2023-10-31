import {AdminContext} from "@/app/AdminContext"
import dayjs from "dayjs"
import { useContext, useRef } from "react";
import {Image} from "antd"

interface Data{
    [key:string]:any
  }
interface ApplicationListProps{
    selectApplication:(application:Data)=>void
    application:Data | null
}

export default function ApplicationsList(props:ApplicationListProps){
    const {overview} = useContext(AdminContext)
    const ref = useRef<HTMLDivElement>(null)
    const setActive=(application:Data)=>{
      if(!props.application) return "";
      if(props.application?.application_id !== application.application_id ) return "";
      return "border border-[#ffcc00]"
    }
    function toggleList(){
      const el = ref.current
      el?.classList.toggle("translate-y-[100%]")
    }
    function SelectApplication(application:Data){
      return ()=>{
        props.selectApplication(application)
        ref.current?.classList.add("translate-y-[100%]")
      }
    }
    return(
      <div>
        <header className="flex md:hidden bg-white p-2 items-center justify-between">
         {props.application?<div className="flex-1">
                  <p className="font-medium text-lg">{props.application.firstName} - {props.application.lastName}</p>
                  {/* <p className="text-sm font-light">{props.application.email}</p> */}
                  <p className="">
                    <span className="font-light text-sm italic">{dayjs().to(dayjs(props.application.createdAt))}</span>
                 </p>
            </div>
          :<p className="text-lg font-medium">Select Application</p>  
          }
          <button onClick={toggleList} className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
           <i className="bi bi-list text-2xl"></i>
          </button>
        </header>
       <div ref={ref} className="fixed md:static top-0 left-0 w-full p-2 py-8 md:py-0 md:p-0  bg-white md:bg-transparent z-[1000] translate-y-[100%] md:translate-y-[0%] md:opacity-100  md:z-auto h-full" style={{transition:"all ease 0.4s"}}>
        <div className="flex md:hidden items-center justify-between pb-2 border-b mb-6">
          <p className="mb-4 text-xl font-semibold">Applications</p>
          <button onClick={toggleList}><i className="bi bi-x-lg"></i></button>
        </div>
       {!overview || !overview.applications
       ?<div className="max-w-md mx-auto bg-white text-center p-2 min-h-[300px] flex items-center justify-center">
          <div>
          <p className="text-4xl font-bold">No Application</p>
          <p className="">There are no applications for designers at the moment </p>
         <button className="px-4 py-1 bg-primary my-2">Back to dashboard</button>
          </div>
       </div>
       :(<ul className="md:max-h-[300px] overflow-y-auto">
         {overview.applications.map((application:Data)=>(
            <li onClick={SelectApplication(application)} key={application.application_id} className={` ${setActive(application)} flex gap-4 p-4 hover:border cursor-pointer hover:border-[#ffcc00] bg-white items-center`}>
                <div className="flex-1">
                  <p className="font-medium text-xl">{application.firstName} - {application.lastName}</p>
                  <p className="text-sm font-light">{application.email}</p>
                  <p className="text-right my-2">
                    <span className="p-2 bg-primary font-medium text-sm">{dayjs().to(dayjs(application.createdAt))}</span>
                  </p>
                </div>
                 <div>
               </div>
            </li>
        ))}
       </ul>)}
       </div>
      </div>
    )
}