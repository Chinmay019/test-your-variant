import allCarsData from "@/data/allCars";
import { CarDetail } from './types';

export const getSingleCarInfoById = (id : string) => {
    let n = allCarsData.length;
    for(let i=0;i<n;i++) {
        let car = allCarsData[i]
        if (car.id == id)
            return car
    }
}

export const getAllCars = () => {
    return allCarsData;
}