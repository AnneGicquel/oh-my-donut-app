import { useContactForm } from 'contexts/FormInfoContext';
import { CustomerInformationI } from 'interfaces/donuts.interface';
import React, { useState } from 'react';
import styles from './FormInfo.module.css';


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
    <form onChange={handleSubmit} className={styles.formFlex}>
      <h4>Nom <span className={styles.redAsterix}>*</span></h4>
      <input type="text" name="lastName" placeholder="Nom" onChange={handleInputChange} required />
      { error.lastName ? <p className={styles.form_errors_payment}>Ce champs est requis. </p> : null } 
      <h4>Prénom <span className={styles.redAsterix}>*</span></h4>
      <input type="text" name="firstName" placeholder="Prénom" onChange={handleInputChange} required/>
      { error.firstName ? <p className={styles.form_errors_payment}>Ce champs est requis. </p> : null } 
      <h4>Email <span className={styles.redAsterix}>*</span></h4>
      <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required/>
      { error.email ? <p className={styles.form_errors_payment}>Ce champs est requis. </p> : null } 
      <h4>Portable <span className={styles.redAsterix}>*</span></h4>
      <input type="tel" name="phone" placeholder="Mobile" onChange={handleInputChange} required/>
      { error.phone ? <p className={styles.form_errors_payment}>Ce champs est requis. </p> : null } 
      <p><span className={styles.redAsterix}>*</span> Ces champs sont requis</p>
    </form>
  );
};

export default ContactForm;
