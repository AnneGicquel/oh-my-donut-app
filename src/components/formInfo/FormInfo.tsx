import { useContactForm } from 'contexts/FormInfoContext';
import { CustomerInformationI } from 'interfaces/donuts.interface';
import React, { useState } from 'react';


const ContactForm: React.FC = () => {
  const { customerInfo, updateCustomerInfo } = useContactForm();
  const [formData, setFormData] = useState<CustomerInformationI>({
    id: 0,
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateCustomerInfo(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({...prevData, [name]: value,}));
  };

  return (
    <form onChange={handleSubmit} style={{display: 'flex', flexDirection: 'column', width: '250px'}}>
      <input type="text" name="lastName" placeholder="Nom" onChange={handleInputChange} required />
      <input type="text" name="firstName" placeholder="Prénom" onChange={handleInputChange} required/>
      <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required/>
      <input type="tel" name="phone" placeholder="Mobile" onChange={handleInputChange} required/>
      {/* <button  onChange={(e) => handleSubmit(e)} type="submit">Envoyer</button> */}
    </form>
  );
};

export default ContactForm;
