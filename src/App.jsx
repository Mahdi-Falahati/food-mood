import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./routes/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(<Route element={<RootLayout />} path="/"></Route>)
);

export default function App() {
  return <RouterProvider router={router} />;
}
