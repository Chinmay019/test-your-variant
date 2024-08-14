import BrandFilterComp from "../Filter/brandFilter";
import LocationFilterComp from "../Filter/locationFilter";
import CategoryFilterComp from "../Filter/categoryFilter";

const Sidebar = () => {
    return (
        <div className="lg:h-[90vh] md:h-[65vh] w-[375px] border-2 border-gray-300 md:rounded-md lg:rounded-lg mx-8 mt-2">
            <div className="flex flex-col justify-around items-center">
                <div className="mt-2">
                    <label className="label">
                        Filter By Brands
                    </label>
                    <BrandFilterComp />
                </div>
                <div className="mt-2">
                    <label className="label">
                        Filter By Pickup Location
                    </label>
                    <LocationFilterComp />
                </div>
                <div className="mt-2">
                    <label className="label">
                        Filter By Categories
                    </label>
                    <CategoryFilterComp />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;