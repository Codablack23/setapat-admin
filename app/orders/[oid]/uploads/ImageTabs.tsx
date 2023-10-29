"use client";

import { ReactNode, useEffect, useState } from "react"

interface TabItem{
    key:string,
    title:ReactNode,
    Body:ReactNode
}

interface TabProps{
    active:string
    items:TabItem[]
}

export default function ImageTabs(props:TabProps){
    const [active,setActive] = useState("1")

    useEffect(()=>{
        if(props.active){
            setActive(props.active)
        }
    },[props.active])

    const Item =( props.items.find(item=>item.key === active)?
    props.items.find(item=>item.key === active)
    :props.items[0])

    return (
        <div className="my-4 max-w-2xl mx-auto">
        <header className="flex w-full items-center gap-4">
          {props.items.map(item=>(
            <div className="flex-1 uppercase" key={item.key}>
             <button onClick={()=>setActive(item.key)} className={`flex-1 border-b-8 ${active === item.key ?"border-[#FFCC00] text-black":"border-gray-300 text-gray-300"}  w-full py-1 bg-grey-100`}>{item.title}</button>
            </div> 
          ))}          
        </header>
        <div className="my-2">
            {props.items.length > 0?
             Item ?Item.Body:null
            :null}
        </div>
        </div>
    )

}