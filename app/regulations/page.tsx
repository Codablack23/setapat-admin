import Link from "next/link";
import MainLayout from "../components/MainLayout";
import RegulationsHeader from "../components/RegulationHeader";

const links = [
    {title:"About Setapat",url:"/about-setapat",active:true},
    // {title:"Employees Contract",url:"/employees-contract",active:true},
    {title:"Fonts & Image License",url:"/fonts-and-image-license",active:true},
    {title:"Privacy Policy",url:"/privacy-policy",active:true},
    {title:"Terms Of Use",url:"/terms-of-use",active:true},
]

export default function Page(){
  return(
    <MainLayout>
        <div>
         <RegulationsHeader active={1}/>
         <div className="bg-gray-200 py-3 px-4 mt-3">
          {links.map(link=>(
             <div className="flex items-center justify-between my-4" key={link.title}>
             <p className="font-bold">{link.title}</p>
             <Link href={link.url}>
               <button className="p-1 px-6 bg-white border rounded-md border-black">View</button>
             </Link>
            </div>
          ))}
         </div>
        </div>
    </MainLayout>
  )
}