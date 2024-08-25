"use client";

import { FaHistory, FaRegUser } from "react-icons/fa";
import ProfileFormComp from "./profileFormComp";
import HistoryComp from "./historyComp";

const ProfilePage = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */ }
            <div className="bg-white w-[20%] sticky py-8 px-16">
                <h2 className="text-xl font-bold mb-8">User Profile</h2>
                <ul>
                    <li className="flex items-center gap-4 mt-4 text-lg cursor-pointer">
                        <span> <FaRegUser /></span>
                        <span className="font-bold">Profile</span>
                    </li>
                    <li className="flex items-center gap-4 mt-4 cursor-pointer text-lg">
                        <span> <FaHistory /> </span>
                        <span>History</span>
                    </li>
                </ul>
            </div>

            <div className="flex-1 p-10">
                <ProfileFormComp />
                {/* <HistoryComp /> */}
            </div>
        </div>
    )

    // return (
    //     <div className="settings-container">
    //         <div className="sidebar h-screen max-h-screen overflow-x-hidden overflow-y-hidden">
    //             <div className="sticky">
    //                 <h2>User Profile</h2>
    //                 <div>

    //                 </div>
    //             </div>
    //         </div>

    //     </div>
    // )
}

export default ProfilePage