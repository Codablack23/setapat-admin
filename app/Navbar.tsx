"use client"
import Link from "next/link"
import React, { useState } from "react"
import {Image} from 'antd'


export default function Navbar(){
    return (
      <nav className="navbar-container card sticky top-0 bg-white" style={{zIndex:1000}}>
       <div className="flex items-center justify-between main-container"> 
         <div className="flex items-center">
            <button className="md:inline-block hidden mr-4">
                <i className="bi bi-justify text-2xl text-gray-600"></i>
            </button>
           <Link href={"/"}>
            <Image
            preview={false}
            src="/images/setapat-logo-light.svg"
            width={"120px"}
            alt="Logo"
            />
           </Link>
        </div>
          <div className="flex items-center">
           <Link href={"/notifications/"}>
               <i className="cursor-pointer mr-5 text-[28px] font-medium bi bi-bell-fill"></i>
           </Link> 
           <Link href={"/profile/"}>
               <i className="cursor-pointer text-gray-400 mr-5 text-[28px] font-medium bi bi-person-circle"></i>
           </Link>
         </div>    
      </div>
    </nav>
    )
}