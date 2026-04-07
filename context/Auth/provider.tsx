"use client";
import { ReactNode } from "react";
import {useAuth} from "@/hooks/";
import { AuthContext } from "./context";


interface Props{
    children:ReactNode
}
export function AuthContextProvider (props:Props){
  const contextData = useAuth()

   return (
    <AuthContext.Provider value={contextData}>
        {props.children}
    </AuthContext.Provider>
   )
}