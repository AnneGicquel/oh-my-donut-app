import CategoryProvider from "../../contexts/CategoryContext";
import Navbar from "../partials/navbar/Navbar";

const Products = () => {
    return <main>
        <CategoryProvider>
            <Navbar />
        </CategoryProvider>
    </main>
}

export default Products;