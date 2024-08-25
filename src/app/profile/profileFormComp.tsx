"use client";

import { useState } from "react";
import Image from "next/image";
import profilePic from "./sk.png";
import { GoPencil } from "react-icons/go";

import "./styles.css";

const ProfileFormComp = () => {
    const [formData, setFormData] = useState({
        firstName: 'Sara',
        lastName: 'Tancredi',
        email: 'SaraTancredi@gmail.com',
        phoneNumber: '(+91) 9123728167',
        location: 'New Delhi'
    });

    const [buttonState, setButtonState] = useState({
        saveChangesBtnClass: `btn btn-outline`,
        cancelDisabled: true,
        cancelButtonClass: `cursor-not-allowed`
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        console.log("handling change for ", name, value)
        setFormData({ ...formData, [name]: value });
        setButtonState({ ...buttonState, cancelDisabled: false, saveChangesBtnClass: `btn btn-accent` });
    };

    const saveDate = () => {
        // to be implemented
        console.log("saving data")
    }
    const cancelChanges = () => {
        if (!buttonState.cancelDisabled) {
            if (window.confirm("are you sure you want to clear your changes?")) {
                setFormData({
                    firstName: 'Sara',
                    lastName: 'Tancredi',
                    email: 'SaraTancredi@gmail.com',
                    phoneNumber: '(+91) 9123728167',
                    location: 'New Delhi'
                })
                setButtonState({ ...buttonState, cancelDisabled: true, saveChangesBtnClass: `btn btn-outline` });
            }
        }
    }
    return (
        <div className="container block m-auto w-[75%]">
            {/* Profile Form */ }
            <div className="avatar-container rounded-lg p-8">
                <div className="relative w-[200px]">
                    <Image
                        src={ profilePic }
                        alt="Profile Picture"
                        width={ 200 }
                        height={ 200 }
                        className="avatar avatar-group rounded-full shadow-md"
                    />

                    <div className="absolute bottom-0 right-0">
                        <button className="btn btn-xs text-xl text-bg-light rounded-lg">
                            {/* <TbPhotoEdit /> */ }
                            <GoPencil />
                            <span className="badge p-0">Edit</span>
                        </button>
                    </div>
                </div>
            </div>


            {/* Form Control */ }
            <div className="m-12 relative w-[80%]">
                <div className="container grid grid-cols-2 gap-x-8 gap-y-3">
                    <div>
                        <label className="block text-gray-700"> First Name </label>
                        <input
                            type="text"
                            value={ formData.firstName }
                            name="firstNme"
                            onChange={ handleChange }
                            className="block rounded-md mt-2 w-full text-center border border-gray-200 shadow-sm" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Last Name</label>
                        <input
                            type="text"
                            value={ formData.lastName }
                            name="lastName"
                            onChange={ handleChange }
                            className="block rounded-md mt-2 w-full text-center border border-gray-200 shadow-sm" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Phone Number</label>
                        <input
                            type="text"
                            value={ formData.phoneNumber }
                            name="phoneNumber"
                            onChange={ handleChange }
                            className="block rounded-md mt-2 w-full border text-center border-gray-200 shadow-sm" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Location</label>
                        <input
                            type="text"
                            value={ formData.location }
                            name="location"
                            onChange={ handleChange }
                            className="block rounded-md mt-2 w-full border text-center border-gray-200 shadow-sm" />
                    </div>
                    <div className="col-span-2">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            value={ formData.email }
                            name="email"
                            onChange={ handleChange }
                            className="block rounded-md mt-2 w-full border text-center border-gray-200 shadow-sm" />
                    </div>
                </div>
                <div className="button-container mt-5 gap-4">
                    <button className={ `${buttonState.saveChangesBtnClass} mr-4 ` }>
                        Save changes
                    </button>
                    <button
                        onClick={ cancelChanges }
                        className={ `disabled:opacity-75 disabled:text-black disabled:cursor-not-allowed disabled:pointer-events-auto disabled:hover:text-black btn btn-ghost border-2 border-slate-100 ml-4` }
                        disabled={ buttonState.cancelDisabled }>
                        Cancel
                    </button>
                </div>

            </div>
        </div>
    )
}

export default ProfileFormComp;