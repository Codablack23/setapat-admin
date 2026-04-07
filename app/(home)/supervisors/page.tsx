import Link from "next/link";
import SupervisorTable from "./components/SupervisorTable";
import BackHeader from "../components/shared/BackHeader";


export default function Page(){
    
    return (
        <section className="pt-8">
            <BackHeader title="Supervisors"/>
            <header className="flex gap-4 justify-between my-4 items-center">
                <h2>All Supervisors(0)</h2>
                <Link href={"/supervisors/add"}><button className="px-6 py-2 rounded-md bg-black text-white">Add Supervisor</button></Link>
            </header>
            <SupervisorTable/>
        </section>
    )
}