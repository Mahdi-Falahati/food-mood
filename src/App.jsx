import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";

const router = createBrowserRouter(
  createRoutesFromElements(<Route element={<Root />} path="/"></Route>)
);

export default function App() {
  return <RouterProvider router={router} />;
}
