import { Select } from "antd";
import MainLayout from "../components/MainLayout";

export default function Page(){
    return(
        <MainLayout>
             <header className="mb-4 py-5 px-3 bg-gray-100 font-bold">Submit A Suggestion/Report An Issue</header>
                <div className="my-3">
                    <Select
                    options={[
                        {
                            label:"Select Category",
                            value:""
                        }
                    ]}
                    defaultValue={"Select Category"}
                    className="w-full my-3"
                    />
                </div>
                <p className = "text-lg my-3">Please be as detailed as possible and let us know if you expect or require any specific benefits. Response will be forwarded to your email address used in your account registration </p>
                <div className="border border-gray-300 rounded-md p-3 mt-8 mb-4">
                    <textarea className="h-40 w-full mb-2 resize-none" placeholder={"Write us a message"} style={{outline:"none"}}></textarea>
                    <div className="flex justify-end gap-4">
                        <button><i className="bi bi-camera-fill text-2xl"></i></button>
                        <button><i className="bi bi-mic-fill text-2xl"></i></button>
                    </div>
                </div>
                <button className="bg-dark w-full rounded-md py-1 text-lg text-white">Submit</button>
        </MainLayout>

    )
}