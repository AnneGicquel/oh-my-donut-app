// IMPORT//
import ReusableCheckbox from "components/common/reusableCheckbox/reusableCheckbox";
import CheckboxName from "components/checkboxName/CheckboxName";
import style from "components/productCustomizer/ProductCustomizer.module.css"
import CheckboxCandle from "components/checkboxCandle/CheckboxCandle";

// COMPONENT//
const ProductCustomizer = () => {

    // Fonction pour gérer le clic sur les checkboxes
    const callbackEnAttendant = () => {
        console.log("Checkbox-callbackEnAttendant => OK");
    };
    return (
        <section className={style.productCustomizerSection}>

            {/* 🔴 IF : Customize n'apparaît que if 'produit personnalisable */}
            {/*/////////////////////////// FIRST PART /////////////////////////////*/}

            <h3> 2 DRopDown à ajouter après avoir fait GroupedCheckboxes</h3>

            {/* ********************************************** */}
            {/* CHECKBOXES NON REUSABLES)*/}
            <CheckboxName callback={callbackEnAttendant}/>
            <CheckboxCandle callback={callbackEnAttendant}/> 

            {/* 🔴 DISPLAY IF : personnnaliser = 'oui' */}
            {/*/////////////////////////// SECOND PART /////////////////////////////*/}

            <h3> 3 DRopDown à ajouter après avoir fait GroupedCheckboxes</h3>

            <ReusableCheckbox label="Sans gluten" callback={callbackEnAttendant} />
            <ReusableCheckbox label="Sans lactose" callback={callbackEnAttendant} />
            <ReusableCheckbox label="Sans fruits à coque" callback={callbackEnAttendant} />
        </section>
    )
}

export default ProductCustomizer;