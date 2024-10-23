import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/features/foodSlice";
import Title from "../components/elements/Title";
import { MdRestaurantMenu } from "react-icons/md";
import Card from "../components/elements/Card";

export default function Menu() {
  const dispatch = useDispatch();
  const food = useSelector((state) => state.food.food);
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="my-10">
      <Title
        icon={<MdRestaurantMenu className="ml-2 text-3xl" />}
        title="Menu"
        color="text-green-800"
      />
      <div className="flex justify-around items-center flex-wrap">
        {food ? (
          food.map((product) => <Card data={product} key={product.id} />)
        ) : (
          <p className="mt-10 text-center font-semibold tracking-wider text-red-600 text-xl">
            There are not any food today...
          </p>
        )}
      </div>
    </div>
  );
}
