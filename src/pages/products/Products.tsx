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
  const { categoryTitle, products, product, getProducts } = useProductContext();
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
            return <Card item={product} key={product.id}/>
          })}
        </section>
      </div>
      <section className="allergens-main">
        <div className="allergensContainer">
          <img className="GLUTEN" alt="Gluten" src="/assets/images/oh-my-donut-images/ALLERGENS/GLUTEN.png" />
          <span>GLUTEN</span>
          <img className="MILK" alt="Milk" src="/assets/images/oh-my-donut-images/ALLERGENS/MILK.png" />
          <span>LAIT</span>
          <img className="NUTS" alt="Nuts" src="/assets/images/oh-my-donut-images/ALLERGENS/NUT.png" />
          <span>FRUITS A COQUES</span>
        </div>
      </section>

    </main>
  );
};

export default Products;
