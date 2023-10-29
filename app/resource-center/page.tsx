import MainLayout from "../components/MainLayout";
import Link from "next/link";
import RegulationsHeader from "../components/RegulationHeader";

const links = [
    {title:"Content Title",url:"/",active:false},
]
export default function Page(){
  return(
    <MainLayout>
        <div>
         <RegulationsHeader active={2}/>
         <div className="bg-gray-200 py-3 px-4 mt-3">
          {links.map(link=>(
             <div className="flex items-center justify-between my-4" key={link.title}>
             <p aria-disabled={!link.active} className="font-bold aria-disabled:opacity-80">{link.title}</p>
             <Link href={link.url}>
               <button disabled={!link.active} className="p-1 disabled:cursor-not-allowed disabled:opacity-90  px-6 bg-white border rounded-md border-black">View</button>
             </Link>
            </div>
          ))}
         </div>
        </div>
    </MainLayout>
  )
}