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
import ContactFormProvider from "contexts/FormInfoContext";
import { StayOrGoProvider } from "contexts/FormMealChoiceContext";

const ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <ProductProvider>
      <CategoryProvider>
      <ContactFormProvider><StayOrGoProvider>
        <Home />
        </StayOrGoProvider></ContactFormProvider>
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
        element: <Cart />,
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

