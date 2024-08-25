"use client";

import { useState } from "react";

const FuelFilterComp = () => {
    const fuelTypeLabels = {
        diesel: "Diesel",
        petrol: "Petrol"
    }

    const [diesel, setDiesel] = useState(false)
    const [petrol, setPetrol] = useState(false)

    return (
        <div className="flex align-center justify-center">
            <div className="w-[250px] px-3">
                <div className="form-control">
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setDiesel(e.target.checked)
                        } } />
                        <span className="text-md font-normal">{ fuelTypeLabels.diesel }</span>
                    </label>
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setPetrol(e.target.checked)
                        } } />
                        <span className="text-md font-normal">{ fuelTypeLabels.petrol }</span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default FuelFilterComp;