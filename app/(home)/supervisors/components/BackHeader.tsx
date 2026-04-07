"use client";
import ArrowLeftIcon from "@/app/(home)/icons/arrow-left"
import { useRouter } from "next/navigation"

export default function BackHeader(){
    const router = useRouter()
    return (
        <header className="flex gap-4 justify-between my-4 mb-12 items-center">
                <button onClick={router.back} className="px-6 py-2 rounded-md flex items-center gap-3 uppercase text-[#333333]">
                    <span><ArrowLeftIcon/></span>
                    <span>Back</span>
                </button>
            </header>
    )
}