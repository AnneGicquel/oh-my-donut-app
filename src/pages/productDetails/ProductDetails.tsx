import ProductCustomizer from "components/productCustomizer/ProductCustomizer";
import ProductDetailsComponent from "components/productDetailsComponent/ProductDetailsComponent";
import CategoryProvider from "contexts/CategoryContext";
import MobileProvider from "contexts/MobileContext";
import Navbar from "pages/partials/navbar/Navbar";
import style from "pages/productDetails/ProductDetails.module.css"
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {

    const location = useLocation();
    useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);
  

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