import { RouteObject } from "react-router-dom";
import NotFound from "../pages/notFound/NotFound";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import ProductProvider from "../contexts/ProductContext";
import ProductDetails from "pages/productDetails/ProductDetails";
import Command from "pages/command/Command";

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
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  ////// PRODUCT DETAIL //////
  {
    path: "/ProductDetails",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <ProductProvider><ProductDetails /></ProductProvider>
      },
    ],
  },
  /////// COMMAND ////////
  {
    path: "/Command",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <ProductProvider><Command /></ProductProvider>
      },
    ],
  },

];

export { ROUTES };
