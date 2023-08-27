import { ProductCartI } from "interfaces/donuts.interface";
import styles from './ReusableCartCard.module.css';
import { useCartContext } from "contexts/CartContext";

interface CartPropsI {
    item: ProductCartI;
  }

export const ReusableCartCard = (props : CartPropsI) => { //props: CartPropsI

    const { removeProductFromCart, changeQuantity, getProductTotalPrice, getTotalOfAllProducts } = useCartContext()

    const { item } = props;

    const { product } = item;
    
    return (
        <section className={`${styles.dflex} ${styles.recap_card_section}`}>
            <img className={styles.cart_card_image} src="/assets/images/oh-my-donut-images/PRODUCTS/DONUT/donut-unite/donut-1.png" alt="image donuts" />
            <div>
                {/* COFFRET DE 4 DONUTS */}
                
                <h4>{product.title }</h4> 
                <div>
                    <div>
                        <p>{product.description}</p>
                        <p>Coffret:  Signature - Ássortiment Éte gourmand</p>
                    </div>
                    <div>
                        <span onClick={() => changeQuantity(--product.quantity!, product)} style={{backgroundColor: "cyan", padding: '10px'}}>-</span>
                        <span style={{backgroundColor: "lightgreen", padding: '10px'}}>{product.quantity}</span>
                        <span onClick={() => changeQuantity(++product.quantity!, product)} style={{backgroundColor: "cyan", padding: '10px'}}>+</span>

                        <span>{getProductTotalPrice(product.quantity!, product.price)} € TTC</span>
                    </div>
                </div>
                <p onClick={() => removeProductFromCart(product)} style={{backgroundColor: "tomato", cursor: "pointer"}}><img src="" alt="" /> supprimer</p>
            </div>
        </section>
    )
}