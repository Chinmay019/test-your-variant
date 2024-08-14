import React from "react";
import Sidebar from "@/components/Sidebar";
import CarsListComp from '../../components/CarsList';

const Home = () => {
    return (
        <div className="flex">
            <Sidebar />
            <CarsListComp filter="all" />
        </div>
    )
}

export default Home;