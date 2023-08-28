
import ChoiceOption from 'components/formMealChoice/FormMealChoice';
import { StayOrGoProvider } from 'contexts/FormMealChoiceContext';
import ContactForm from "components/formInfo/FormInfo";
import ContactFormProvider from "contexts/FormInfoContext";
import { RecapCard } from 'components/recapCard/RecapCard';
import { CartProvider, useCartContext } from 'contexts/CartContext';
import { useEffect } from 'react';

const Payment = () => {

  const { getProductsFromCart } = useCartContext();

  useEffect(() => {
    getProductsFromCart();
  }, [])

  return (<>
  <section>Payment</section>
      
      <div>
        <h1>Mes Informations</h1>
        <ContactForm />
        <p>* Ces champs sont requis</p>
      </div>

      <div className="app">
        <ChoiceOption
          type="Emporter" //le radiobutton pour Emporter
          imageSrc="oh-my-donut-app\public\assets\images\oh-my-donut-images\ICONS\velo.png"
          title="A Emporter"
          description="Après votre commande, veuillez vous rendre au comptoir 'A Emporter'. Bonne dégustation."
        />
        <ChoiceOption
          type="Sur place" //le radiobutton pour Sur Place
          imageSrc="oh-my-donut-app\public\assets\images\oh-my-donut-images\ICONS\sac-de-courses.png"
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