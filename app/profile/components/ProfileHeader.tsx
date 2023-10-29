export default function ProfileHeader(){
    return(
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="bg-gray-200 h-32 w-32 border border-black rounded-full"></div>
                <div>
                    <p className="text-2xl font-semibold">John Doe</p>
                    <p className="">Date of Employment</p>
                    <p className="text-sm font-bold">12:51,8 Jan -23</p>
                </div>
            </div>
            <div>
                <div className="flex mb-2 items-center justify-center gap-10">
                    <div className="flex items-center gap-2">
                        <p className="">Male</p>
                        <button className="h-4 w-4 border border-black rounded-full flex items-center justify-center">
                            <span className="h-2 bg-dark w-2 rounded-full"></span>
                        </button>
                    </div> 
                    <div className="flex gap-2 items-center">
                        <p className="">Female</p>
                        <button className="h-4 w-4 border border-black rounded-full flex items-center justify-center">
                        </button>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <button className="px-4 font-medium">Edit Profile Info</button>
                    <button className="px-4 bg-dark text-white py-2 rounded-md">Change Picture</button>
                </div>
            </div>
        </div>
    )
}