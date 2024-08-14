import { Navbar } from "@/components/Navbar";

import React from "react"

const HomeLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <React.Fragment>
            <Navbar />
            { children }
        </React.Fragment>
    )
}

export default HomeLayout;