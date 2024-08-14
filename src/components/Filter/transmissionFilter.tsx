"use client";

import { useState } from "react";

const TransmissionFilterComp = () => {
    const transmissionLabels = {
        auto: "Automatic",
        manual: "Manual"
    }

    const [auto, setAuto] = useState(false)
    const [manual, setManual] = useState(false)

    return (
        <div className="flex align-center justify-center">
            <div className="w-[250px] rounded-lg border-2 border-rose-200 px-3">
                <div className="form-control">
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setAuto(e.target.checked)
                        } } />
                        <span className="label-text">{ transmissionLabels.auto }</span>
                    </label>
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setManual(e.target.checked)
                        } } />
                        <span className="label-text">{ transmissionLabels.manual }</span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default TransmissionFilterComp;