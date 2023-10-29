"use client";

export default function ImageCarousel(){
  return (
    <div className="p-2 relative min-h-[350px]">
        <button className="h-10 w-10 rounded-full absolute top-[40%] left-0 flex items-center justify-center bg-primary text-gray-700">
         <i className="bi bi-arrow-left"></i>
        </button> 
        <button className="h-10 w-10 rounded-full absolute top-[40%] right-0 flex items-center justify-center bg-primary text-gray-700">
         <i className="bi bi-arrow-right"></i>
        </button>
        <div className="max-w-md mx-auto">
             <div className="max-w-md mx-auto h-[250px] relative my-4 card bg-gray-200">
                <span className="absolute bg-dark p-2 rounded-md text-white inline-block bottom-3 left-3">
                    1/1
                </span>
             </div>
             <hr className="bg-gray-500 my-2" />
             <button className="w-full py-2 text-white bg-dark rounded-md">Download</button>
        </div>
        
    </div>
  )
}