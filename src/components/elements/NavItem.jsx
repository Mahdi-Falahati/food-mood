import { Link } from "react-router-dom";
import styles from "./navItem.module.css";

export default function NavItem({ title, route, icon }) {
  return (
    <Link
      to={route === "home" ? "/" : route}
      className={`mx-2 flex items-center hover:scale-105 justify-center hover:text-gray-600 ${styles["line__bottom-animation"]}`}
    >
      {icon}
      {title}
    </Link>
  );
}
