import { CarDetail } from '../../util/types';
const CarTile = ({ car }: {
    car: any
}) => {

    console.log(car)

    return (
        <div className="flex card card-side bg-[#E6E8EC] w-96 my-4 h-[200px] border-2 border-stone-500">
            <div className="card-body">
                <h2 className="card-title">{ car.name }</h2>
                <span className='font-semibold'>
                    Model: { car.model }
                </span>
                <span className='font-light'>
                    📌  { car.location }
                </span>
                <div className="card-actions justify-end">
                    <button className="btn">Get Details</button>
                </div>
            </div>
        </div>
    )
}

export default CarTile;