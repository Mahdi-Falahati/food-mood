import { GrMapLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import { PiEyesFill } from "react-icons/pi";
import { TbShoppingCartDiscount } from "react-icons/tb";
import { PiLink } from "react-icons/pi";
import { Images } from "../constant/Images";

export default function Card({ data }) {
  const { id, name, price, details, discount } = data;

  return (
    <div className="m-5 w-[250px] shadow-md shadow-slate-400 rounded-lg pt-1 pb-3">
      <div className="relative flex justify-center">
        <img
          src={Images[id - 1]}
          alt={name}
          className="h-[155px] w-[242px] rounded-md shadow-md shadow-slate-500"
        />
        {discount !== 0 && (
          <span className="py-1 flex justify-center items-center absolute z-10 top-1 left-2 bg-red-700 text-white px-2 border broder-2 border-solid border-white rounded-md font-bold">
            {discount}
            <TbShoppingCartDiscount className="text-xl ml-1 animate-bounce" />
          </span>
        )}
      </div>
      <div className="px-3">
        <h2 className="my-5  text-center tracking-wider font-bold text-xl">
          {name}
        </h2>
        <section className="flex justify-between items-center mb-3 font-bold">
          <div className="flex items-center justify-center text-gray-600">
            <GrMapLocation className="mr-1 text-xl" />
            {details[0].Cuisine}
          </div>
          {discount ? (
            <span className="text-red-600 flex items-center font-bold">
              <span className="mr-1 text-red-700">$</span>
              {(price * (100 - discount)) / 100}
            </span>
          ) : (
            <span className=" font-bold text-gray-700">
              <span className="mr-1 text-green-700">$</span>
              {price}
            </span>
          )}
        </section>
        <Link
          to={`/menu/${id.toString()}`}
          className="hover:tracking-widest hover:text-black transition-all flex justify-center items-center py-2 text-gray-600 font-bold tracking-wider mt-3 border-t border-solid border-gray-400"
        >
          <PiLink className="text-xl mr-1" />
          See Detailes
          <PiEyesFill className="text-xl ml-2 text-green-700" />
        </Link>
      </div>
    </div>
  );
}
