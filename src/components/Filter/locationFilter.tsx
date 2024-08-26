"use client";

import { useState } from "react";

const LocationFilterComp = () => {
    const locationLabels = {
        bangalore: "Bangalore",
        hyderabad: "Hyderabad",
        mysore: "Mysore",
        mumbai: "Mumbai",
        delhi: "Delhi"
    }

    const [location, setLocation] = useState("");

    return (
        <div className="flex align-center justify-center">
            <div className="w-[250px] px-3">
                <div className="form-control">
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setLocation(locationLabels.bangalore)
                        } } />
                        <span className="text-md font-normal">{ locationLabels.bangalore }</span>
                    </label>
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setLocation(locationLabels.mysore)
                        } } />
                        <span className="text-md font-normal">{ locationLabels.mysore }</span>
                    </label>
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setLocation(locationLabels.hyderabad)
                        } } />
                        <span className="text-md font-normal">{ locationLabels.hyderabad }</span>
                    </label>
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setLocation(locationLabels.mumbai)
                        } } />
                        <span className="text-md font-normal">{ locationLabels.mumbai }</span>
                    </label>
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setLocation(locationLabels.delhi)
                        } } />
                        <span className="text-md font-normal">{ locationLabels.delhi }</span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default LocationFilterComp;