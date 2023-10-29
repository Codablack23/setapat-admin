import BackHeader from "@/app/components/shared/BackHeader";
import Link from "next/link";

export default function Page({params}:{params:{oid:string}}){
    return(
        <div>
          <BackHeader
          title="Pending"
          />
          <div className="grid md:grid-cols-2 md:gap-32">
            <div className="my-3">
            <header className="my-2 flex items-center justify-between">
                <p className="text-gray-400">Flyer Design Basic</p>
                <button className="py-2 rounded-md px-6 bg-dark text-white">
                    <span>Commence Task</span>
                </button>
            </header>
            <div className="border p-4 py-6 rounded-md">
                <p className="font-bold text-gray-400 mb-2">Design Brief</p>
                <p>{`I want a flyer design for a church programm,tittle" Come Take You palce oh Lord, Date 23 Feb 2023. Time 5pm, venue at Sars Rd, by happy bite, Rukpokwu. I want a flyer design for a church programm,tittle" Come Take You palce oh Lord, Date 23 Feb 2023. Time 5pm, venue at Sars Rd, by happy bite, Rukpokwu.`}</p>
            </div>
             <div className="p-2 bg-grey-300">
                <div className="flex bg-white items-center text-sm font-bold p-2">
                    <div className="flex-1">
                        <p>A5</p>
                    </div>
                    <div className="flex-1">210 x 148</div>
                    <div className="flex-1">Millimeters</div>
                    <div className="flex-1 flex items-center gap-2">
                        <div className="w-12 h-8 bg-grey-300"></div>
                        <p>1 Page</p>
                    </div>
                </div>
             </div>
             <div className="my-4 p-2 bg-grey-300 flex items-center justify-between">
                <p className="uppercase font-bold text-sm text-gray-500">total Cost</p>
                <p className="uppercase font-bold">N5000</p>
             </div>
             <hr className="my-2 bg-gray-500" />
             <div className="flex items-center gap-2">
               <Link href={`/orders/${params.oid}/uploads`}>
               <button className="card rounded-sm px-7 py-2">
                    <i className="bi bi-eye-fill mr-2"></i>
                    <span>View Image Photos</span>
                </button>
               </Link>
                <div className="text-sm">
                    <p>Uploaded</p>
                    <p>({5} items)</p>
                </div>
             </div>
            </div>

            <div className="my-8 md:my-3">
                <div className="flex items-center gap-4">
                    <p className="font-semibold text-sm">Order Number</p>
                    <div className="bg-gray-200 rounded-md flex p-2 flex-1 items-center justify-between">
                        <p>SAOPBS1707230001</p>
                        <button><i className="bi bi-files"></i></button>
                    </div>
                </div>
                <div className="my-4">
                    <header className="rounded-t-md bg-dark text-lg text-white p-2 uppercase">Design Delivery Time</header>
                    <div className="flex items-center justify-between my-2">
                        <p>Design Delivery Time</p>
                        <p>3 hrs or Less</p>
                    </div> 
                    <div className="flex items-center justify-between my-2">
                        <p>Order Time</p>
                        <p>12th June 2023 | 9:45AM</p>
                    </div>
                </div>  
                <div className="my-4">
                    <header className="flex items-center justify-center gap-7 rounded-t-md bg-dark text-white p-2 uppercase">
                        <div className="font-bold flex gap-2 text-2xl">
                            <p>2 :</p>
                            <p>25 :</p>
                            <p>03</p>
                        </div>
                        <span className="bg-white rounded-md text-black inline-block p-2 px-6 font-bold">TIME TO GO</span>
                    </header>
                    <div className="flex items-center justify-between my-2">
                        <p>Ready Time</p>
                        <p>12th June 2023 | 12:45PM</p>
                    </div>
                </div>  
                <div className="my-4">
                    <div className="flex items-center px-6  gap-3 bg-danger text-white p-2">
                        <button className="text-danger border-white bg-white flex items-center justify-center w-5 h-5 rounded-sm"><i className="bi bi-check text-3xl"></i></button>
                        <p>Marked as Confidential</p>
                    </div>
                </div>  
                <div className="mt-6 mb-2">
                    <p className="text-sm font-bold">Order Chat Room Here</p>
                    <div className="flex items-center  gap-3 bg-gray-200 p-4 rounded-sm">
                       <div className="flex-[2]">
                       <input type="text" className="text-sm w-full" placeholder="Type your message here" style={{outline:"none",background:"none"}} />
                       </div>
                       <div className="flex flex-1 justify-end gap-2">
                         <button className=""><i className="bi bi-paperclip text-xl"></i></button>
                       </div>
                    </div>
                </div> 
                <div className="card p-2 rounded-md">
                  <button className="my-2">Upload Images</button>
                  <div className="flex items-center px-6  gap-3 bg-gray-300 text-gray-800 p-2">
                        <button className="text-danger border border-gray-800 flex items-center justify-center w-5 h-5 rounded-sm"></button>
                        <p>Marked as Completed</p>
                    </div>
                </div>
                <div className="mt-4 mb-2">
                    <header className="text-sm font-bold p-2 rounded-t-md bg-dark text-white">Quality Control ChatRoom</header>
                    <div className="flex items-center  gap-3 bg-gray-200 p-4 rounded-sm">
                       <div className="flex-[2]">
                       <input type="text" className="text-sm w-full" placeholder="Type your message here" style={{outline:"none",background:"none"}} />
                       </div>
                       <div className="flex flex-1 justify-end gap-2">
                         <button className=""><i className="bi bi-paperclip text-xl"></i></button>
                       </div>
                    </div>
                </div>
                
            </div>
          </div>  
        </div>
    )
}