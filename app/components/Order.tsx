interface OrderProps{
    status:string,
}

export default function Order(props:OrderProps){
    const status = props.status === "withdrawn"?"bg-danger":"bg-dark"
    const statusText = props.status === "withdrawn"?"text-danger":"text-dark"
    return(
        <div className="rounded-md my-3 bg-gray-100">
         <header className={`text-white text-xl py-2 text-center uppercase rounded-t-md ${status}`}>{props.status}</header>
         <div className="flex items-start gap-8 p-4 ">
            <div className="flex-1">
                <div className="w-full h-[300px] relative border border-gray-600 bg-white rounded-md">
                    <button className="bottom-3 absolute left-3 p-2 bg-black rounded-md text-white">1/1</button>
                </div>
            </div>
            <div className="flex-[2] py-8">
                <p className="text-gray-600 text-sm font-semibold">Order Number</p>
                <div className="p-2 bg-gray-50 rounded-md flex items-center justify-between">
                    <p>SAOPBS1707230001</p>
                    <button className=""><i className="bi bi-files"></i></button>
                </div>
                <div className="my-4">
                   <p className="font-semibold">Design Brief</p>
                   <p className="my-1">I want a flyer design for a church programm, tittle&apos; Come Take You palce oh ...</p>
                </div>
                <div className="my-1">
                    <button><i className="bi bi-download"></i></button>
                </div>
            </div>
         </div>
         <footer className="bg-gray-200 py-2 rounded-b-md px-4 flex items-center justify-between">
            <p className="text-gray-600 text-sm"><span className="font-bold">Time of Assigning</span> {new Date().toISOString()}</p>
            <p className="text-gray-600"><span className="font-bold">Delivery Time Left</span> <span className={`font-bold ${statusText}`}>23:08:06</span></p>
         </footer>
        </div>
    )
}