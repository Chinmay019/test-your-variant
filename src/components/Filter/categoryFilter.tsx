"use client";

import { useState } from "react";

const CategoryFilterComp = () => {
    const categoryLabels = {
        suv: "SUV",
        csuv: "Compact SUV",
        sedan: "Sedan",
        hatch: "Hatchback",
    }

    const [suv, setSUV] = useState(false)
    const [csuv, setCSUV] = useState(false)
    const [sedan, setSedan] = useState(false)
    const [hatch, setHatch] = useState(false)

    return (
        <div className="flex align-center justify-center">
            <div className="w-[250px] rounded-lg border-2 border-rose-200 px-3">
                <div className="form-control">
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setCSUV(e.target.checked)
                        } } />
                        <span className="label-text">{ categoryLabels.csuv }</span>
                    </label>
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setSUV(e.target.checked)
                        } } />
                        <span className="label-text">{ categoryLabels.suv }</span>
                    </label>
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setSedan(e.target.checked)
                        } } />
                        <span className="label-text">{ categoryLabels.sedan }</span>
                    </label>
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setHatch(e.target.checked)
                        } } />
                        <span className="label-text">{ categoryLabels.hatch }</span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default CategoryFilterComp;