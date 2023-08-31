// IMPORT//
import style from "components/checkboxName/CheckboxName.module.css"
import { useState } from 'react';


// PROPS//
interface CheckboxNameProps {
    callback: (e: any, value?: any) => void;
}


// COMPONENT//
const CheckboxName = (props: CheckboxNameProps) => {
    const { callback } = props;

    const [isChecked, setIsChecked] = useState(false);
    // ⬆️ state initialisé à false et récupéré dans la variable “checkbox” 
    // ⬆️ setCheckbox: la seule fonction qui peut set

    const [nameValue, setNameValue] = useState(""); 
    // ⬆️ state initialisé à "" et récupéré dans la variable “nameValue” 
    // ⬆️ setnameValue: la seule fonction qui peut set

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked); //inverse le state
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameValue(event.target.value); // màj prénom
    };

    return (
        <section>
            <div className={style.checkbox}>
                <label htmlFor="idCheckboxPlaque" style={{
                    color: isChecked ? '#22C0DF' : 'black',
                    WebkitTextStroke: isChecked ? '0.2px black' : 'none'
                }}>
                    Plaque
                </label>
                <input
                    type="checkbox"
                    id="idCheckboxPlaque"
                    onClick={(e) => callback(e,isChecked)}
                    onChange={handleCheckboxChange} // handle chgmnt état checkbox 
                    // true or false ⬇️
                    checked={isChecked} />

                <label htmlFor="idCheckboxPrenom" className={style.labelName}>
                    Prénom(s)
                </label>
                <input
                    type="text" //champ de saisie 
                    id="idCheckboxPrenom"
                    onChange={(e) => {callback(e); setNameValue(e.target.value)}}
                    // onChange={handleNameChange} // handle chgmnt prénom
                    value={nameValue} // value in useState
                />
                    <p>3€</p>
            </div>
        </section>


    )
}

export default CheckboxName;