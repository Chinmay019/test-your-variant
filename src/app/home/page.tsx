import React from "react";
import Sidebar from "@/components/Sidebar/page";   

const Home = () => {
    return (
        <React.Fragment>
            <div className="flex">
                <div className="flex-item">
                    <Sidebar />
                </div>
                <div className="flex-item">
                    This will be the home component
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;