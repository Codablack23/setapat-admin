"use client";

import { Select, TimePicker, Spin, Divider } from "antd";
import { ErrorMessage, Field, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import { SpecificationPicker, WorkingDayPicker } from "./ItemPicker";
import { Dayjs } from "dayjs";
import UploadImage from "./UploadImage";

interface CountryCode{
value:string,
label:string,
cc:string,
call_code:string
}

type WorkingHours = [start:Dayjs,stop:Dayjs]

interface FormValues{
    firstName:string,
    lastName: string,
    email: string,
    resumeLink: string,
    telegramHandle:string,
    phoneNumber:string
}

interface ApplicationFormProps{
    initialValues:FormValues,
    validationSchema:any
    loadingCountryCode:boolean,
    callCode:string,
    workingDays:string [],
    photoURL:string,
    setPhotoURL:(url:string)=>void, 
    gender:"male" | "female",
    setGender:(gender:"male"|"female")=>void,
    setWorkingDays:(wt:string[]) => void, 
    designSpecifications:string [],
    setDesignSpecifications:(wt:string[]) => void,
    workingHours: WorkingHours,
    setWorkingHours:(hours:WorkingHours) => void
    loading:boolean,
    options:CountryCode[],
    handleSelectCode:(value: string) => void,
    handleSubmit:(values:FormValues)=>Promise<any>
}

export default function ApplicationForm(props:ApplicationFormProps){
   const onSubmit=(values:FormValues,{}:FormikHelpers<FormValues>)=>{
        props.handleSubmit(values)
    }


  return(
    <Formik
    initialValues={props.initialValues}
    validationSchema={props.validationSchema}
    onSubmit={onSubmit}
    >
    {({handleSubmit})=>(
      <form onSubmit={(e)=>{
        e.preventDefault()
        handleSubmit(e)
      }} className="border border-gray-200 p-6">
      <h3 className="font-semibold text-2xl mb-8 text-center text-gray-900">Designer Application</h3>
      <div className="flex-1 my-5 text-center">
         <label htmlFor="" className="font-semibold text-gray-700 text-sm">Your Picture <span>*</span></label>
         <UploadImage
         photoURL={props.photoURL}
         setPhotoURL={props.setPhotoURL}
         />
      </div> <br />
      <div className="flex my-2 gap-2">   
       <div className="flex-1">
         <label htmlFor="" className="font-semibold text-gray-700 text-sm">FirstName <span>*</span></label>
         <Field name="firstName" type="text" className="w-full p-1 text-sm rounded-md border border-gray-200" placeholder="Enter Your FirstName" />
         <ErrorMessage className="font-medium text-red-600 text-sm" name="firstName" component="div" />

      </div>    
      <div className="flex-1">
         <label htmlFor="" className="font-semibold text-gray-700 text-sm">LastName <span>*</span></label>
         <Field name="lastName" type="text" className="w-full p-1 text-sm rounded-md border border-gray-200" placeholder="Enter Your LastName" />
         <ErrorMessage className="font-medium text-red-600 text-sm" name="lastName" component="div" />
      </div>  
      </div>
      <div className="my-5">
         <label htmlFor="" className="font-semibold text-gray-700 text-sm">Email <span>*</span></label>
         <Field  required name="email"  type="email" className="w-full p-1 text-sm rounded-md border border-gray-200" placeholder="Enter Your Email" />
         <ErrorMessage className="font-medium text-red-600 text-sm" name="email" component="div" />
      </div>  
      <div className="my-5">
         <label htmlFor="" className="font-semibold text-gray-700 text-sm">Gender <span>*</span></label>
          <div>
          <Select
          style={{
            width:"100%"
          }}
         value={props.gender}
         defaultValue={props.gender}
         options={[
            {value:"male",label:"Male"},
            {value:"female",label:"Female"},
         ]}
         onSelect={(v)=>props.setGender(v)}
         />
          </div>
      </div>  
      <div className="my-5">
         <label htmlFor="" className="font-semibold text-gray-700 text-sm">Email <span>*</span></label>
         <div className="border p-1 flex gap-3 border-gray-200 rounded-md">
             <Select
           //   loading={props.loadingCountryCode}
             bordered={false}
             options={props.options}
             value={props.callCode}
             className="text-sm"
             onSelect={props.handleSelectCode}
             />
             <Field
             type="number"
             name="phoneNumber"
             minLength={9}
             placeholder="901245678900"
             maxLength={20}
             style={{outline:"none"}}
             className="flex-1 text-sm px-2 py-1 "
             />
           </div>
          <ErrorMessage className="font-medium text-red-600 text-sm" name="phoneNumber" component="div" />
      </div> 
      <div className="my-5">
         <label htmlFor="" className="font-semibold text-gray-700 text-sm">Telegram Handle <span>*</span></label>
        <div className="border border-gray-200 p-1 flex rounded-md w-full">
          <Field 
          required 
          name="telegramHandle"
          type="text"
          className="outline-none w-full text-sm" 
          placeholder="Enter your Telegram Handle" />
        </div>
        <ErrorMessage className="font-medium text-red-600 text-sm" name="telegramHandle" component="div" />
      </div> 
      <div className="my-5 w-full">
         <label htmlFor="" className="font-semibold text-gray-700 text-sm">Design Specifications <span>*</span></label>
         <SpecificationPicker
         value={props.designSpecifications}
         handleSelect={props.setDesignSpecifications}
         />
      </div>  
      <div className="my-5 w-full">
         <label htmlFor="" className="font-semibold text-gray-700 text-sm">Working Days <span>*</span></label>
         <WorkingDayPicker
            value={props.workingDays}
            handleSelect={props.setWorkingDays}
         />
      </div>  
      <div className="my-5 w-full">
         <label htmlFor="" className="font-semibold text-gray-700 text-sm">Choose Time <span>*</span></label>
         <div>
           <TimePicker.RangePicker
           defaultValue={props.workingHours}
           value={props.workingHours}
            format={[
               "HH:mm",
               "HH:mm",
            ]}
            minuteStep={15}
            onChange={(values)=>{
             props.setWorkingHours(values as WorkingHours)
            }}
           />
         </div>
      </div> 
      <div className="my-5">
         <label htmlFor="" className="font-semibold text-gray-700 text-sm">Resume Link <span>*</span></label>
         <Field name="resumeLink"  type="text" className="w-full p-1 text-sm rounded-md border border-gray-200" placeholder="Enter Your resume Link " />
         <ErrorMessage className="font-medium text-red-600 text-sm" name="resumeLink" component="div" />
      </div>
      {props.loading
      ?<button  className="w-full rounded-md flex items-center justify-center p-2 bg-gray-700 text-white" type="button">
       <Spin/>
      </button>
      :<button type="submit" className="w-full rounded-md p-2 bg-dark text-white">Apply </button>
      }
  
      <Divider>
      <p className="text-gray-400 text-sm  text-center my-2"> OR </p>
      </Divider>      
      <Link href={"/accounts/login"}>
       <button type="button" className="font-semibold my-1 w-full py-2 rounded-md border bg-primary border-gray-200 text-gray-700">Login instead</button>
       </Link>

    </form>
    )}
    </Formik>
  )
}