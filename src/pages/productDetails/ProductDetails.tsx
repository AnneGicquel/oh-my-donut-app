import ProductCustomizer from "components/productCustomizer/ProductCustomizer";
import ProductDetailsComponent from "components/productDetailsComponent/ProductDetailsComponent";
import { useCartContext } from "contexts/CartContext";
import CategoryProvider from "contexts/CategoryContext";
import MobileProvider from "contexts/MobileContext";
import Navbar from "pages/partials/navbar/Navbar";
import style from "pages/productDetails/ProductDetails.module.css"
import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {

    const { getProductsFromCart } = useCartContext();

    const location = useLocation();
    useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        getProductsFromCart();
    }, []);
  

    return (
        <main className={style.productDetailsMain}>
            {/* ⬇️ NAVBAR */}
            {/* 🔴 mais ne conduit pas au pages.. */}
            <div className={style.dFlex}>
                <CategoryProvider>
                    <MobileProvider>
                        <Navbar />
                    </MobileProvider>
                </CategoryProvider>

                <section>
                    <ProductDetailsComponent />

                </section>

                <section>
                    <ProductCustomizer />
                </section>
            </div>
        </main>
    )


}



export default ProductDetails;