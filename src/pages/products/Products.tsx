import { useEffect, useLayoutEffect, useState } from "react";
import CategoryProvider from "../../contexts/CategoryContext";
import { useProductContext } from "../../contexts/ProductContext";
import Navbar from "../partials/navbar/Navbar";
import Card from "../../components/card/Card";
import './Products.css'
import MobileProvider from "contexts/MobileContext";
import { useCartContext } from "contexts/CartContext";
import { useLocation } from "react-router-dom";

const Products = () => {
  const { categoryTitle, products, getProducts } = useProductContext();
  const { getProductsFromCart } = useCartContext();

  useEffect(() => {
    getProducts();
    getProductsFromCart();
  }, []);

  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  // ALLOW US TO GET INNERwIDTH ET HEIGHT OF SCREEN
  // will be refacto later
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);

    return (() => {
      window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])

  return (
    <main className="product-main">
      <h1>{!categoryTitle ? 'Toutes Nos Douceurs' : (categoryTitle === 'Nos Douceurs') ? `Toutes ${categoryTitle}` : categoryTitle}</h1>
      <div className="product-container d-flex">
        {screenSize.width > 768 ? <Navbar /> : null}
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
