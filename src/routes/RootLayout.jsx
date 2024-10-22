import { Outlet } from "react-router-dom";
import MainHeader from "../components/modules/MainHeader";
import MainFooter from "../components/modules/MainFooter";

export default function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
      <MainFooter />
    </>
  );
}
