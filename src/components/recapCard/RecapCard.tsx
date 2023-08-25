import Button from "components/common/button/Button"

export const RecapCard = () => {
    return (
        <section>
            <div>
                <h3>RÉCAPITULATIF</h3>

                <div style={{ display: 'flex' }}>
                    <span>Sous Total</span>
                    <span>85.00 €</span>
                </div>
                <div style={{ display: 'flex' }}>
                    <span>Dont TVA</span>
                    <span>14.17 €</span>
                </div>

                <h3><span>Total</span> <span>85.00 € TTC</span></h3>
            </div>
            <Button title="Commander"/>
        </section>
    )
}