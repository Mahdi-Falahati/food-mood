import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <header>header</header>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}
