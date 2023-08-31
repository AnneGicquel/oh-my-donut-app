import React, { useState } from "react";
import style from "components/groupedCheckboxes/GroupedCheckboxes.module.css"; 

interface GroupedCheckboxesProps {
    label: React.ReactNode; // Propriété pour afficher l'étiquette de la case à cocher
    isChecked: boolean;
    callback: () => void; // Fonction de rappel à exécuter lorsque la case à cocher est cliquée
    price: any
}

const GroupedCheckboxes = ({ label, callback, isChecked, price }: GroupedCheckboxesProps) => {
    // ⬇️ OnClick pour avoir un chgmnt de isSelected à TRUE
    const handleGroupedCheckboxesChange = () => {
        callback(); 
    };

    const checkedOnClick = (el: HTMLInputElement) => {
        const checkboxesList = document.getElementsByClassName("checkoption");
        for (let i = 0; i < checkboxesList.length; i++) {
            (checkboxesList[i] as HTMLInputElement).checked = false; // Décocher toutes les autres cases à cocher

        }
        el.checked = true; // Cocher la case à cocher cliquée
    };

    return (
        <div className={style.checkbox}>
            {/* Afficher le label */}
            <label htmlFor="idCheckbox" style={{

                color: isChecked ? '#22C0DF' : 'black',
                // fontWeight: isChecked ? 'bold' : 'normal',
                WebkitTextStroke: isChecked ? '0.2px black' : 'none'

            }}>
                {label} - ({price / 100} €)
            </label>

            {/* Élément d'entrée de type case à cocher */}
            <input
                type="checkbox"
                className="checkoption" // Classe pour cibler les cases à cocher
                onClick={(event) => checkedOnClick(event.target as HTMLInputElement)} // Gérer le clic sur la case à cocher
                checked={isChecked} // Définir l'état de la case à cocher
                onChange={handleGroupedCheckboxesChange} // Gérer l'événement de changement de la case à cocher
            />
        </div>
    );
};

export default GroupedCheckboxes;

 // Qd case cliquée -> état true -> callback + décoche les autres cases".
 // import React, { useState } from "react";
// import style from "components/groupedCheckboxes/GroupedCheckboxes.module.css"; 

// interface GroupedCheckboxesProps {
//     label: React.ReactNode; // Propriété pour afficher l'étiquette de la case à cocher
//     callback: () => void; // Fonction de rappel à exécuter lorsque la case à cocher est cliquée
// }

// const GroupedCheckboxes = ({ label, callback }: GroupedCheckboxesProps) => {
//     const [isChecked, setIsChecked] = useState(false); // État pour suivre l'état de la case à cocher

//     // ⬇️ OnClick pour avoir un chgmnt de isSelected à TRUE
//     const handleGroupedCheckboxesChange = () => {
//         setIsChecked(!isChecked); // change state
//         callback(); 
//         console.log('ici', isChecked);
        

//     };

//     const checkedOnClick = (el: HTMLInputElement) => {
//         const checkboxesList = document.getElementsByClassName("checkoption");
//         for (let i = 0; i < checkboxesList.length; i++) {
//             (checkboxesList[i] as HTMLInputElement).checked = false; // Décocher toutes les autres cases à cocher

//         }
//         el.checked = true; // Cocher la case à cocher cliquée
//     };

//     return (
//         <div className={style.checkbox}>
//             {/* Afficher le label */}
//             <label htmlFor="idCheckbox" style={{

//                 color: isChecked ? '#22C0DF' : 'black',
//                 // fontWeight: isChecked ? 'bold' : 'normal',
//                 WebkitTextStroke: isChecked ? '0.2px black' : 'none'

//             }}>
//                 {label}
//             </label>

//             {/* Élément d'entrée de type case à cocher */}
//             <input
//                 type="checkbox"
//                 className="checkoption" // Classe pour cibler les cases à cocher
//                 onClick={(event) => checkedOnClick(event.target as HTMLInputElement)} // Gérer le clic sur la case à cocher
//                 checked={isChecked} // Définir l'état de la case à cocher
//                 onChange={handleGroupedCheckboxesChange} // Gérer l'événement de changement de la case à cocher
//             />
//         </div>
//     );
// };

// export default GroupedCheckboxes;

//  // Qd case cliquée -> état true -> callback + décoche les autres cases".