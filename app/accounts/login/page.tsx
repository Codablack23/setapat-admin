"use client";
import {Checkbox, Divider, Space, Spin, notification} from "antd"
// import Accounts from '@/services/Accounts'
import Link from "next/link";
import {FormEvent, ReactNode, useState,} from 'react'

export default function LoginPage(){

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (message:ReactNode,description:ReactNode) => {
    api.error({
      message,
      description,
      duration: 10,
    });
  };
  
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [passwordShown,setPasswordShown] = useState(false)

  function togglePasswordVisibility(){
      setPasswordShown(prev=>!prev)
  }

  const [loading,setLoading] = useState(false)

  const handleInput=(setState:(value:string)=>void)=>{
    return (e:any)=>{
      setState(e.target.value)
    }
  }

//   const handleSubmit = async(e:FormEvent)=>{
//     e.preventDefault()
//     setLoading(true)
//     const response = await Accounts.login(email,password)
//     setLoading(false)
//     console.log(response)
//     if(response.status !== "success"){
//       openNotification(response.error_code,response.error)
//       return null
//     }
//     window.location.assign('/')
//   }
    return(
      <>
      {contextHolder}
      <section className="my-8 max-w-md mx-auto gap-3">
        <div>
        <form className="border border-gray-200 p-6">
           <h3 className="font-semibold text-2xl text-center mb-4 text-gray-900">Secure Client Login</h3>
           <div className="my-3">
              <label htmlFor="" className="font-semibold text-gray-700 text-sm">Email <span>*</span></label>
              <input value={email} required onChange={handleInput(setEmail)} type="email" className="w-full p-1 text-sm rounded-md border border-gray-200" placeholder="Enter Your Email" />
           </div> 
           <div className="my-3">
              <label htmlFor="" className="font-semibold text-gray-700 text-sm">Password <span>*</span></label>
             <div className="border border-gray-200 p-1 flex rounded-md w-full">
               <input 
               minLength={8} 
               required 
               value={password}
               onChange={handleInput(setPassword)}  
               type={!passwordShown?"password":"text" }
               className="outline-none w-10/12 text-sm" 
               placeholder="Enter your Password" />
               <button type="button" className="ml-auto" onClick={togglePasswordVisibility}>
                 <i className={passwordShown?"bi bi-eye-slash-fill":"bi bi-eye-fill"}></i>
               </button>
             </div>
           </div> 
           <div className="flex items-center justify-between text-xs my-3 mb-6">
             <div className="flex items-center">
               <Checkbox/>
               <p className="ml-1 text-gray-700 font-semibold">Remember Me</p>
             </div>
             <Link href={"/accounts/forgot-password"}><p className="italic text-gray-400">forgot password?</p></Link>
           </div>
           {loading
           ?<button className="w-full rounded-md flex items-center justify-center p-2 bg-gray-700 text-white" type="button">
            <Spin/>
           </button>
           :<button className="w-full rounded-md p-2 bg-dark text-white">Login</button>
           }
       
           <Divider>
           <p className="text-gray-400 text-sm  text-center my-2"> OR </p>
           </Divider>      
           <Link href={"/accounts/apply"}>
            <button className="font-semibold my-1 w-full py-2 rounded-md border bg-primary border-gray-200 text-gray-700">Apply For a Designer Role</button>
            </Link>

         </form>
        </div>
      </section>
      </>
    )
 }