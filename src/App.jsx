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
import FoodDetails from "./routes/foodDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} path="/">
      <Route element={<Root />} index />
      <Route element={<Discounts />} path="/discounts" />
      <Route element={<Menu />} path="/menu" />
      <Route element={<Categories />} path="/categories" />
      <Route
        element={<FoodDetails />}
        path="/menu/:foodId"
        loader={async ({ params }) => {
          const res = await fetch(
            "http://api-rcfood.vercel.app/data/" + params.foodId
          );
          return res.json();
        }}
      />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
