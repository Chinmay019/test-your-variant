import BrandFilterComp from "../Filter/brandFilter";
import LocationFilterComp from "../Filter/locationFilter";
import CategoryFilterComp from "../Filter/categoryFilter";
import TransmissionFilterComp from "../Filter/transmissionFilter";
import FuelFilterComp from "../Filter/fuelFilter";

const Sidebar = () => {
    return (
        <div className="h-[80vh] overflow-auto w-[375px] border-2 border-gray-300 md:rounded-md lg:rounded-lg m-8">
            <div className="p-4">
                <h2 className="text-2xl font-semibold mx-10 mt-5">Filters</h2>
                <div className="flex flex-col justify-around items-center">
                    <div className="mt-3">
                        <label className="font-medium">
                            Brands
                        </label>
                        <BrandFilterComp />
                    </div>
                    <div className="mt-3">
                        <label className="font-medium">
                            Location 📌
                        </label>
                        <LocationFilterComp />
                    </div>
                    <div className="mt-3">
                        <label className="font-medium">
                            Categories
                        </label>
                        <CategoryFilterComp />
                    </div>
                    <div className="mt-3">
                        <label className="font-medium">
                            Transmission Type
                        </label>
                        <TransmissionFilterComp />
                    </div>
                    <div className="my-3">
                        <label className="font-medium">
                            Fuel Type
                        </label>
                        <FuelFilterComp />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;