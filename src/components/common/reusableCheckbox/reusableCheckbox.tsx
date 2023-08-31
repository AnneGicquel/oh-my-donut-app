/*** IMPORT ***/
import style from './reusableCheckbox.module.css';
import { useState } from 'react'; 

/****** PROPS ******/
interface ReusableCheckboxProps {
    label: string;           
    callback: (e: any) => void;    
}
/**** COMPONENT ****/
const ReusableCheckbox = (props: ReusableCheckboxProps) => {
  const { label, callback } = props;
 
    const [isChecked, setIsChecked] = useState(false); 
		// ⬆️ state initialisé à false et récupéré dans la variable “checkbox” 
		// ⬆️ setCheckbox: la seule fonction qui peut set
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked); //inverse le state
    };

    return (
        <div className={style.checkbox}>
            <label htmlFor="idCheckbox" style={{
              color: isChecked ? '#22C0DF' : 'black',
              // fontWeight: isChecked ? 'bold' : 'normal',
              WebkitTextStroke: isChecked ? '0.2px black' : 'none' 
            }}>
                {label}
            </label>
            <input
                type="checkbox"
                id="idCheckbox"
                alt={label.split(' ')[1]}
                onClick={(e) => callback(e)}
                onChange={handleCheckboxChange} // onChange pour gérer changement état checkbox 
                // true or false ⬇️
                checked={isChecked} />  
        </div>
    );
};

export default ReusableCheckbox;