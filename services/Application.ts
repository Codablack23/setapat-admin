import axios from "axios"
import {api, axiosHeaderConfig} from "../utils/repo"
import { Dayjs } from "dayjs"

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
}
interface UpdateDetails{
    email:string,
    phoneNumber:string,
    firstName:string,
    lastName:string,
    [key:string]:any
}
interface AcceptData{
    supervisor:string
}
interface InterviewData{
    meetingLink:string,
    meetingDate:Dayjs,
    meetingStartTime:Dayjs,
    meetingStopTime:Dayjs,
}

class ApplicationService{
    private api:string = api as string
    private config = axiosHeaderConfig

  
    async accept(id:string,details:AcceptData){
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
    async reject(id:string){
        const response:APIResponse = {
            status:"failed",
            error_message:"could connect to server please check your internet and try again"
        }
        try {
         const res = await axios.post(`${this.api}/application/reject/${id}`,{},this.config).then((res)=>{
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
    async sendInvite(inviteDetails:InterviewData){
        const response:APIResponse = {
            status:"failed",
            error_message:"could connect to server please check your internet and try again"
        }
        try {
         const res = await axios.post(`${this.api}/application/send-invite/`,inviteDetails,this.config).then((res)=>{
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


export default new ApplicationService() as ApplicationService