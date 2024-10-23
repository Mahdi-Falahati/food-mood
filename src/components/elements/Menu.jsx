import { useState } from "react";
import NavItem from "../elements/navItem";
import { MdRestaurantMenu } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
import { TiHomeOutline } from "react-icons/ti";

export default function Menu() {
  const [open, setOpen] = useState(false);

  const renderLinks = navItems.map((item, i) => (
    <NavItem
      route={item.title ? item.title.toLowerCase() : item.toLowerCase()}
      title={item.title ? item.title : item}
      icon={item.icon ? item.icon : ""}
      key={i}
    />
  ));

  return (
    <>
      <div className="hidden md:flex">{renderLinks}</div>
      <div className="flex md:hidden">
        <button className="text-4xl" onClick={() => setOpen(!open)}>
          <CiMenuFries />
        </button>
        {open && (
          <div className="fixed top-[65px] h-[200px] left-0 right-0 bg-white flex flex-col justify-around items-center">
            {renderLinks}
          </div>
        )}
      </div>
    </>
  );
}

const navItems = [
  { title: "Menu", icon: <MdRestaurantMenu className="mr-1" /> },
  "Categories",
  "Discunts",
];
