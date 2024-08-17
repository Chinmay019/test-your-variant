"use client";

import { useState } from "react";
import Image from "next/image";
import profilePic from "./sk.png"
import { TbPhotoEdit } from "react-icons/tb";
import { GoPencil } from "react-icons/go";
import "./styles.css";

const ProfilePage = () => {
    const [formData, setFormData] = useState({
        firstName: 'Sara',
        lastName: 'Tancredi',
        email: 'SaraTancredi@gmail.com',
        phoneNumber: '(+91) 9123728167',
        location: 'New Delhi'
    });

    let saveChangesBtnClass = `btn btn-outline btn-success`;

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const saveDate = () => {
        // to be implemented
        console.log("saving data")
    }

    return (
        <div className="flex min-h-screen bg-gray-200">
            {/* Sidebar */ }
            <div className="bg-white w-[20%] p-8">
                <h2 className="text-xl font-bold mb-4">User Profile</h2>
                <ul>
                    <li className="mb-2 text-orange-300 font-semibold">Profile</li>
                    <li className="mb-2">History</li>
                </ul>
            </div>

            {/* Profile Form */ }
            <div className="flex-1 p-10">
                <div className="bg-white rounded-lg p-8 shadow-md">
                    <div className="relative w-[120px]">
                        <Image
                            src={ profilePic }
                            alt="Profile Picture"
                            width={ 120 }
                            height={ 120 }
                            className="rounded-full"
                        />
                        <div className="absolute bottom-0 right-0">
                            <button className="btn btn-xs text-xl text-bg-light rounded-lg">
                                <span className="">
                                    {/* <TbPhotoEdit /> */}
                                    <GoPencil />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
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