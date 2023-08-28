import Button from "components/common/button/Button"
import { useCartContext } from "contexts/CartContext"
import { useCommandeContext } from "contexts/CommandContext";
import { useContactForm } from "contexts/FormInfoContext";
import { useStayOrGoContext } from "contexts/FormMealChoiceContext";
import { useNavigate } from "react-router-dom";

export const RecapCard = () => {
    const { products, getTotalOfAllProducts, getProducstTva, getTotal } = useCartContext();

    const { customerInfo } = useContactForm();

    const { selectedChoice } = useStayOrGoContext();

    const { addToCommand } = useCommandeContext();

    const navigate = useNavigate();

    return (
        <section>
            <div>
                <h3>RÉCAPITULATIF</h3>

                <div style={{ display: 'flex' }}>
                    <span>Sous Total : </span>
                    <span>{ getTotalOfAllProducts() } €</span>
                </div>
                <div style={{ display: 'flex' }}>
                    <span>Dont TVA</span>
                    <span>{ getProducstTva() } €</span>
                </div>

                <h3><span>Total</span> <span>{getTotal().toFixed(2)} € TTC</span></h3>
            </div>
            <Button title="Commander" callback={() => {
                addToCommand(products, customerInfo!, selectedChoice!);
                navigate('/payment');
            }}/>
        </section>
    )
}