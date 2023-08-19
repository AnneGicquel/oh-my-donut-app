import { RouteObject } from "react-router-dom";
import NotFound from "../pages/notFound/NotFound";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import ProductProvider from "../contexts/ProductContext";
import ProductDetails from "pages/productDetails/ProductDetails";
import Command from "pages/command/Command";
import CategoryProvider from "contexts/CategoryContext";
import MobileProvider from "contexts/MobileContext";

const ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <MobileProvider><Home /></MobileProvider>,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element:
          <ProductProvider>
            <CategoryProvider>
              <Products />
            </CategoryProvider>
          </ProductProvider>
      },
    ],
  },
  ////// PRODUCT DETAIL //////
  {
    path: "/ProductDetails/:id",
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
  {
    path: "*",
    element: <NotFound />,
  },

];

export { ROUTES };
