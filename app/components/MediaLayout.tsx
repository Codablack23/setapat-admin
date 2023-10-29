import { ReactNode } from "react";
import MediaCenterHeader from "./MediaHeader";
import SideBar from "./Sidebar";
interface MediaLayoutProps{
    children:ReactNode,
    active:number
}
export default function MediaLayout(props:MediaLayoutProps){
  return (
    <section>
    <SideBar/>
    <div className="p-2 py-16 ml-[370px]">
      <MediaCenterHeader
      active={props.active}
      />
      <div className="my-3">{props.children}</div>
    </div>
   </section>
  )
}