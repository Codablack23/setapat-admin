"use client"
import Link from 'next/link'
import React from 'react'

export default function Footer(){
    const date = new Date()
    const year = date.getFullYear()
    return (
        <footer className="bg-black text-gray-200 footer-container">
           <div className="hidden md:grid grid-cols-4 gap-10 main-container">
               <div>
                   <p className="font-bold text-2xl mb-5">Setapat</p>
                   <ul>
                    <li>
                        <Link href={"/"}>
                            <p>About Setapat</p>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                            <p>Plans and Pricing</p>
                        </Link>
                    </li> 
                    <li>
                        <Link href={"/"}>
                            <p>Design Types and Categories</p>
                        </Link>
                    </li> 
                     <li>
                        <Link href={"/"}>
                            <p>Font and Image Liscense</p>
                        </Link>
                    </li>   
                    <li>
                        <Link href={"/"}>
                            <p>FAQs</p>
                        </Link>
                    </li>
                   </ul>
               </div>  
               <div>
                   <ul className="mt-12">
                    <li>
                        <Link href={"/"}>
                            <p>Privacy Policy</p>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                            <p>Terms of service</p>
                        </Link>
                    </li> 
                   </ul>
               </div>
               <div className="mt-14">
                <p className="font-semibold">Connect with Us</p>
                <div className="flex items-center">
                    <Link href={"/"}>
                      <p className="mr-4"><i className="text-xl cursor-pointer bi bi-facebook"></i></p>
                    </Link> 
                    <Link href={"/"}>
                      <p className="mr-4"><i className="text-xl cursor-pointer bi bi-instagram"></i></p>
                    </Link> 
                    <Link href={"/"}>
                      <p className="mr-4"><i className="text-xl cursor-pointer bi bi-twitter"></i></p>
                    </Link>
                     <Link href={"/"}>
                      <p className="mr-4"><i className="text-xl cursor-pointer bi bi-linkedin"></i></p>
                    </Link>
                    
                </div>
               </div>
           </div> 
           <div className="main-container text-center md:hidden">
               <div>
                   <p className="font-bold text-2xl mb-5">Setapat</p>
                   <ul>
                    <li className="flex items-center justify-center">
                        <Link href={"/"}>
                            <p>About Setapat</p>
                        </Link> 
                        <Link href={"/"}>
                            <p className="ml-5">FAQs</p>
                        </Link>
                    </li>
                    <li className="flex items-center justify-center my-3">
                        <Link href={"/"}>
                            <p>Plans and Pricing</p>
                        </Link> 
                        <Link href={"/"}>
                            <p className="ml-5">Privacy Policy</p>
                        </Link>
                    </li>
                    <li className="flex items-center justify-center my-3">
                        <Link href={"/"}>
                            <p>Design Types and Categories</p>
                        </Link> 
                        <Link href={"/"}>
                            <p className="ml-5">Terms Of Service</p>
                        </Link>
                    </li> 
                    <li className="flex items-center justify-center my-3">
                        <Link href={"/"}>
                            <p>Fonts and Image Liscense</p>
                        </Link> 
                    </li>
                   </ul>
               </div>  
               <div className="mt-6">
                <p className="font-semibold">Connect with Us</p>
                <div className="flex items-center justify-center">
                    <Link href={"/"}>
                      <p className="mr-4"><i className="text-xl cursor-pointer bi bi-facebook"></i></p>
                    </Link> 
                    <Link href={"/"}>
                      <p className="mr-4"><i className="text-xl cursor-pointer bi bi-instagram"></i></p>
                    </Link> 
                    <Link href={"/"}>
                      <p className="mr-4"><i className="text-xl cursor-pointer bi bi-twitter"></i></p>
                    </Link>
                     <Link href={"/"}>
                      <p className="mr-4"><i className="text-xl cursor-pointer bi bi-linkedin"></i></p>
                    </Link>
                    
                </div>
               </div>
           </div>
           <div className="main-container mt-12 text-center">
              <p className="text-gray-500">Setapat {year}    |    All Rights Reserved</p>
           </div>
        </footer>
    )
}
