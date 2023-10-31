"use client"
import Link from "next/link"
import React, { useState } from "react"
import {Image} from 'antd'


export default function Navbar(){
    return (
      <nav className="navbar-container card sticky top-0 bg-white" style={{zIndex:1000}}>
       <div className="flex items-center justify-between main-container"> 
         <div className="flex items-center">
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
               <button className="font-medium text-lg">Log out</button>
         </div>    
      </div>
    </nav>
    )
}