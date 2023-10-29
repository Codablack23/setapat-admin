import Link from "next/link";

interface HeaderProps{
    active:number
}
export default function MainHeader(props:HeaderProps){
    return (
        <header className="flex w-full items-center gap-4">
           <div className="flex-1">
                <Link href={"/"}>
                <button className={`flex-1 border-b-8 ${props.active === 1?"border-[#FFCC00] text-black":"border-gray-300 text-gray-300"}  w-full py-3 bg-grey-100 sm:text-lg`}>PENDING</button>
                </Link>  
           </div>  
           <div className="flex-1">
                <Link href={"/orders/withdrawal"}>
                <button className={`flex-1 w-full border-b-8  ${props.active === 2?"border-[#FFCC00] text-black":"border-gray-300 text-gray-300"} py-3 bg-grey-100 sm:text-lg`}>WITHDRAWAL</button>
                </Link>  
           </div>  
           <div className="flex-1">
                <Link href={"/orders/"}>
                <button className={`flex-1 w-full border-b-8  ${props.active === 3?"border-[#FFCC00] text-black":"border-gray-300 text-gray-300"} py-3 bg-grey-100 sm:text-lg`}>DESIGN HISTORY</button>
                </Link>  
           </div> 
        </header>
    )
}