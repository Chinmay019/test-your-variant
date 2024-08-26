"use client";

import { useState } from "react";

const FuelFilterComp = () => {
    const fuelTypeLabels = {
        diesel: "Diesel",
        petrol: "Petrol"
    }

    const [fuelType, setFuelType] = useState("");

    return (
        <div className="flex align-center justify-center">
            <div className="w-[250px] px-3">
                <div className="form-control">
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setFuelType(fuelTypeLabels.diesel)
                        } } />
                        <span className="text-md font-normal">{ fuelTypeLabels.diesel }</span>
                    </label>
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setFuelType(fuelTypeLabels.petrol)
                        } } />
                        <span className="text-md font-normal">{ fuelTypeLabels.petrol }</span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default FuelFilterComp;