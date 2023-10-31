import Link from "next/link"

interface LinkObject{
   title:string,
   url:string
}

interface SectionProps{
    title:string,
    links:LinkObject[]
}

export default function Sections(props:SectionProps){
   return(
    <div className="bg-white mb-3">
        <header className="bg-black text-white p-2 uppercase">
         <p className="">{props.title}</p>   
        </header>
        <ul className="p-2">
          {props.links.map((link)=>(
            <Link key={link.title} href={link.url}>
             <li  className="my-1 border-b border-gray-100 py-1 cursor-pointer capitalize">{link.title}</li>
            </Link>
          ))}
        </ul>
    </div>
   )
}