import { useLoaderData, useNavigate } from "react-router-dom";
import { MdOutlineMyLocation } from "react-icons/md";
import { TbCurrencyDollar } from "react-icons/tb";
import { TbListDetails } from "react-icons/tb";
import { GiCampCookingPot } from "react-icons/gi";
import { LiaCartPlusSolid } from "react-icons/lia";
import { IoArrowRedoOutline } from "react-icons/io5";

export default function FoodDetails() {
  const navigate = useNavigate();
  const {
    id,
    name,
    price,
    discount,
    introduction,
    details,
    ingredients,
    recipe,
  } = useLoaderData();

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <img
          src={`/src/assets/images/${id}.jpeg`}
          alt={name}
          className="w-[200px] md:w-[350px] rounded-md my-4"
        />
        <div className="my-4 font-bold flex ml-4 flex-col justify-around">
          <h3 className="text-green-700 text-xl mb-5">{name}</h3>
          <span className="text smfont-thin flex items-center mb-2">
            <MdOutlineMyLocation className="mr-2" />
            {details[0].Cuisine}
          </span>
          <span className="flex items-center">
            <TbCurrencyDollar className="mr-2" />
            {discount ? (price * (100 - discount)) / 100 : price}
          </span>
          {discount ? (
            <span className="bg-red-600 text-white rounded-2xl text-center py-2 mt-5 ">
              {discount} % OFF
            </span>
          ) : null}
        </div>
      </div>
      <h2 className="text-2xl ml-2 flex items-center font-bold my-5">
        <TbListDetails className="mr-2" />
        Details - {name}
      </h2>

      <div className="text-center my-4 font-bold px-3 leading-6">
        <p>{introduction}</p>
      </div>
      <section className="flex justify-around px-5 sm:items-start sm:flex-row flex-col my-5">
        <div>
          <h4 className="text-xl text-green-600 font-bold my-3">Details</h4>
          <ul>
            {details.map((detail, index) => (
              <li key={index} className="flex my-2">
                <p className="font-bold mr-2">{Object.keys(detail)[0]}: </p>
                <span className="text-gray-500">
                  {Object.values(detail)[0]}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xl text-green-600 font-bold my-3">Ingredients</h4>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index} className="my-2">
                <p className="font-bold">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="px-3">
        <h4 className="text-2xl flex items-center text-green-600 font-bold my-3">
          <GiCampCookingPot className="mr-2" />
          Recipe
        </h4>
        {recipe.map((item, index) => (
          <div
            key={index}
            className={`flex p-5 rounded-md text-justify my-2 ${
              index % 2 ? `bg-green-600 text-white` : `bg-white border-2`
            }`}
          >
            <span className="mr-3">{index + 1}</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-around flex-wrap items-center my-5">
        <button
          onClick={() => navigate(-1)}
          className="shadow-md shadow-slate-400 bg-gradient-to-r hover:scale-95 hover:to-red-500 hover:from-orange-400 to-orange-400 from-red-600 my-2 w-[250px] flex justify-center items-center transition-colors rounded-md  text-white tracking-widest font-bold text-center py-3"
        >
          <IoArrowRedoOutline className="mr-2 text-2xl" />
          Back
        </button>
        <button className="shadow-md shadow-slate-400 bg-gradient-to-r hover:scale-95 hover:to-green-600 hover:from-yellow-400 to-yellow-400 from-green-600 my-2 w-[250px] flex justify-center items-center transition-colors rounded-md text-white tracking-widest font-bold text-center py-3">
          Add to Cart
          <LiaCartPlusSolid className="ml-2 text-2xl" />
        </button>
      </div>
    </div>
  );
}
