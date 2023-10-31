"use client";
import { ReactNode, createContext, useEffect, useState } from "react";
import useAuth from "./hooks/useAuth";

interface Data{
    [key:string]:any
}
interface AdminDataContext{
    overview:Data | null,
    loading:boolean,
    user:Data | null,
    notifications:Data []
}

export const AdminContext = createContext<AdminDataContext>({
    overview:null,
    loading:true,
    user:null,
    notifications:[]
})
interface Props{
    children:ReactNode
}
export default function AdminContextProvider (props:Props){
  const {loading,overview,notifications,user} = useAuth()

   return (
    <AdminContext.Provider value={{overview,loading,notifications,user}}>
        {props.children}
    </AdminContext.Provider>
   )
}