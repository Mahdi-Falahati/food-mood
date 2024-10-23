import { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { CiCircleRemove } from "react-icons/ci";
import {
  addToCart,
  clearCart,
  removeFromCart,
} from "../../store/features/cartSlice";

export default function ShoppingCart() {
  const food = useSelector((state) => state.cart.shoppingCart);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const clearFoodHandler = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <button className="text-3xl outline-none" onClick={() => setOpen(!open)}>
        <BsCart4 />
      </button>
      {open && (
        <div className="z-30 absolute top-[65px] left-0 right-0 bg-white flex flex-col justify-around items-center">
          {food.length > 0 && (
            <button
              onClick={clearFoodHandler}
              className="bg-red-600 hover:scale-95 text-white flex justify-center items-center border border-red-600 border-dotted rounded-md p-2 italic tracking-wider font-semibold"
            >
              <CiCircleRemove className="text-2xl animate-spin mr-1" />
              Clear All Of The Food
            </button>
          )}
          <div className="flex justify-around w-full items-center flex-wrap p-2">
            {food?.map((item) => {
              const count = item.count;
              const price = item.discount
                ? Number(
                    ((item.price * (100 - item.discount)) / 100).toFixed(1)
                  )
                : item.price;

              return (
                <div className="flex flex-col my-5 shadow-md shadow-slate-400 rounded-md">
                  <div className="flex">
                    <img
                      src={`/src/assets/images/${item.id}.jpeg`}
                      className="h-[60px] rounded-lg"
                    />
                    <div className="flex flex-col h-[60px] ml-2 justify-around">
                      <h3 className="font-semibold tracking-wider">
                        {item.name}
                      </h3>
                      <span>
                        Total Price is {Number((price * count).toFixed(1))} $.
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-center flex-col items-center p-3">
                    <button
                      onClick={() => {
                        dispatch(addToCart(item));
                      }}
                      className="mb-2 hover:scale-110 font-bold rounded-full shadow-md shadow-slate-400 p-2 mx-2"
                    >
                      +1
                    </button>
                    <p className="my-2 font-semibold tracking-widest">
                      count is {count} & price is {price} $
                    </p>
                    <button
                      onClick={() => {
                        dispatch(removeFromCart(item.id));
                      }}
                      className=" mt-2 hover:scale-110 font-bold rounded-full shadow-md shadow-slate-400 p-2 mx-2"
                    >
                      -1
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          {food.length === 0 && (
            <p className="text-red-500 text-xl font-semibold italic tracking-wider">
              You have not selected any products...
            </p>
          )}
        </div>
      )}
    </>
  );
}
