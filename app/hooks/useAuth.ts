import Accounts from "@/services/Accounts";
import { useEffect, useState } from "react";
interface Data{
    [key:string]:any
}
export default function useAuth(){
    const [user,setUser] = useState<Data | null>(null)
    const [notifications,setNotifications] = useState<Data []>([])
    const [overview,setOverview] = useState<Data | null>(null)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        async function getAuthState(){
         const res = await Accounts.getAuthState()
         console.log(res)
         setLoading(false)
         if(res.status === "success"){
            setUser(res.admin)
            setNotifications(res.notifications)
            if(res.overview){
                setOverview(res.overview)
            }
         }
        }
        getAuthState()
    },[])

    return {loading,user,notifications,overview}
}