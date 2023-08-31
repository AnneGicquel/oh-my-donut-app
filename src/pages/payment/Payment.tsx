
import ChoiceOption from 'components/formMealChoice/FormMealChoice';
import { StayOrGoProvider } from 'contexts/FormMealChoiceContext';
import ContactForm from "components/formInfo/FormInfo";
import ContactFormProvider from "contexts/FormInfoContext";
import { RecapCard } from 'components/recapCard/RecapCard';
import { CartProvider, useCartContext } from 'contexts/CartContext';
import { useEffect, useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Payment.module.css';
import { useCommandeContext } from 'contexts/CommandContext';

const Payment = () => {

  const { getProductsFromCart } = useCartContext();
  const { command } = useCommandeContext();

  const navigate = useNavigate();

  useEffect(() => {
    getProductsFromCart();

    if(command.length <= 0) {
      navigate('/cart')
    }
  }, []);

  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (<>
    <div className={styles.paymentContainer}>

      <div className={styles.myInfoContainer}>
        <h1>Mes Informations</h1>
        <ContactForm />
      </div>

      <div className={styles.myMealContainer}>

        <div className="app">
          <h1>Ma Dégustation</h1>
          <ChoiceOption
            type="Emporter" //le radiobutton pour Emporter
            imageSrc="assets/images/oh-my-donut-images/ICONS/velo.png"
            title="A Emporter"
            description="Après votre commande, veuillez vous rendre au comptoir 'A Emporter'. Bonne dégustation."
          />
          <ChoiceOption
            type="Sur place" //le radiobutton pour Sur Place
            imageSrc="assets/images/oh-my-donut-images/ICONS/sac-de-courses.png"
            title="Sur place"
            description="En échange de votre ticket, vous recevrez un bipper à l'accueil. Vous pouvez ensuite aller vous asseoir confortablement. Nous nous occupons du reste. "
          />
        </div>
       
        <div>
            <RecapCard />
        </div>

      </div>
    </div>  
    </>
  );
};

export default Payment;