import { ProductI } from "interfaces/donuts.interface";
import styles from './ReusableCartCard.module.css';

interface CartPropsI {
    item: ProductI;
  }

export const ReusableCartCard = () => { //props: CartPropsI
    
    return (
        <section className={`${styles.dflex} ${styles.recap_card_section}`}>
            <img className={styles.cart_card_image} src="/assets/images/oh-my-donut-images/PRODUCTS/DONUT/donut-unite/donut-1.png" alt="image donuts" />
            <div>
                <h4>COFFRET DE 4 DONUTS</h4>
                <div>
                    <div>
                        <p>COFFRET PARFUMS DE REVE</p>
                        <p>Coffret:  Signature - Ássortiment Éte gourmand</p>
                    </div>
                    <div>
                        <span>-</span>
                        <input type="text" name="price" id="card-price" />
                        <span>+</span>
                        <span>30.00 € TTC</span>
                    </div>
                </div>
                <p><img src="" alt="" /> supprimer</p>
            </div>
        </section>
    )
}