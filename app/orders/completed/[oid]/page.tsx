import MainHeader from "@/app/components/Header";
import BackHeader from "@/app/components/shared/BackHeader";
import ImageCarousel from "./ImageCarousel";

export default function Home() {
  return (
    <div>
      <BackHeader
        title="Design history"
      />
      <div className="max-w-2xl mx-auto">
      <MainHeader active={3}/>
      </div>
      <div className="my-6 grid md:grid-cols-5 gap-16">
        <div className="md:col-span-3">
        <ImageCarousel/>
        </div>
        <div className="md:col-span-2 py-4">
          <p className="text-xl">Flyer Design - Basic </p>
          <div className="flex items-center my-4 gap-4">
              <p className="font-semibold text-sm">Order Number</p>
              <div className="bg-gray-200 rounded-md flex p-2 flex-1 items-center justify-between">
                  <p>SAOPBS1707230001</p>
                  <button><i className="bi bi-files"></i></button>
              </div>
          </div>
          <div className="my-4 p-4 pt-4 pb-8 bg-gray-200">
                <p className="text-gray-400 font-bold text-sm my-2">Design Brief</p>
                <p className="text-sm">
                  {`I want a flyer design for a church programm,tittle" Come Take You palce oh Lord, Date 23th Fe 2023, Time 5pm, venue" Sars Rd by happy bite, Rukpukpu. 
                  I want a flyer design for a church programm, tittle" Come Take You palce oh Lord, Date 23th Feb 2023, Time 5pm, venue" Sars Rd by happy bite, Rukpukpu.`}</p>
          </div>
          <div className="my-4">
           <header className="p-2 bg-dark text-white rounded-t-md uppercase">DESIGN DETAILS</header>
           <div className="bg-gray-200 flex items-center justify-between p-2">
             <p className="uppercase">Total cost</p>
             <p className="font-bold">N4000</p>
           </div>
           <div className="my-3">
            <div className="flex items-center my-2 text-sm justify-between">
              <p className="font-medium">Order Time</p>
              <p className="">12 June 2022 | 9:45AM</p>
            </div> 
             <div className="flex items-center my-2 text-sm justify-between">
              <p className="font-medium">Response Time</p>
              <p className="">12 June 2022 | 9:45AM</p>
            </div>  
            <div className="flex items-center my-2 text-sm justify-between">
              <p className="font-medium">Design Delivery Time</p>
              <p className="">3 hrs or Less</p>
            </div>  
            <div className="flex items-center my-2 text-sm justify-between">
              <p className="font-medium">Turnaround Time</p>
              <p className="">12 June 2022 | 9:45AM</p>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}
