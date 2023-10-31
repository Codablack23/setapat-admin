"use client";

import { AdminContext } from "@/app/AdminContext";
import { useContext } from "react";

export default function Overview(){
    const {overview} = useContext(AdminContext)
    const totalOrders = overview?overview.orders?overview.orders.length:0:0
    const designers = overview?overview.designers?overview.designers.length:0:0
    const users = overview?overview.users?overview.users.length:0:0
    const admins = overview?overview.admins?overview.admins.length:0:0
    const supervisors = overview?overview.supervisors?overview.supervisors.length:0:0
    const applications = overview?overview.applications?overview.applications.length:0:0
    const revenue = 0
    return (
        <div className="min-h-[200px] bg-white p-2">
        <p className="text-sm mb-6 uppercase">Overview/Statistics</p>
        <div className="grid grid-cols-2">
        <div className="font-medium my-2">
          <p className="text-sm">Total Orders</p>
          <p className="text-xl">{totalOrders}</p>
        </div> 
        <div className="font-medium my-2">
          <p className="text-sm">Designers</p>
          <p className="text-xl">{designers}</p>
        </div> 
        <div className="font-medium my-2">
          <p className="text-sm">Users</p>
          <p className="text-xl">{users}</p>
        </div> 
        <div className="font-medium my-2">
          <p className="text-sm">Admins</p>
          <p className="text-xl">{admins}</p>
        </div>  
        <div className="font-medium my-2">
          <p className="text-sm">Supervisors</p>
          <p className="text-xl">{supervisors}</p>
        </div>   
        <div className="font-medium my-2">
          <p className="text-sm">Designer Applications</p>
          <p className="text-xl">{applications}</p>
        </div> 
        <div className="font-medium my-2">
          <p className="text-sm">Revenue Generated</p>
          <p className="text-xl">N0</p>
        </div>
        </div>
      </div>
    )
}