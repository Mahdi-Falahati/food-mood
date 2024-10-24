import { Link } from "react-router-dom";
import banner from "../../assets/images/banner.png";
import { MdOutlineDinnerDining } from "react-icons/md";
import { IoArrowRedoOutline } from "react-icons/io5";

export default function HeaderContent() {
  return (
    <div className="flex justify-around items-center flex-wrap">
      <img src={banner} alt="food" />
      <section className="w-full md:w-[500px] my-6">
        <h2 className="text-2xl font-bold">Food Mood</h2>
        <p className="text-sm font-semibold tracking-wider">
          Food Delivery and Takeout!
        </p>
        <p className="mt-3 text-justify leading-7 text-xl italic">
          RC-Food is an online food ordering and delivery platform launched by
          Uber in 2014. Meals are delivered by couriers using cars, scooters,
          bikes, or on foot.
        </p>
        <div className="flex justify-center">
          <Link
            to="/menu"
            className="transition  flex justify-center items-center font-semibold tracking-wider py-2 mt-5 rounded-md hover:scale-105"
          >
            <IoArrowRedoOutline className="mr-2 text-2xl" />
            See All
            <MdOutlineDinnerDining className="ml-2 text-2xl" />
          </Link>
        </div>
      </section>
    </div>
  );
}
