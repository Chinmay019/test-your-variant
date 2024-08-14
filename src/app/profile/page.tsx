"use client";

import { FormGroup, FormLabel } from "@mui/material"
import { useState } from "react";

const ProfilePage = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    return (
        <div className="flex items-center justify-around">
            <div>
                <div className="form-floating mb-3">
                    {/* <span className="input-group-text" id="basic-addon3">First name</span> */ }
                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                    <label htmlFor="basic-url" className="form-label">Your First Name</label>
                </div>
                <label className="h-[40px] md:w-[500px] input input-bordered input-primary flex items-center gap-2 my-2">
                    First Name
                    <input type="text" className="" placeholder="" />
                </label>
                <label className="h-[40px] w-[500px] input input-bordered input-primary flex items-center gap-2 my-2">
                    Last Name
                    <input type="text" className="" placeholder="" />
                </label>
                <label className="h-[40px] w-[500px] input input-bordered input-primary flex items-center gap-2 my-2">
                    Email
                    <input type="text" className="" placeholder="abc@gmail.com" />
                </label>
            </div>
        </div>
    )
}

export default ProfilePage