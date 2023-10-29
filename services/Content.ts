import axios from 'axios'
import * as contentful from 'contentful'

const client = contentful.createClient({
    space: 'wrxw3cp61g1u',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'f9XlWf92YyoqyIjTQx3sPWF1G8hfOtuQRKRaqoRsbsU'
  })
interface APIResponse{
  status:string,
  content:any,
  error_message?:string,
  error?:unknown,
  data?:any

}
export async function getDesignAssets(){
 const response:APIResponse = {
        status:"failed",
        content:null,
        error_message:"could not get content"
  }
  try {
   const content = await client.getEntry("5eITixwhiHqzGCMIYSbFxI")
   response.status = "success"
   response.content = content
  } catch (error) {
    response.error = error
    response.status = "failed"
    response.error_message ="could not get content"
  }

  return response
}
export async function getContents(){
 const response:APIResponse = {
        status:"failed",
        content:null,
        error_message:"could not get content"
  }
  try {
   const content = await client.getEntries()
   response.status = "success"
   response.content = content
  } catch (error) {
    response.error = error
    response.status = "failed"
    response.error_message ="could not get content"
  }

  return response
}
export async function getDesignTypes(){
 const response:APIResponse = {
        status:"failed",
        content:null,
        error_message:"could not get content"
  }
  try {
   const content = await client.getEntry("6j2qvUJvJcKy48nfDHFAr4")
   response.status = "success"
   response.content = content
  } catch (error) {
    response.error = error
    response.status = "failed"
    response.error_message ="could not get content"
  }

  return response
}

export async function getCountries(){
      const response:APIResponse = {
        status:"failed",
        content:null,
        error_message:"could not get content"
    }
    try {
      const res:any = await axios.get(`https://restcountries.com/v3.1/region/africa`,{}).then((res)=>{
        return res
       }).catch((err)=>{
         return err.response
       })
        return res
       }
      catch(err:any){
       response.error = err
       return response
    }
 }

