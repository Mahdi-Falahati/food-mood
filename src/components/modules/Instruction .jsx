import React from "react";

export default function Instruction() {
  return (
    <div className="mt-5 mb-12 px-1">
      <h3 className="text-xl font-semibold text-green-700 mb-3">
        How to Order ?
      </h3>
      <ul className="flex flex-wrap justify-between flex-col lg:flex-row">
        <li className={itemStyles}>
          Sign in (or create an account) and set your delivery address.
        </li>
        <li className={itemStyles}>
          Choose the restaurant you want to order from.
        </li>
        <li className={itemStyles}>Select your items and tap “Add to Cart”.</li>
        <li className={itemStyles}>
          To place your order, select “View cart” or “Checkout”.
        </li>
        <li className={itemStyles}>
          Review your order and tap “Place Order”...
        </li>
        <li className={itemStyles}>Track your order progress.</li>
      </ul>
    </div>
  );
}

const itemStyles =
  "leading-6 m-2 py-2 px-6 shadow-md shadow-slate-400 w-fit rounded-md font-semibold text-justify";
