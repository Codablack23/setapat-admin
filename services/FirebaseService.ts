"use client";

import {storage } from "../utils/firebaseConfig";
// import { FirebaseError } from "firebase/app";
import { User,} from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

interface Data{
    [key:string]:any
}
interface Response{
    status:string,
    error:string | null,
    user?: User | null,
    data?:Data,
    error_code?:string,
    uri?:string,
    message?:string
}

class FirebaseService{
    async uploadFile(file:File){
      const storageRef = ref(storage,`uploads`)
      const response:Response = {
          status:"pending",
          error:null,
          user:null
        }
        try {
           const snapshot = await uploadBytes(storageRef,file)  
           const downloadUrl = await getDownloadURL(snapshot.ref)
           response.status = "success"
           response.uri = downloadUrl
           
        } catch (error:any) {
          console.log(error)
          response.status = "failed"
          response.error = error.message
          response.error_code = error.code
        }
      return response
    }
}

export  default new  FirebaseService() as FirebaseService