import { Link } from "react-router-dom";
import { MdOutlineCategory } from "react-icons/md";
import { MdOutlineMenuBook } from "react-icons/md";
import { TbRosetteDiscount } from "react-icons/tb";

export default function Guide() {
  return (
    <section className="mb-20 text-white font-semibold tracking-wider border-y border-gray-500 border-solid flex justify-around items-center py-7 flex-wrap">
      <Link
        to="/categories"
        className={`${linkStyles} bg-red-600 hover:scale-105 hover:bg-red-700`}
      >
        Categories
        <MdOutlineCategory className="ml-2 text-2xl" />
      </Link>
      <Link
        to="/menu"
        className={`${linkStyles} bg-green-600 hover:scale-105 hover:bg-green-700`}
      >
        Menu
        <MdOutlineMenuBook className="ml-2 text-2xl" />
      </Link>
      <Link
        to="/discounts"
        className={`${linkStyles} bg-purple-600 hover:scale-105 hover:bg-purple-700`}
      >
        Discounts
        <TbRosetteDiscount className="ml-2 text-2xl" />
      </Link>
    </section>
  );
}

const linkStyles =
  "my-2 flex items-center justify-center text-xl w-[170px] mx-3 py-2 text-center rounded-lg";
