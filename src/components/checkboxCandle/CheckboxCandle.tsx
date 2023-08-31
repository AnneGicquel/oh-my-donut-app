// IMPORT//
import style from "components/checkboxCandle/CheckboxCandle.module.css"
import { useState } from 'react';


// PROPS//
interface CheckboxCandleProps {
    callback: (e: any, isChecked?: boolean) => void;
}


// COMPONENT//
const CheckboxCandle = (props: CheckboxCandleProps) => {
    const { callback } = props;

    const [isChecked, setIsChecked] = useState(false);
    // ⬆️ state initialisé à false et récupéré dans la variable “checkbox” 
    // ⬆️ setCheckbox: la seule fonction qui peut set
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked); //inverse le state
    };

    return (
        <section>
            <div className={style.checkbox}>
                <label htmlFor="idCheckboxBougie" style={{
                    color: isChecked ? '#22C0DF' : 'black',
                    WebkitTextStroke: isChecked ? '0.2px black' : 'none'
                }}>
                    Bougie
                </label>
                <input
                    type="checkbox"
                    id="idCheckboxBougie"
                    onClick={(e) => callback(e, isChecked)}
                    onChange={handleCheckboxChange} // handle chngmnt état checkbox 
                    // true or false ⬇️
                    checked={isChecked} />
                <p>1€</p>
            </div> 
        </section>


    )
}

export default CheckboxCandle;