import HeaderContent from "../components/modules/HeaderContent";
import Attributes from "../components/modules/Attributes";
import Guide from "../components/modules/Guide";
import Restrictions from "../components/modules/Restrictions";
import Instruction from "../components/modules/Instruction ";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../store/features/foodSlice";
import DiscountsSlider from "../components/modules/DiscountsSlider";
import { Link } from "react-router-dom";
import { RiLinksFill } from "react-icons/ri";

export default function Root() {
  const discountsFood = useSelector((state) => state.food.discounts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="my-5">
      <HeaderContent />
      <Attributes />
      <Guide />
      <Instruction />
      <div className="flex justify-around flex-wrap mb-10">
        <DiscountsSlider data={discountsFood} />
        <div className="w-full md:w-[500px] px-2">
          <h3 className="font-semibold text-2xl">Discounts :</h3>
          <p className="text-justify pl-2 leading-6">
            suscipit quam lorem eget augue. Suspendisse at quam luctus, lobortis
            sem vitae, tempus ex. Ut et sapien ex. Donec at porta lacus, vel
            pulvinar magna. In hac habitasse platea dictumst. Nulla fermentum
            interdum orci, sed convallis felis pellentesque ac. Nulla ac massa
            sit amet nisl ornare congue at sit amet purus. Ut faucibus, erat eu
            finibus venenatis, metus justo vehicula nunc, in varius nunc nibh
            sed augue.
          </p>
          <Link
            to="/discounts"
            className="hover:scale-105 font-semibold text-xl tracking-wider my-3 flex justify-end items-center text-indigo-800"
          >
            <RiLinksFill className="mr-2 text-2xl" />
            See All Discounts
          </Link>
        </div>
      </div>
      <Restrictions />
    </div>
  );
}
