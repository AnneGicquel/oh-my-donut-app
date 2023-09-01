import Button from "components/common/button/Button"
import { useCartContext } from "contexts/CartContext"
import { useCommandeContext } from "contexts/CommandContext";
import { useContactForm } from "contexts/FormInfoContext";
import { useStayOrGoContext } from "contexts/FormMealChoiceContext";
import { useLocation, useNavigate } from "react-router-dom";
import styles from './RecapCard.module.css';

export const RecapCard = () => {
    const { products, getTotalOfAllProducts, getProducstTva, getTotal } = useCartContext();
    const { customerInfo } = useContactForm();
    const { selectedChoice } = useStayOrGoContext();
    const { addToCommand } = useCommandeContext();
    const navigate = useNavigate();
    const location = useLocation();
    const facturation = { sub_total: getTotalOfAllProducts(), tva: getProducstTva(), total: getTotal().toFixed(2) }

    const handleClick = () => {
        addToCommand(products, customerInfo!, selectedChoice!, facturation);
        if(location.pathname === '/cart') {
            navigate('/payment');
        } else if(location.pathname === '/payment') {
            navigate('/command');
        }
    }

    return (
        <section>
            <div className={styles.recapCardContainer}>
                <h3>RÉCAPITULATIF</h3>

                <div className={styles.recapCardFlex}>
                    <p>Sous Total : </p>
                    <p>{getTotalOfAllProducts()} €</p>
                </div>
                <div className={styles.recapCardFlex}>
                    <p>Dont TVA : </p>
                    <p>{getProducstTva()} €</p>
                </div>

                <div className={styles.recapCardFlex}>
                    <h4>Total :</h4> 
                    <h4>{getTotal().toFixed(2)} € TTC</h4>
                </div>
   
                <Button title="Commander" callback={() => handleClick()}/>

            </div> 
            
        </section>
    )
}

function useEffect(arg0: () => void, arg1: never[]) {
    throw new Error("Function not implemented.");
}
function useLayoutEffect(arg0: () => void, arg1: import("react-router-dom").Location[]) {
    throw new Error("Function not implemented.");
}

