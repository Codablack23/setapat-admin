"use client";

export default function Overview(){
  

    return (
        <div className="min-h-[200px] bg-white p-2">
        <p className="text-sm mb-6 uppercase">Overview/Statistics</p>
        <div className="grid grid-cols-2">
        <div className="font-medium my-2">
          <p className="text-sm">Total Orders</p>
          <p className="text-xl">{0}</p>
        </div> 
        <div className="font-medium my-2">
          <p className="text-sm">Designers</p>
          <p className="text-xl">{0}</p>
        </div> 
        <div className="font-medium my-2">
          <p className="text-sm">Users</p>
          <p className="text-xl">{0}</p>
        </div> 
        <div className="font-medium my-2">
          <p className="text-sm">Admins</p>
          <p className="text-xl">{0}</p>
        </div>  
        <div className="font-medium my-2">
          <p className="text-sm">Supervisors</p>
          <p className="text-xl">{0}</p>
        </div>   
        <div className="font-medium my-2">
          <p className="text-sm">Designer Applications</p>
          <p className="text-xl">{0}</p>
        </div> 
        <div className="font-medium my-2">
          <p className="text-sm">Revenue Generated</p>
          <p className="text-xl">N0</p>
        </div>
        </div>
      </div>
    )
}