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
          <span className="text-gray-600 text-xl">Fast</span>
        </section>
        <section className="my-7 w-[250px] flex flex-col justify-center items-center">
          <RiRestaurantFill className="text-5xl mb-4" />
          <span className="text-gray-600 text-xl">Best Restaurants</span>
        </section>
        <section className="my-7 w-[250px] flex flex-col justify-center items-center">
          <GiChoice className="text-5xl mb-4" />
          <span className="text-gray-600 text-xl">Your Choice</span>
        </section>
        <section className="my-7 w-[250px] flex flex-col justify-center items-center">
          <TbClock24 className="text-5xl mb-4" />
          <span className="text-gray-600 text-xl">24-7</span>
        </section>
      </div>

      <div className="flex  justify-center mt-14">
        <div className="italic max-w-[650px] mx-2 px-5 py-5 shadow-inner shadow-slate-400 rounded-md">
          <h3 className="text-2xl mb-3 font-semibold">Who We Are?</h3>
          <p className=" px-5 text-justify leading-7 font-semibold text-gray-600">
            <span className="text-xl">- RC Food</span> company was founded in
            2009 by Garrett Camp and Travis Kalanick.The company began food
            delivery in August 2014 with the launch of the UberFRESH service in
            Santa Monica, California. In 2015, the platform was renamed to
            UberEATS and the ordering software was released as its own
            application, separate from the app for Uber rides.In 2016, it
            commenced operations in both London and Paris.
          </p>
        </div>
      </div>
    </div>
  );
}
