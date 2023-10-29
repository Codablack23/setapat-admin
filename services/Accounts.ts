import axios from "axios"
import {api, axiosHeaderConfig} from "../utils/repo"

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
interface RegisterDetails{
    email:string,
    phoneNumber:string,
    firstName:string,
    lastName:string,
    [key:string]:any
}
interface UpdateDetails{
    email:string,
    phoneNumber:string,
    firstName:string,
    lastName:string,
    [key:string]:any
}

class Accounts{
    private api:string = api as string
    private config = axiosHeaderConfig

    async getAuthState(){
        let response:APIResponse = {
            status:"failed",
            error_message:"could connect to server please check your internet and try again"
        }
        try {
         const res:any = await axios.post(`${this.api}/accounts`,{},this.config).then((res)=>{
            return res
           }).catch((err)=>{
             return err.response
           })
            return res.data
           }
          catch(err:any){
           response.error = err
           return response
          }
    }  
    async login(email:string,password:string){
        const response:APIResponse = {
            status:"failed",
            error_message:"could connect to server please check your internet and try again"
        }
        try {
         const res = await axios.post(`${this.api}/accounts/login`,{email,password},this.config).then((res)=>{
          return res
         }).catch((err)=>{
           return err.response
         })
          return res.data
         }
        catch(err:any){
         response.error = err
         return response
        }
       
    } 
    async logout(){
        let response:APIResponse = {
            status:"failed",
            error_message:"could connect to server please check your internet and try again"
        }
        try {
         const res:any = await axios.post(`${this.api}/accounts/logout`,{},this.config).then((res)=>{
            return res
           }).catch((err)=>{
             return err.response
           })
            return res.data
           }
          catch(err:any){
           response.error = err
           return response
        }
    }   
    async getNotifications(){
        let response:APIResponse = {
            status:"failed",
            error_message:"could connect to server please check your internet and try again"
        }
        try {
         const res:any = await axios.get(`${this.api}/accounts/notifications`,this.config).then((res)=>{
            return res
           }).catch((err)=>{
             return err.response
           })
            return res.data
           }
          catch(err:any){
           response.error = err
           return response
        }
    }
    async apply(details:RegisterDetails){
        const response:APIResponse = {
            status:"failed",
            error_message:"could connect to server please check your internet and try again"
        }
        try {
         const res = await axios.post(`${this.api}/application/create`,details,this.config).then((res)=>{
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
    async updateProfile(details:UpdateDetails){
        const response:APIResponse = {
            status:"failed",
            error_message:"could connect to server please check your internet and try again"
        }
        try {
         const res = await axios.post(`${this.api}/accounts/update-profile`,details,this.config).then((res)=>{
            return res
           }).catch((err)=>{
             return err.response
           })
           console.log(res)
            return res.data
           }
          catch(err:any){
            console.log(err)
           response.error = err
           return response
          }
    }  
    async forgotPassword(email:string){
        const response:APIResponse = {
            status:"failed",
            error_message:"could connect to server please check your internet and try again"
        }
        try {
         const {data} = await axios.post(`${this.api}/accounts/forgot-password`,{email},this.config).then((res)=>{
          return res
         })
         response.status = data.status
         response.error_message = data.error
         response.message = data.message
         }
        catch(err){
         response.error = err
        }
        return response
    }  
    async resetPassword(id:string,password:string){
        const response:APIResponse = {
            status:"failed",
            error_message:"could connect to server please check your internet and try again"
        }
        try {
         const {data} = await axios.post(`${this.api}/accounts/reset-pasword/${id}`,{password},this.config).then((res)=>{
          return res
         })
         response.status = data.status
         response.error_message = data.error
         response.message = data.message
         }
        catch(err){
         response.error = err
        }
        return response
    }
}


export default new Accounts() as Accounts