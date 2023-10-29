import { getCountries } from "@/services/Content"
import { useEffect, useState } from "react"

interface CountryCodes{
    value:string,
    label:string,
    cc:string,
    call_code:string
  }

export function useCountryCodes(){
    const [isLoading,setIsLoading] = useState(true)
    const [options,setOptions] = useState<CountryCodes[]>([{
        value:"+234",
        label:"+234",
        call_code:"+234",
        cc:"NGA",
      }])
    useEffect(()=>{
        const getCountryData = async ()=>{
          const res = await getCountries()      
          setIsLoading(false)
          if(res.status === "success" || res.status === 200){
            const newOptions = res.data.filter((d:any)=>d.idd).map((d:any)=>({
              call_code:`${d.idd.root}${d.idd.suffixes?d.idd.suffixes.join(""):""}`,
              cc:d.cca3
            })).map((d:any)=>({
              value:`${d.call_code}`,
              label:`${d.call_code} ${d.cc}`,
              call_code:`${d.call_code}`,
              cc:d.cc
            }))
            setOptions(newOptions)
          }
        }
        getCountryData()
      },[])

      return [options,isLoading]
}