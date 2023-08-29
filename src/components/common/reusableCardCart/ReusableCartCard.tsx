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
                
                <h3>{product.title }</h3> 
                <div>

                    <div>
                        <p className={styles.p1}>{product.description}</p>
                        <p className={styles.p2}>Coffret:  Signature - Assortiment Éte gourmand</p>
                    </div>

                    <div>

                        <span onClick={() => changeQuantity(--product.quantity!, product)} 
                        // style={{backgroundColor: "cyan", padding: '10px'}}
                        className={styles.buttonQuantity}
                        >-</span>

                        <span 
                        //style={{backgroundColor: "lightgreen", padding: '10px'}}
                        className={styles.labelQuantity}
                        >{product.quantity}</span>
                        
                        <span onClick={() => changeQuantity(++product.quantity!, product)} 
                        // style={{backgroundColor: "cyan", padding: '10px'}}
                        className={styles.buttonQuantity}
                        >+</span>

                        <span className={styles.ttcPrice} >{getProductTotalPrice(product.quantity!, product.price)} € TTC</span>
                    </div>
                </div>

                <p onClick={() => removeProductFromCart(product)} 
                //style={{backgroundColor: "tomato", cursor: "pointer"}}
                className={styles.buttonDelete}
                ><img src="" alt="" /> ❌Supprimer</p>

            </div>
        </section>
    )
}