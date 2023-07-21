import { useEffect } from "react";
import CategoryProvider from "../../contexts/CategoryContext";
import { useProductContext } from "../../contexts/ProductContext";
import Navbar from "../partials/navbar/Navbar";
import Card from "../../components/card/Card";

const Products = () => {
  const { products, getProducts } = useProductContext();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main style={{ display: "flex", justifyContent: "space-between" }}>
      <CategoryProvider>
        <Navbar />
      </CategoryProvider>

      <section style={{ width: "70%" }}>
        {JSON.stringify(products)}
        {products.map((product) => {
          return <Card item={product} />;
        })}
      </section>
    </main>
  );
};

export default Products;
