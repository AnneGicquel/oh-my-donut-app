import { createContext, useContext, useState } from 'react';
import { CustomerInformationI } from "interfaces/donuts.interface";

//interface formulaire information par défault
interface defaultFormInfo {
  customerInfo: CustomerInformationI | null;
  updateCustomerInfo: (info: CustomerInformationI) => void;
}

//création du contexte, de type <defaultFormInfo | undefined>
const ContactFormContext = createContext<defaultFormInfo | undefined>(undefined);


// méthode pour pouvoir exporter et utiliser les méthodes de notre context dans les autres composants:
export const useContactForm = () => {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error('useContactForm must be used within a ContactFormProvider');
  }
  return context;
};

//création du provider, qui wrappe le context pour qu'il soit utilisable dans tous les composants, on a aussi besoin d'un children
interface ContactFormProviderProps {
    children: JSX.Element;
}

export const ContactFormProvider = (props: ContactFormProviderProps) => {
  const {children} = props;  
  const [customerInfo, setCustomerInfo] = useState<CustomerInformationI | null>(null);

  const updateCustomerInfo = (info: CustomerInformationI) => {
    setCustomerInfo(info);
  };

  return (
    <ContactFormContext.Provider value={{ customerInfo, updateCustomerInfo }}>
      {children}
    </ContactFormContext.Provider>
  );
};

//export du composant ContactFormProvider
export default ContactFormProvider
