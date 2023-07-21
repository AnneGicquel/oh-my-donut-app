import { useEffect } from "react";
import CategoryProvider from "../../contexts/CategoryContext";
import { useProductContext } from "../../contexts/ProductContext";
import Navbar from "../partials/navbar/Navbar";
import Card from "../../components/card/Card";
import './Products.css'

const Products = () => {
  const { products, getProducts } = useProductContext();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main className="product-main d-flex">
      <CategoryProvider>
        <Navbar />
      </CategoryProvider>

      <section className="section-container d-flex">
        {products.map((product) => {
          return <Card key={product.id} item={product} />;
        })}
      </section>
    </main>
  );
};

export default Products;
