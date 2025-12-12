import { RiDeleteBin5Line } from "react-icons/ri";

export default function GuestPage () {
    return (
        <main className="min-h-screen flex justify-center px-2 md:py-20 md:px-12 lg:py-20 lg:px-20">
            <div className="w-full md:w-[350px] h-[400px] shadow-md rounded-md py-5 px-5">
                <h1 className="text-3xl text-gray-800 text-center">Guest Details</h1>
                <div className="flex flex-col gap-4 mt-5">
                    <div className="flex justify-between">
                        <p className="text-gray-800 text-xl">Guest Name</p>
                        <p className="text-gray-600 text-sm mt-2">Augustine Emmanuel</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-800 text-xl">Phone Number</p>
                        <p className="text-gray-600 text-sm mt-2">+2349046758368</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-800 text-xl">RoomType</p>
                        <p className="text-gray-600 text-sm mt-2">Deluxe Room</p>
                    </div>
                     <div className="flex justify-between">
                        <p className="text-gray-800 text-xl">RoomNumber</p>
                        <p className="text-gray-600 text-sm mt-2">001</p>
                    </div>
                     <div className="flex justify-between">
                        <p className="text-gray-800 text-xl">CheckInDate</p>
                        <p className="text-gray-600 text-sm mt-2">25/12/2025</p>
                    </div>   
                </div>
                <div className="mt-5">
                    <button className=" w-[60px]  h-[50px] bg-red-500 text-white flex justify-center items-center rounded-md shadow-md cursor-pointer">
                        <RiDeleteBin5Line className="text-2xl"/>
                    </button>
                </div>

            </div>


        </main>
    )
}