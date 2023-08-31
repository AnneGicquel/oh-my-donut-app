import React from 'react';
import { StayOrGoType } from 'interfaces/donuts.interface';
import { useStayOrGoContext } from 'contexts/FormMealChoiceContext';
import styles from './FormMealChoice.module.css';

interface ChoiceOptionProps {
  type: StayOrGoType;
  imageSrc: string;
  title: string;
  description: string;
}

const ChoiceOption: React.FC<ChoiceOptionProps> = ({ type, imageSrc, title, description }) => {
  const { selectedChoice, setSelectedChoice } = useStayOrGoContext();
  const isSelected = selectedChoice === type;

  const handleSelect = () => {
    setSelectedChoice(type);
  };

  return (
    

    <div className={`choice-option ${isSelected ? 'selected' : ''}`} onClick={handleSelect}>
        
      <div className={styles.formContainer}>

        <input type="radio" name="stayOrGo" checked={isSelected} readOnly />
        <img src={imageSrc} alt={title} />
        
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        
      </div>

    </div>
  );
};

export default ChoiceOption;
