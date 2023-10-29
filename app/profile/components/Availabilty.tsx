"use client";
import { useState } from "react";

export default function AvailabiltyStatus(){
    const [workdays,setWorkdays] = useState<string[]>([])
    const days = ["mon","tues","wed","thurs","fri","sat","sun"]
    const addDay=(day:string)=>{
     return ()=>{
        setWorkdays(prev=>[...prev,day])
     }
    }
    const removeDay=(day:string)=>{
     return ()=>{
        setWorkdays(workdays.filter(workday=>day !== workday))
     }
    }
    return (
        <section>
          <header className="bg-dark uppercase rounded-t-md text-white p-2 text-lg">Availabilty Status</header>
          <div className="my-4">
            <div className="flex items-center my-2 gap-5">
                <p>Days</p>
                <div className="flex-1 flex gap-2 items-center">
                    {days.map(day=>(
                      workdays.includes(day)
                      ?<button onClick={removeDay(day)} className="bg-dark text-white text-sm rounded-md px-6 flex-1 py-2 font-bold capitalize" key={day}>{day}</button>
                      :<button onClick={addDay(day)} className="border hover:bg-black hover:text-white transition-all border-black text-sm rounded-md px-6 flex-1 py-2 font-bold capitalize" key={day}>{day}</button>
                    ))}
                </div>
            </div>
            <div className="my-2 flex items-center">
                <p>Time:</p>
                <div className="flex items-center gap-4 flex-1 justify-between">
                <span className="bg-dark inline-block text-white text-sm rounded-md px-6 py-2 font-bold capitalize">24 hours</span>
                <button className="border hover:bg-black hover:text-white transition-all border-black text-sm rounded-md px-6 py-2 font-bold capitalize" >Save</button>
                </div>
            </div>
          </div>
        </section>
    )
}