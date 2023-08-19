import { useEffect } from "react";
import CategoryProvider from "../../contexts/CategoryContext";
import { useProductContext } from "../../contexts/ProductContext";
import Navbar from "../partials/navbar/Navbar";
import Card from "../../components/card/Card";
import './Products.css'
import MobileProvider from "contexts/MobileContext";

const Products = () => {
  const { products, getProducts } = useProductContext();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main className="product-main">
      <h1>Toutes Nos Douceurs</h1>
      <div className="product-container d-flex">
        <Navbar />
        <section className="section-container d-flex">
          {products.map((product) => {
            return <Card key={product.id} item={product} />;
          })}
        </section>

      </div>
    </main>
  );
};

export default Products;
