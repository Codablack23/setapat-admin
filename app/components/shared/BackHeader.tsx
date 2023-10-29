"use client";
import {useRouter} from 'next/navigation'

interface HeaderProps{
    title:string
}
export default function BackHeader({title}:HeaderProps){
    const router = useRouter()
    return(
        <div className="flex items-center my-2 mb-8 gap-8">
          <button onClick={router.back}><i className="bi bi-arrow-left"></i></button>
          <p className="uppercase ml-8 text-sm font-bold text-gray-800">{title}</p>
        </div>
    )
}