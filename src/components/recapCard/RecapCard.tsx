import Button from "components/common/button/Button"
import { useCartContext } from "contexts/CartContext"

export const RecapCard = () => {
    const { getTotalOfAllProducts, getProducstTva, getTotal } = useCartContext()
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
            <Button title="Commander"/>
        </section>
    )
}