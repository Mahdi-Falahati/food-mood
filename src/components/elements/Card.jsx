import { LuBadgeDollarSign } from "react-icons/lu";
import { GrMapLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import { PiEyesFill } from "react-icons/pi";

export default function Card({ data }) {
  const { id, name, price, details, discount } = data;

  return (
    <div className="m-5 w-[250px] shadow-xl p-3">
      <div className="relative">
        <img
          src={`/src/assets/images/${id}.jpeg`}
          alt={name}
          className="h-[150px] rounded-t-md"
        />
        {discount !== 0 && (
          <span className="py-1 absolute z-10 top-1 left-1 bg-red-700 text-white px-2 border broder-2 border-solid border-white rounded-md font-bold">
            {discount}%
          </span>
        )}
      </div>
      <h2 className="mb-5 mt-2 text-center tracking-wider font-bold">{name}</h2>
      <section className="flex justify-between items-center mb-3 font-bold">
        <div className="flex items-center justify-center text-gray-600">
          <GrMapLocation className="mr-1 text-xl" />
          {details[0].Cuisine}
        </div>
        {discount ? (
          <span className="text-red-600 flex items-center font-bold">
            <LuBadgeDollarSign className="text-xl mr-1" />
            {`${(price * (100 - discount)) / 100} $`}
          </span>
        ) : (
          <span className="flex items-center font-bold">
            <Dollar className="text-xl mr-1" /> {`${price} $`}
          </span>
        )}
      </section>
      <Link
        to={`/menu/${id.toString()}`}
        className="hover:scale-105 transition-all flex justify-center items-center py-2 text-white bg-green-600 rounded-md font-bold tracking-wider mt-3"
      >
        See Detailes
        <PiEyesFill className="text-xl ml-2" />
      </Link>
    </div>
  );
}
