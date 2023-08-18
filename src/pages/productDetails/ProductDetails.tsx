import CategoryProvider from "contexts/CategoryContext";
import Navbar from "pages/partials/navbar/Navbar";
import style from "pages/productDetails/ProductDetails.module.css"

const ProductDetails = () => {

    return (
        <main className={style.productDetailsMain}>
            {/* ⬇️ NAVBAR */}
            {/* 🔴 mais ne conduit pas au pages.. */}
            <div className={style.dFlex}>
                <CategoryProvider>
                    <Navbar />
                </CategoryProvider>

                <section>
                    <h1>components/ProductDetails</h1>
                    <h1>components/ProductDetails</h1>
                    <h1>components/ProductDetails</h1>
                    <h1>components/ProductDetails</h1>
                    <h1>components/ProductDetails</h1>
                    <h1>components/ProductDetails</h1>
                </section>

                <section>
                    <h1>components/ProductCustomizer</h1>
                    <h1>components/ProductCustomizer</h1>
                    <h1>components/ProductCustomizer</h1>
                    <h1>components/ProductCustomizer</h1>
                    <h1>components/ProductCustomizer</h1>
                    <h1>components/ProductCustomizer</h1>
                </section>
            </div>
        </main>
    )


}



export default ProductDetails;