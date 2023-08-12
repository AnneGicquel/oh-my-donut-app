import { RouteObject } from "react-router-dom";
import NotFound from "../pages/notFound/NotFound";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import ProductProvider from "../contexts/ProductContext";
import CartPage from "pages/cart/Cart";

const ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <ProductProvider><Products /></ProductProvider>
      },
      {
        path: "/cart",
        element: <CartPage />
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export { ROUTES };
