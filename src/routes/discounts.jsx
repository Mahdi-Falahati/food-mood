import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/features/foodSlice";
import Card from "../components/elements/Card";
import { TbShoppingBagDiscount } from "react-icons/tb";
import Title from "../components/elements/Title";

export default function Discounts() {
  const dispatch = useDispatch();
  const discounts = useSelector((state) => state.food.discounts);
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="my-10">
      <Title
        icon={<TbShoppingBagDiscount className="ml-2 text-3xl" />}
        title="Discount Products"
        color="text-green-800"
      />
      <div className="flex justify-around items-center flex-wrap">
        {discounts ? (
          discounts.map((product) => <Card data={product} key={product.id} />)
        ) : (
          <p className="mt-10 text-center font-semibold tracking-wider text-red-600 text-xl">
            There are not any discounts today...
          </p>
        )}
      </div>
    </div>
  );
}
