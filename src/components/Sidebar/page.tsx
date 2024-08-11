import BrandFilterComp from "../Filter/brandFilter";
import LocationFilterComp from "../Filter/locationFilter";

const Sidebar = () => {
    return (
        <div className="lg:h-[80vh] md:h-[60vh] w-[375px] border-2 border-white-200 md:rounded-md lg:rounded-lg mx-8 my-5">
            <div className="flex flex-col justify-around items-center">
                <div>
                    <BrandFilterComp />
                </div>
                <div>
                    <LocationFilterComp />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;