import axios, { AxiosError } from "axios"
import { ApiProvider } from "./services.config"

interface APIResponse{
    status:string,
    error?:unknown,
    error_message?:string,
    data?:{
        [key:string]:any
    },
    user?:{
        [key:string]:any
    },
    message?:string
}


interface SupervisorDetails{
    email:string,
    firstname:string,
    lastname:string,
    [key:string]:any
}

class SupervisorAccounts{
   

    async addSupervisor(details:SupervisorDetails){
        try {
            const res = await ApiProvider.post(`/admin/supervisors`,details)
            console.log(res)
            return res.data
        }
        catch(err:any){
            if(err instanceof AxiosError){
               return err.response?.data
            }
        }
    }
    async deleteSupervisor(id:string){
        try {
            const res = await ApiProvider.delete(`/admin/supervisors/${id}`)
            console.log(res)
            return res.data
        }
        catch(err:any){
            if(err instanceof AxiosError){
               return err.response?.data
            }
        }
    }
    async getSupervisors(){
        const response:APIResponse = {
            status:"failed",
            error_message:"could connect to server please check your internet and try again"
        }
        try {
            const res = await ApiProvider.get(`/admin/supervisors`).then((res)=>{
                return res
           }).catch((err)=>{
             return{
                ...err.response,
                error_message:"could connect to server please check your internet and try again"
             }
           })
            return res.data
           }
          catch(err:any){
            console.log(err)
            response.error = err
            return response
          }
    }
}


export default new SupervisorAccounts() as SupervisorAccounts