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
        <section className={` ${styles.recap_card_section}`}>

            

            <div className={styles.flexCard}>

                <div className={styles.flexImgInfo}>


                    <img className={styles.cart_card_image} src={product.imageUrl.src} alt={product.imageUrl.alt} />


                    <div>
                        <h3>{product.title }</h3>
                        <p className={styles.p1}>{product.description}</p>
                        <p className={styles.p2}>Coffret:  Signature - Assortiment Éte gourmand</p>
                    </div>

                </div>

                <div className={styles.flexQuantityPrice}>

                    <div>

                        <span onClick={() => changeQuantity(--product.quantity!, product)} 
                        className={styles.buttonQuantityMinus}>-</span>

                        <span className={styles.labelQuantity}>{product.quantity}</span>
                        
                        <span onClick={() => changeQuantity(++product.quantity!, product)} 
                        className={styles.buttonQuantityPlus}>+</span>

                    </div>

                    <div>

                        <span className={styles.ttcPrice} >{getProductTotalPrice(product.quantity!, product.price, product?.customExtras!)} € TTC</span>

                    </div>

                </div>

            </div>

            <div>

                <p onClick={() => removeProductFromCart(product)} className={styles.buttonDelete}>❌Supprimer</p>

            </div>

        </section>
    )
}