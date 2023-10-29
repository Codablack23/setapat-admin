"use client";
import {Checkbox, Divider, Space, Spin, notification,Select, TimePicker, message} from "antd"
// import Accounts from '@/services/Accounts'
import Link from "next/link";
import {ChangeEvent, ChangeEventHandler, FormEvent, ReactNode, useState,} from 'react'
import {SpecificationPicker, WorkingDayPicker} from "./components/ItemPicker";
import dayjs, { Dayjs } from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat'
import ApplicationForm from "./components/ApplicationForm";
import * as Yup from 'yup'
import { useCountryCodes } from "./hooks/useCountryCodes";
import Accounts from "@/services/Accounts";

dayjs.extend(customParseFormat)

interface FormValues{
    firstName:string,
    lastName: string,
    email: string,
    resumeLink: string,
    telegramHandle:string,
    phoneNumber:string
}

interface CountryCodes{
    value:string,
    label:string,
    cc:string,
    call_code:string
  }
  type WorkingTime = dayjs.Dayjs[] 
export default function LoginPage(){

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (message:ReactNode,description:ReactNode) => {
    api.error({
      message,
      description,
      duration: 10,
    });
  };
  const initialValues = {
    firstName:"",
    lastName: "",
    email: "",
    resumeLink: "",
    telegramHandle:"",
    phoneNumber:""
  }
  
  const [photoURL,setPhotoURL] = useState("")
  const [applied,setApplied] = useState(false)
  const [gender,setGender] = useState<"male"|"female">("male")
  const [workingDays,setWorkingDays] = useState<string[]>([])
  const [designSpecifications,setDesignSpecs] = useState<string[]>([])
  const [stopTime,setStopTime] = useState(dayjs('17:00:00', 'HH:mm:ss'))
  const [startTime,setStartTime] = useState(dayjs('09:00:00', 'HH:mm:ss'))
  const [call_code,setCallCode] = useState("+234")
  const handleSelectCallCode=(value:string,)=>{
     setCallCode(value)
  }

  const [loading,setLoading] = useState(false)
  const [countryCodes,isLoading] = useCountryCodes()
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
    .min(2, 'Name must be minimum 2')
    .max(100, 'Name must not be more than 100 characters')
    .required('Name is required'), 
    lastName: Yup.string()
    .min(2, 'Last Name must be minimum 2')
    .max(100, 'Last Name must not be more than 100 characters')
    .required('Last Name is required'), 
    phoneNumber: Yup.string()
    .min(9, 'Phone Number must be minimum 9')
    .max(20, 'Phone Number must not be more than 20 digits')
    .required('Phone Number is required'),
    email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
    telegramHandle: Yup.string()
     .min(3, 'Telegram must be at least 3 characters long')
     .required('Telegram Handle is required'),
    resumeLink: Yup.string()
      .url("Please provide a valid link")
     .required('Your resume is required'),
  })

  const checkFields = ()=>{
    if(!photoURL){ 
         message.error("Please select an image")
          return false
    };
    if(workingDays.length < 3) { 
        message.error("Please select atleast three working days")
        return false
    };
    if(designSpecifications.length < 3){
          message.error("Please select atleast three design specifications days")
          return false
    };
    return true

  }
  const handleSubmit = async (values:FormValues)=>{
    const isValid = checkFields()
    if(isValid){
      console.log({values,photoURL})
      setLoading(true)
      const res = await Accounts.apply({
       ...values,  
       gender,
       photoURL,
       workingDays:workingDays.join(","),
       startTime,
       stopTime,
       designSpecifications:designSpecifications.join(",")
      })
      // console.log(res)
      if(res.status == "success"){
       setApplied(true)
      }else{
        // console.log(res)
        if(res.errors){
         openNotification("Account creation Failed",res.errors[0].msg)
        }else{
         openNotification("Account creation Failed",res.error_message) 
        }
      }
      setLoading(false)
    }
 

  }
    const handleTimePick = ([start,stop]:WorkingTime)=>{
       setStartTime(start)
       setStopTime(stop)
    }
    return(
      <>
      {contextHolder}
      <section className="my-8 max-w-lg mx-auto gap-3">
        <div>
          {applied
          ?(
            <div className="pt-10">
                <div className="border min-h-[200px] border-gray-300 p-4 text-center rounded-md">
             <p className="text-7xl my-3"><i className="bi bi-check-circle text-green-500"></i></p>
             <p className="text-3xl font-medium">Application Submitted</p>
             <p className="w-10/12 mx-auto text-lg my-2">You have successfully applied for a designer role at setapat we will review your application and get back to you as soon as possible </p>

          </div>
            </div>
          )
          :<ApplicationForm
          gender={gender}
          setGender={setGender}
          handleSelectCode={handleSelectCallCode}
          designSpecifications={designSpecifications}
          setDesignSpecifications={setDesignSpecs}
          loading={loading}
          options={countryCodes as CountryCodes[]}
          callCode={call_code}
          loadingCountryCode={isLoading as boolean}
          workingDays={workingDays}
          initialValues={initialValues}
          photoURL={photoURL}
          setPhotoURL={setPhotoURL}
          workingHours={[startTime, stopTime]}
          setWorkingHours={handleTimePick} 
          validationSchema={validationSchema} 
          setWorkingDays={setWorkingDays} 
          handleSubmit={handleSubmit}          
        />}
        </div>
      </section>
      </>
    )
 }