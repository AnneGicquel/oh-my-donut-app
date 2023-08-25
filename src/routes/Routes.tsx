import { RouteObject } from "react-router-dom";
import NotFound from "../pages/notFound/NotFound";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import ProductProvider from "../contexts/ProductContext";
import ProductDetails from "pages/productDetails/ProductDetails";
import Command from "pages/command/Command";
import CategoryProvider from "contexts/CategoryContext";
import Payment from "pages/payment/Payment";
import MobileProvider from "contexts/MobileContext";
import Cart from "pages/cart/Cart";
import { CartProvider } from "contexts/CartContext";

const ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <ProductProvider>
      <CategoryProvider>
        <Home />
      </CategoryProvider>
    </ProductProvider>,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Products />
      },
      /// PRODUCT DETAIL //////
      {
        path: "/ProductDetails/:id", 
        element: <ProductProvider><ProductDetails /></ProductProvider>,
      },
      /////// CART ////////
      {
        path: "/cart",
        element: <CartProvider><Cart /></CartProvider>,
      },
      /////// PAYMENT ////////
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/command",
        element: <Command />,
      },
    ],
  },
  /////// NOTFOUND ////////
  {
    path: "*",
    element: <NotFound />,
  },

];

export { ROUTES };

