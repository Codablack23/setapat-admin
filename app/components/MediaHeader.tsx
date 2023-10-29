import Link from "next/link";

interface HeaderProps{
    active:number
}
export default function MediaCenterHeader(props:HeaderProps){
    return (
        <header className="flex w-full items-center gap-4">
           <div className="flex-1">
                <Link href={"/fonts/"}>
                <button className={`flex-1 border-b-8 ${props.active === 1?"border-[#FFCC00] text-black":"border-gray-300 text-gray-300"}  w-full py-3 bg-grey-100 text-xl`}>FONTS</button>
                </Link>  
           </div>  
           <div className="flex-1">
                <Link href={"/icons/"}>
                <button className={`flex-1 w-full border-b-8  ${props.active === 2?"border-[#FFCC00] text-black":"border-gray-300 text-gray-300"} py-3 bg-grey-100 text-xl`}>ICONS</button>
                </Link>  
           </div>  
           <div className="flex-1">
                <Link href={"/references/"}>
                <button className={`flex-1 w-full border-b-8  ${props.active === 3?"border-[#FFCC00] text-black":"border-gray-300 text-gray-300"} py-3 bg-grey-100 text-xl`}>REFERENCES</button>
                </Link>  
           </div> 
        </header>
    )
}