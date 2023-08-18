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

                <section>WORK HERE DEAR!</section>

            </div>

        </main>
    )


}



export default ProductDetails;