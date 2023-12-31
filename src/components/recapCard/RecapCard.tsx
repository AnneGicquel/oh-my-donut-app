import { useEffect } from "react";
import Button from "components/common/button/Button"
import { useCartContext } from "contexts/CartContext"
import { useCommandeContext } from "contexts/CommandContext";
import { useContactForm } from "contexts/FormInfoContext";
import { useStayOrGoContext } from "contexts/FormMealChoiceContext";
import { useLocation, useNavigate } from "react-router-dom";
import styles from './RecapCard.module.css';

interface RecapCardProps {
    callback: () => void;
}
export const RecapCard = (props: RecapCardProps) => {
    const {callback} = props;
    const { products, getTotalOfAllProducts, getProducstTva, getTotal } = useCartContext();
    const { customerInfo } = useContactForm();
    const { selectedChoice } = useStayOrGoContext();
    const { addToCommand } = useCommandeContext();
    const navigate = useNavigate();
    const location = useLocation();
    const facturation = { sub_total: getTotalOfAllProducts(), tva: getProducstTva(), total: getTotal().toFixed(2) }

    const handleClick = () => {
        addToCommand(products, customerInfo!, selectedChoice!, facturation);
        callback();
    }

    useEffect(() => {
    }, [customerInfo, selectedChoice])

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
                {
                    location.pathname == '/cart' ||
                    ((customerInfo?.email && customerInfo?.firstName && customerInfo?.lastName && customerInfo?.phone) && (selectedChoice == 'Emporter' || selectedChoice == 'Sur place'))
                    ? <Button title="Commander" callback={() => handleClick()}/> : null
                }

            </div> 
            
        </section>
    )
}

function useLayoutEffect(arg0: () => void, arg1: import("react-router-dom").Location[]) {
    throw new Error("Function not implemented.");
}

