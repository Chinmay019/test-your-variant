"use client";

import { useState } from "react";

const BrandFilterComp = () => {
    const [brand, setBrand] = useState("");

    const brandLabels = {
        tata: "Tata",
        mahindra: "Mahindra",
        skoda: "Skoda",
        honda: "Honda",
        maruti: "Maruti Suzuki"
    }
    return (
        <div className="flex align-center justify-center">
            <div className="w-[250px] px-3">
                <div className="form-control">
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setBrand(brandLabels.maruti)
                        } } />
                        <span className="text-md font-normal">{ brandLabels.maruti }</span>
                    </label>
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setBrand(brandLabels.tata)
                        } } />
                        <span className="text-md font-normal">{ brandLabels.tata }</span>
                    </label>
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setBrand(brandLabels.honda)
                        } } />
                        <span className="text-md font-normal">{ brandLabels.honda }</span>
                    </label>
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setBrand(brandLabels.mahindra)
                        } } />
                        <span className="text-md font-normal">{ brandLabels.mahindra }</span>
                    </label>
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox" className="checkbox checkbox-accent" onClick={ (e) => {
                            setBrand(brandLabels.skoda)
                        } } />
                        <span className="text-md font-normal">{ brandLabels.skoda }</span>
                    </label>
                </div>
            </div>
            {/* <FormGroup>
                <FormControlLabel control={
                    <Checkbox
                        name={ brandLabels.tata }
                        value={ brandLabels.tata }
                        checked={ tataSelected }
                        color="success"
                        onClick={ (e) => {
                            setTataSelelcted(e.target.checked)
                        } } /> } label={ brandLabels.tata } />
                <FormControlLabel control={
                    <Checkbox
                        name={ brandLabels.skoda }
                        value={ brandLabels.skoda }
                        checked={ skodaSelected }
                        color="success"
                        onClick={ (e) => {
                            setSkodaSelelcted(e.target.checked)
                        } } /> } label={ brandLabels.skoda } />
                <FormControlLabel control={
                    <Checkbox
                        name={ brandLabels.honda }
                        value={ brandLabels.honda }
                        checked={ hondaSelected }
                        color="success"
                        onClick={ (e) => {
                            setHondaSelelcted(e.target.checked)
                        } } /> } label={ brandLabels.honda } />
                <FormControlLabel control={
                    <Checkbox
                        name={ brandLabels.mahindra }
                        value={ brandLabels.mahindra }
                        checked={ mahindraSelected }
                        color="success"
                        onClick={ (e) => {
                            setMahindraSelelcted(e.target.checked)
                        } } /> } label={ brandLabels.mahindra } />
                <FormControlLabel control={
                    <Checkbox
                        name={ brandLabels.maruti }
                        value={ brandLabels.maruti }
                        checked={ marutiSelected }
                        color="success"
                        onClick={ (e) => {
                            setMarutiSelelcted(e.target.checked)
                        } } /> } label={ brandLabels.maruti } />
            </FormGroup> */}

        </div>
    )
}

export default BrandFilterComp;