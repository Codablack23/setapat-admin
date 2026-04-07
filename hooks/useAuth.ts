import {Auth, User} from "@/services";
import { useCallback, useEffect, useState } from "react";

export function useAuth(){
    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState<User | null>(null)

    const getAuthStatus = useCallback(async()=>{
      setLoading(true)
      try{
        const res = await Auth.getAuthStatus()
        if(!res.data?.user){
          throw new Error(res.message ?? "Sorry you are not logged in")
        }
        setUser(res.data.user)
        localStorage.setItem("auth_token",res.data.token)
      }catch(err){
        console.log(err)
      }finally{
        setLoading(false)
      }
    },[])

    useEffect(()=>{
        getAuthStatus()
    },[getAuthStatus])

    return {
      loading,
      user,
    }
}