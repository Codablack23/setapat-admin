"use client";

import { ChangeEvent } from "react";

const specifications = [
    "Flyer", "Poster", "Letterhead", "Invoice", "Business Card", "Cover Art", "Product Label"
]
const alldays = [
    "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday", "Sunday"
]
interface PickerProps{
    value:string[],
    handleSelect:(values:string[])=>void
}
export  function SpecificationPicker(props:PickerProps){
    const selectItem =(spec:string)=>{
      return ()=>{
       if(props.value.includes(spec)){
        return props.handleSelect(props.value.filter(item=>item !== spec))
       }

       return props.handleSelect([...props.value,spec])
      }
    }
    return (
        <div className="flex flex-wrap w-full gap-2 my-2">
           {specifications.map((s)=>(
            <button type="button" onClick={selectItem(s)} className={`px-5 py-1 ${props.value.includes(s)?"bg-black text-white":""} hover:bg-black hover:text-white rounded-md border text-sm border-gray-200`} key={s}>{s}</button>
           ))}
        </div>
    )
}
export  function WorkingDayPicker(props:PickerProps){
    const selectItem =(spec:string)=>{
        return ()=>{
         if(props.value.includes(spec)){
          return props.handleSelect(props.value.filter(item=>item !== spec))
         }
         return props.handleSelect([...props.value,spec])
        }
      }
    return (
        <div className="flex flex-wrap w-full gap-2 my-2">
           {alldays.map((d)=>(
            <button type="button" onClick={selectItem(d)} className={`px-5 py-1 ${props.value.includes(d)?"bg-black text-white":""} hover:bg-black hover:text-white rounded-md border text-sm border-gray-200`} key={d}>{d.slice(0,3)}</button>
           ))}
        </div>
    )
}