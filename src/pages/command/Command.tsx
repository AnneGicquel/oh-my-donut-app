import { useCartContext } from "contexts/CartContext";
import { useCommandeContext } from "contexts/CommandContext";
import { CommandeI, ProductCartI } from "interfaces/donuts.interface";
import style from "pages/command/Command.module.css"
import { useEffect, useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const Command = () => {

    const { command, getCommand } = useCommandeContext();
    const { getProductTotalPrice, getTotal, getTotalOfAllProducts, getProducstTva } = useCartContext();
    const navigate = useNavigate();
    const { id, customer, facturation, stayOrGo, orderedProducts } = command as unknown as CommandeI;

    // const {  } = orderedProducts as unknown as ProductCartI;

    

    const location = useLocation();
    useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        getCommand();
    }, []);

    return(
        <main className={style.commandMain}>
            <div className={style.dFlex}>
                <h1>DÉTAILS DE MA COMMANDE</h1>
                <h4>NUMÉRO DE COMMANDE: {id}</h4>
                <section className={style.command_card_section}>
                    {
                        orderedProducts?.map(item => {
                            return (
                                <div key={item.product.id} className={style.command_card_container}>
                                    <img className={style.command_card_img} src={item.product.imageUrl.src} alt={ item.product.imageUrl.alt } />
                                    <div className={style.card_text_container}>
                                        <h3>{item.product.title} {item.product.nbrPerson! > 1? `,${item.product.nbrPerson}` : null}</h3>
                                        <p>{item.product.description}</p>
                                        <span>sucre, farine, sel, blavbla, toctoc</span>
                                        {/* {
                                            item.product.extras.map( extra => <span>{extra} sucre, farine, sel, blavbla, toctoc</span>)
                                        } */}
                                    </div>
                                    <p className={style.command_product_price}>{getProductTotalPrice(item.product.quantity!, item.product.price, item.product.customExtras)} € TTC</p>
                                </div>
                            )
                        })
                    }

                <div className={style.info_facturation}>
                    <div>
                        <h3>INFORMATIONS  de FACTURATION</h3>
                        <p>{customer?.firstName} {customer?.lastName}</p>
                        <p>{customer?.email}</p>
                        <p>{customer?.phone}</p>
                    </div>
                    <div className={style.command_total}>
                            <h4>SOUS TOTAL <span>{facturation?.sub_total} €</span></h4>
                            <h4>DONT TVA <span>{facturation?.tva} €</span></h4>
                            <h4>TOTAL <span className={style.total}>{facturation?.total} TTC</span></h4>
                    </div>
                </div>
                </section>
                <section className={style.thx_section}>
                    <p>Merci {customer?.firstName} ! 😊</p>
                    <p>Tu recevras ce récapitulatif dans ta boîte mail.</p>
                    <img className={style.see_you} src="assets/images/oh-my-donut-images/GRAPHISM/see-u-soon-with-halo.png" alt="Graphic 'SEE YOU SOON' neon style with halo" />
                </section>
            </div>
        </main>

    )
}


export default Command;