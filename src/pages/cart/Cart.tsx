import { ReusableCartCard } from "components/common/reusableCardCart/ReusableCartCard"
import { RecapCard } from "components/recapCard/RecapCard"
import styles from './Cart.module.css';
import { useCartContext } from "contexts/CartContext";
import { useEffect } from "react";

const Cart = () => {
    const { products, getProductsFromCart } = useCartContext();

    useEffect(() => {
        getProductsFromCart();
      }, []);


    return <>
    <div>{JSON.stringify(products)}</div>
        <h1>Mon Panier</h1>
        <section className={styles.cart_section}>
            <ReusableCartCard />
            <RecapCard />
        </section>
    </>
}

export default Cart;