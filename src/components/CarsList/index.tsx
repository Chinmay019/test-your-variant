"use client"

import { useEffect, useState } from "react";
import CarTile from "../CarTile";
import { getAllCars } from "@/util/helper";

const CarsListComp = ({ filter }: { filter: string }) => {
    const [carsData, setCarsData] = useState([])
    useEffect(() => {
        if (filter == "all") {
            const allCarsListJSON = getAllCars();
            setCarsData([...allCarsListJSON]);
        }
    }, [])
    return (
        <div>
            {carsData?.map((car) => {
                return (
                    <div key={car.id}>
                        <CarTile car={car}/>
                    </div>
                )
            })}
        </div>
    )
}

export default CarsListComp;