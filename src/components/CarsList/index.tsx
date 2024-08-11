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
                    <div>
                        <CarTile car={car} key={car.id}/>
                    </div>
                )
            })}
        </div>
    )
}

export default CarsListComp;