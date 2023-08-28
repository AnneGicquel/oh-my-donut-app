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

  const [error, setError] = useState({
    lastName: false,
    firstName: false,
    email: false,
    phone: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    updateCustomerInfo(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({...prevData, [name]: value}));
    setError((prevData) => ({...prevData, [name]: value.length === 0}))
  };

  return (
    <form onChange={handleSubmit} style={{display: 'flex', flexDirection: 'column', width: '250px'}}>
      <input type="text" name="lastName" placeholder="Nom" onChange={handleInputChange} required />
      { error.lastName ? <p>Ce champs est requis. </p> : null } 
      <input type="text" name="firstName" placeholder="Prénom" onChange={handleInputChange} required/>
      { error.firstName ? <p>Ce champs est requis. </p> : null } 
      <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required/>
      { error.email ? <p>Ce champs est requis. </p> : null } 
      <input type="tel" name="phone" placeholder="Mobile" onChange={handleInputChange} required/>
      { error.phone ? <p>Ce champs est requis. </p> : null } 
    </form>
  );
};

export default ContactForm;
