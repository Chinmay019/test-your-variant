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
            <div className="w-[250px] rounded-lg border-2 border-rose-200 px-3">
                <div className="form-control">
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setDiesel(e.target.checked)
                        } } />
                        <span className="label-text">{ fuelTypeLabels.diesel }</span>
                    </label>
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setPetrol(e.target.checked)
                        } } />
                        <span className="label-text">{ fuelTypeLabels.petrol }</span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default FuelFilterComp;