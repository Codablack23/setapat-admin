"use client";

import FirebaseService from "@/services/FirebaseService";
import { UploadProps, message, Upload, Button,Image,Spin } from "antd";
import { useState } from "react";

const suportedImageTypes = ["jpg","png","jpeg","svg"]

interface UploadImageProps{
    photoURL:string | undefined | null,
    setPhotoURL:(fileUrl:string)=>void
}
export default function UploadImage({setPhotoURL,photoURL}:UploadImageProps){
    const [isUploading,setIsUploading] = useState(false)
    const handleUpload = async(file:File)=>{
        setIsUploading(true)
        const res = await FirebaseService.uploadFile(file as File)
        if(res.status !== "success"){
          message.error(res.error_code)
        }else{
          setPhotoURL(res.uri as string)
          setIsUploading(false)
        }
        setIsUploading(false)
  
      }
    const props: UploadProps = {
        beforeUpload: (file) => {
          const isSupportedImage = suportedImageTypes.some(type=>file.name.endsWith(`.${type}`))
          if (!isSupportedImage) {
            message.error(`sorry we only support the following image ${suportedImageTypes.join(" ,")}`);
          }
         
          handleUpload(file)
          return false
        },
        showUploadList:false,
        maxCount:1,
        
      };
    return (
        <div className="flex justify-center items-center">
          {
            photoURL?
            <div className="rounded-full relative flex w-28 h-28 mx-auto my-6  bg-gray-400 items-center justify-center">
                <Image
                src={photoURL}
                className="rounded-full object-cover"
                alt="profile-image"
                width={"100%"}
                height={"112px"}
                preview={false}
                />
                 <Upload className="block w-full flex-1" disabled={isUploading} {...props}>
                    <button type="button" className="absolute rounded-full h-8 w-8 flex items-center justify-center bg-white shadow-md  bottom-3 right-0">
                    <i className="bi bi-camera text-xl"></i>
                    </button>
                </Upload>
            </div>
         
            :<div className="">
                <Upload className="block w-full flex-1" disabled={isUploading} {...props}>
                    <button type="button" className="h-28 mx-auto w-28 rounded-full border-dashed border  block">
                    <i className="bi bi-plus-lg text-3xl"></i>
                    </button>
                </Upload>
            </div>
          }        
      </div>
            
    )
}