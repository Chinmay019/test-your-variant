"use client";

import { useState } from "react";

const CategoryFilterComp = () => {
    const categoryLabels = {
        suv: "SUV",
        csuv: "Compact SUV",
        sedan: "Sedan",
        hatch: "Hatchback",
    }

    const [vehicleType, setVehicleType] = useState("")

    return (
        <div className="flex align-center justify-center">
            <div className="w-[250px] px-3">
                <div className="form-control">
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setVehicleType(categoryLabels.csuv)
                        } } />
                        <span className="text-md font-normal">{ categoryLabels.csuv }</span>
                    </label>
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setVehicleType(categoryLabels.suv)
                        } } />
                        <span className="text-md font-normal">{ categoryLabels.suv }</span>
                    </label>
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setVehicleType(categoryLabels.sedan)
                        } } />
                        <span className="text-md font-normal">{ categoryLabels.sedan }</span>
                    </label>
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setVehicleType(categoryLabels.hatch)
                        } } />
                        <span className="text-md font-normal">{ categoryLabels.hatch }</span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default CategoryFilterComp;