import { Link } from "react-router-dom";
import icon from "/src/favicon.ico";
import Menu from "../elements/Menu";
import ShoppingCart from "./ShoppingCart";

export default function MainHeader() {
  return (
    <header className="container mx-auto p-4 flex justify-between">
      <Link
        to="/"
        className="flex items-center font-bold italic tracking-wide text-2xl"
      >
        Food
        <img src={icon} className="mx-2 h-7" alt="Food" />
        Mood
      </Link>
      <ShoppingCart />
      <nav className="text-2xl font-semibold">
        <Menu />
      </nav>
    </header>
  );
}
