"use client";

import { FaHistory, FaRegUser } from "react-icons/fa";
import { useState } from "react";
import HistoryComp from '@/components/History/index';
import ProfileFormComp from "@/components/ProfileForm";

const ProfilePage = () => {
    const [pageName, setPageName] = useState("Profile");
    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */ }
            <div className="bg-white w-[20%] sticky py-8 px-16">
                <h2 className="text-xl font-bold mb-8">User Profile</h2>
                <ul>
                    <li className="flex items-center gap-4 mt-4 text-lg cursor-pointer" onClick={() => setPageName("Profile")}>
                        <span> <FaRegUser /></span>
                        <span className="font-bold">Profile</span>
                    </li>
                    <li className="flex items-center gap-4 mt-4 cursor-pointer text-lg" onClick={() => setPageName("History")}>
                        <span> <FaHistory /> </span>
                        <span>History</span>
                    </li>
                </ul>
            </div>

            <div className="flex-1 p-10">
                {pageName == "Profile" &&  <ProfileFormComp />}
                {pageName == "History" &&  <HistoryComp />}
            </div>
        </div>
    )
}

export default ProfilePage