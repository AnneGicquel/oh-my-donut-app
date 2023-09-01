import { ReusableCartCard } from "components/common/reusableCardCart/ReusableCartCard"
import { RecapCard } from "components/recapCard/RecapCard"
import styles from './Cart.module.css';
import { useCartContext } from "contexts/CartContext";
import { useEffect, useLayoutEffect } from "react";
import { useCommandeContext } from "contexts/CommandContext";
import { useLocation, useNavigate } from "react-router-dom";

const Cart = () => {
    const { products, getProductsFromCart } = useCartContext();

    const { getCommand } = useCommandeContext();

    const navigate = useNavigate()

    useEffect(() => {
        getProductsFromCart();
        getCommand();
    }, []);

    const location = useLocation();
    useLayoutEffect(() => {
      window.scrollTo(200, 300);
    }, [location.pathname]);

    const handleClick = () => {
        navigate('/payment');
    }
  

    const emptyCart = <h1 className={styles.empty_cart}>Le panier est vide</h1>

    const panier = <>
        <h1>Mon Panier</h1>
        <section className={styles.cart_section}>
            
            <div className={styles.cart_card_container}>
                {products.map(product => {
                    return <ReusableCartCard key={product.id} item={product} />
                })}
            </div>
            
            <RecapCard  callback={handleClick}/>

        </section></>

    return <>{ products.length <= 0 ? emptyCart : panier} </>
}

export default Cart;