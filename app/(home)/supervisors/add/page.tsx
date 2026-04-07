import BackHeader from "@/app/(home)/components/shared/BackHeader";
import Form from "./components/Form";

export default function Page(){
    return (
        <section className="pt-4">
            <BackHeader title="Add Supervisor"/>
            <div className="border border-grey max-w-md bg-white px-6 py-6 mx-auto mt-10">
                <p className="text-dark text-3xl my-4 mb-8 font-bold text-center">Add Supervisor Form</p>
                <Form/>
            </div>
        </section>
    )
}