import ContactForm from "components/formInfo/FormInfo";
import ContactFormProvider from "contexts/FormInfoContext";

const Payment = () => {

return (
    //<section>Payment</section>
    <ContactFormProvider>
      
      <div>
        <h1>Mes Informations</h1>
        <ContactForm />
        <p>* Ces champs sont requis</p>
      </div>

    </ContactFormProvider>
  );

}

export default Payment;