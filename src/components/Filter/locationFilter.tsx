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

    const [bangalore, setBangalore] = useState(false)
    const [hyderabad, setHyderabad] = useState(false)
    const [delhi, setDelhi] = useState(false)
    const [mumbai, setMumbai] = useState(false)
    const [mysore, setMysore] = useState(false)

    return (
        <div className="flex align-center justify-center">
            <div className="w-[250px] px-3">
                <div className="form-control">
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setBangalore(e.target.checked)
                        } } />
                        <span className="text-md font-normal">{ locationLabels.bangalore }</span>
                    </label>
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setMysore(e.target.checked)
                        } } />
                        <span className="text-md font-normal">{ locationLabels.mysore }</span>
                    </label>
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setHyderabad(e.target.checked)
                        } } />
                        <span className="text-md font-normal">{ locationLabels.hyderabad }</span>
                    </label>
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setMumbai(e.target.checked)
                        } } />
                        <span className="text-md font-normal">{ locationLabels.mumbai }</span>
                    </label>
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setDelhi(e.target.checked)
                        } } />
                        <span className="text-md font-normal">{ locationLabels.delhi }</span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default LocationFilterComp;