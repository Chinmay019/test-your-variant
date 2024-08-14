"use client";

import { useState } from "react";
import "./styles.css";

const ProfilePage = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    let saveChangesBtnClass = `btn btn-outline btn-success`;

    return (
        <div className="settings-container">
            <div className="sidebar h-screen max-h-screen overflow-x-hidden overflow-y-hidden">
                <div className="sticky">
                    <h2>User Profile</h2>
                    <div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfilePage