import ChoiceOption from 'components/formMealChoice/FormMealChoice';
import { StayOrGoProvider } from 'contexts/FormMealChoiceContext';


const Payment = () => {

  return (
    <StayOrGoProvider>
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
    </StayOrGoProvider>
  );
};


export default Payment;