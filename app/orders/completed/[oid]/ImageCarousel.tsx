"use client";

export default function ImageCarousel(){
  return (
    <div className="p-2 relative min-h-[350px]">
        <button className="h-8 w-8 rounded-full absolute top-[40%] left-0 flex items-center justify-center bg-primary text-gray-700">
         <i className="bi bi-arrow-left"></i>
        </button> 
        <button className="h-8 w-8 rounded-full absolute top-[40%] right-0 flex items-center justify-center bg-primary text-gray-700">
         <i className="bi bi-arrow-right"></i>
        </button>
        <div className="w-[89%] mx-auto">
             <div className="h-[250px] relative my-4 card bg-gray-200">
                <span className="absolute bg-dark p-2 rounded-md text-white inline-block bottom-3 left-3">
                    1/1
                </span>
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
        </div>
        
    </div>
  )
}