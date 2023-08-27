import { ReusableCartCard } from "components/common/reusableCardCart/ReusableCartCard"
import { RecapCard } from "components/recapCard/RecapCard"
import styles from './Cart.module.css';
import { useCartContext } from "contexts/CartContext";
import { useEffect } from "react";

const Cart = () => {
    const { products, getProductsFromCart } = useCartContext();

    useEffect(() => {
        getProductsFromCart();
    }, [products]);

    const emptyCart = <h1>Le panier est vide</h1>

    const panier = <>
        <h1>Mon Panier</h1>
        <section className={styles.cart_section}>
            <div className={styles.cart_card_container}>
                {products.map(product => {
                    return <ReusableCartCard key={product.id} item={product} />
                })}
            </div>
            <RecapCard />

        </section></>

    return <>{ products.length <= 0 ? emptyCart : panier} </>
}

export default Cart;