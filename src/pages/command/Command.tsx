import style from "pages/command/Command.module.css"
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";


const Command = () => {

    const location = useLocation();
    useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);
  

    return(
        <main className={style.commandMain}>
            <div className={style.dFlex}>
                <h1>DÉTAILS DE MA COMMANDE</h1>
                <h2>NUMÉRO DE COMMANDE: numeroDeCommande entre accollades</h2>
                <section>
                    <h1>components/ReusableCartCard * 2</h1>
                    <h1>components/ReusableCartCard * 2</h1>
                    <h1>components/ReusableCartCard * 2</h1>
                    <h1>components/ReusableCartCard * 2</h1>
                    <h1>components/ReusableCartCard * 2</h1>
                    <h1>components/ReusableCartCard * 2</h1>
                </section>

                <section>
                    <h1>components/InfoFacturation</h1>
                    <h1>components/InfoFacturation</h1>
                    <h1>components/InfoFacturation</h1>
                    <h1>components/InfoFacturation</h1>
                    <h1>components/InfoFacturation</h1>
                    <h1>components/InfoFacturation</h1>
                </section>
                <p>
                    Merci prénomFormInfo entre accollades ! 😊
                </p>
                <p>
                    Tu recevras ce récapitulatif dans ta boîte mail.
                </p>
                <img src="assets/images/oh-my-donut-images/GRAPHISM/see-u-soon-with-halo.png" alt="Graphic 'SEE YOU SOON' neon style with halo" />
            </div>
        </main>

    )
}


export default Command;