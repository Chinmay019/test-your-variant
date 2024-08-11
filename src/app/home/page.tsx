import React from "react";
import Sidebar from "@/components/Sidebar";
import CarsListComp from '../../components/CarsList';

const Home = () => {
    return (
        <React.Fragment>
            <div className="flex">
                <div className="flex-item sticky">
                    <Sidebar />
                </div>
                <div className="flex-item">
                    <CarsListComp filter="all" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;