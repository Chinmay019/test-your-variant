import BrandFilterComp from "../Filter/brandFilter";
import LocationFilterComp from "../Filter/locationFilter";
import CategoryFilterComp from "../Filter/categoryFilter";
import TransmissionFilterComp from "../Filter/transmissionFilter";
import FuelFilterComp from "../Filter/fuelFilter";

const Sidebar = () => {
    return (
        <div className="h-[80vh] overflow-auto w-[375px] border-2 border-gray-300 md:rounded-md lg:rounded-lg mx-8 mt-2">
            <div className="flex flex-col justify-around items-center">
                <div className="">
                    <label className="label">
                        Brands
                    </label>
                    <BrandFilterComp />
                </div>
                <div className="">
                    <label className="label">
                        Location 📌
                    </label>
                    <LocationFilterComp />
                </div>
                <div className="">
                    <label className="label">
                        Categories
                    </label>
                    <CategoryFilterComp />
                </div>
                <div className="">
                    <label className="label">
                        Transmission Type
                    </label>
                    <TransmissionFilterComp />
                </div>
                <div className="">
                    <label className="label">
                        Fuel Type
                    </label>
                    <FuelFilterComp />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;