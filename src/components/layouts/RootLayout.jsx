import { Outlet } from "react-router-dom";
import MainFooter from "../modules/MainFooter";
import MainHeader from "../modules/MainHeader";

export default function RootLayout() {
  return (
    <>
      <MainHeader />
      <main className="container mx-auto">
        <Outlet />
      </main>
      <MainFooter />
    </>
  );
}
