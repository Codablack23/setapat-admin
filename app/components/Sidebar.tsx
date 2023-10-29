import Link from "next/link";

export default function SideBar(){
    return (
        <div className="fixed top-[75px] min-h-screen w-[350px] left-0 px-12 p-8 bg-grey-300">
          <div className="rounded md bg-grey-100 p-2 text-center my-4">
             <p>Media Content</p>
             <Link href={"/fonts"}>
               <button className="bg-dark py-2 m w-full rounded-md my-1 text-white">Fonts</button>
             </Link> 
             <Link href={"/icons"}>
               <button className="bg-dark py-2 w-full rounded-md my-1 text-white">Icons</button>
             </Link> 
             <Link href={"/references"}>
               <button className="bg-dark py-2 w-full rounded-md my-1 text-white">References</button>
             </Link>
          </div> 
          <div className="rounded md bg-gray-200 p-2 text-center my-4">
             <p>Resource Center</p>
             <Link href={"/resource-center"}>
               <button className="bg-dark py-2 w-full rounded-md my-1 text-white">View</button>
             </Link> 
          </div>
         <div className="rounded md bg-gray-200 p-2  text-center my-4">
             <p>Feedback Box</p>
             <Link href={"/feedback/"}>
               <button className="bg-dark py-2 w-full my-1 rounded-md text-white">Submit</button>
             </Link> 
          </div> 
          <div className="rounded md bg-gray-200 p-2 text-center my-4">
             <p>Regulations</p>
             <Link href={"/regulations/"}>
               <button className="bg-dark py-2 w-full my-1 rounded-md text-white">View</button>
             </Link> 
          </div>
          
        </div>
    )
}