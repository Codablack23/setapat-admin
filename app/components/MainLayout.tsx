import { ReactNode } from "react";
import MediaCenterHeader from "./MediaHeader";
import SideBar from "./Sidebar";
interface MediaLayoutProps{
    children:ReactNode,
}
export default function MainLayout(props:MediaLayoutProps){
  return (
    <section>
    <SideBar/>
    <div className="p-2 py-10 ml-[370px]">
      <div className="my-3">{props.children}</div>
    </div>
   </section>
  )
}