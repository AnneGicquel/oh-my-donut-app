import { RouteObject } from "react-router-dom";
import NotFound from "../pages/notFound/NotFound";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";

const ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Products />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export { ROUTES };
