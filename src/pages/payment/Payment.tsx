
import ChoiceOption from 'components/formMealChoice/FormMealChoice';
import { StayOrGoProvider } from 'contexts/FormMealChoiceContext';
import ContactForm from "components/formInfo/FormInfo";
import ContactFormProvider from "contexts/FormInfoContext";
import { RecapCard } from 'components/recapCard/RecapCard';
import { CartProvider, useCartContext } from 'contexts/CartContext';
import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Payment = () => {

  const { getProductsFromCart } = useCartContext();

  useEffect(() => {
    getProductsFromCart();
  }, []);

  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (<>
  <section>Payment</section>
      
      <div>
        <h1>Mes Informations</h1>
        <ContactForm />
      </div>

      <div className="app">
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
    </>
  );
};

export default Payment;