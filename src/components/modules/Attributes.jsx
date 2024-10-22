import { GiThink } from "react-icons/gi";
import { GiTronArrow } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { RiRestaurantFill } from "react-icons/ri";
import { GiChoice } from "react-icons/gi";
import { TbClock24 } from "react-icons/tb";

export default function Attributes() {
  return (
    <div className="my-24">
      <h2 className="text-3xl flex items-center font-semibold text-gray-600">
        Why Us
        <GiTronArrow className="ml-1" />
      </h2>
      <div className="flex justify-around flex-wrap my-5 font-semibold text-green-500">
        <section className="my-7 w-[250px] flex flex-col justify-center items-center">
          <FaShippingFast className="text-5xl mb-4" />
          <span className="text-xl">Fast</span>
        </section>
        <section className="my-7 w-[250px] flex flex-col justify-center items-center">
          <RiRestaurantFill className="text-5xl mb-4" />
          <span className="text-xl">Best Restaurants</span>
        </section>
        <section className="my-7 w-[250px] flex flex-col justify-center items-center">
          <GiChoice className="text-5xl mb-4" />
          <span className="text-xl">Your Choice</span>
        </section>
        <section className="my-7 w-[250px] flex flex-col justify-center items-center">
          <TbClock24 className="text-5xl mb-4" />
          <span className="text-xl">24-7</span>
        </section>
      </div>
    </div>
  );
}
