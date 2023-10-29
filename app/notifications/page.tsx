import { Image } from "antd";
import MainLayout from "../components/MainLayout";

function Notification(){
    return(
        <li className="flex items-start my-4 p-4 bg-gray-100">
        <Image
        src="/images/logo-symbol.svg"
        alt="logo"
        height={24}
        width={24}
        />
        <div className="flex-1 px-8">
            <p className="font-bold text-lg capitalize">New Font alert</p>
            <p>{`Hi, checkout the new fonts addition in the "Media Content", download all and add more creative options to your designs. Show evidence!`}</p>
            <div className="flex items-center justify-between py-4">
               <p className="font-bold text-sm">3 days Ago</p>
               <button className="font-bold text-sm">View Font</button>
            </div>
        </div>
        <button><i className="bi bi-trash-fill text-xl"></i></button>
    </li>
    )
}

export default function Page(){
    return(
     <MainLayout>
        <div>
            <header className="bg-gray-200 p-4"><p className="text-sm font-bold">Notifications</p></header>
            <ul>
               <Notification/>
               <Notification/>
               <Notification/>
            </ul>
        </div>
     </MainLayout>
    )
}