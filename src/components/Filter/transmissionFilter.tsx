"use client";

import { useState } from "react";

const TransmissionFilterComp = () => {
    const transmissionLabels = {
        auto: "Automatic",
        manual: "Manual"
    }

    const [transmission, setTransmission] = useState("");

    return (
        <div className="flex align-center justify-center">
            <div className="w-[250px] px-3">
                <div className="form-control">
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setTransmission(transmissionLabels.auto)
                        } } />
                        <span className="text-md font-normal">{ transmissionLabels.auto }</span>
                    </label>
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setTransmission(transmissionLabels.manual)
                        } } />
                        <span className="text-md font-normal">{ transmissionLabels.manual }</span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default TransmissionFilterComp;