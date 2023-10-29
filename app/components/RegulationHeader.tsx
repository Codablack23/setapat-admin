import Link from "next/link";

interface HeaderProps{
    active:number
}
export default function RegulationsHeader(props:HeaderProps){
    return (
        <header className="flex w-full items-center gap-4">
           <div className="flex-1">
                <Link href={"/regulations"}>
                <button className={`flex-1 border-b-8 ${props.active === 1?"border-[#FFCC00] text-black":"border-gray-300 text-gray-300"}  w-full py-3 bg-grey-100 text-xl`}>REGULATIONS</button>
                </Link>  
           </div>  
           <div className="flex-1">
                <Link href={"/resource-center"}>
                <button className={`flex-1 w-full border-b-8  ${props.active === 2?"border-[#FFCC00] text-black":"border-gray-300 text-gray-300"} py-3 bg-grey-100 text-xl`}>RESOURCE CENTER</button>
                </Link>  
           </div>  
        </header>
    )
}