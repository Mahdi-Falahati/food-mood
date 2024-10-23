import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import RootLayout from "./components/layouts/RootLayout";
import Discounts from "./routes/discounts";
import Menu from "./routes/menu";
import Categories from "./routes/categories";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} path="/">
      <Route element={<Root />} index />
      <Route element={<Discounts />} path="/discunts" />
      <Route element={<Menu />} path="/menu" />
      <Route element={<Categories />} path="/categories" />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
