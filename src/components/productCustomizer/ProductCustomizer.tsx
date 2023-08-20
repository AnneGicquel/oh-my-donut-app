// IMPORT//
import ReusableCheckbox from "components/common/reusableCheckbox/reusableCheckbox";
import CheckboxName from "components/checkboxName/CheckboxName";
import style from "components/productCustomizer/ProductCustomizer.module.css"
import CheckboxCandle from "components/checkboxCandle/CheckboxCandle";
import ReusableDropdown from "components/common/reusableDropdown/reusableDropdown";
import Button from "components/common/button/Button";


// COMPONENT//
const ProductCustomizer = () => {

    // Fonction pour gérer le clic sur l'élément de menu (DropDown)
    const handleMenuItemClick = (itemId: number) => {
        console.log(`Menu item ${itemId} clicked`);
    };

    // Fonction pour gérer le clic sur le sous-élément du menu (DropDown)
    const handleSubMenuItemClick = (itemId: number, subItemId: number) => {
        console.log(`Submenu item ${subItemId} of menu item ${itemId} clicked`);
    };

    // Fonction pour gérer le clic sur les checkboxes
    const callbackEnAttendant = () => {
        console.log("Checkbox-callbackEnAttendant => OK");
    };

    //DROPDOWN//
    //*FIRST PART*//
    const menuHowManyPeople = [
        {
            id: 1,
            title: "Nombre de personnes",
            subCategories: [
                { id: 1, title: '5 personnes', label: "5 personnes" },
                { id: 2, title: '8 personnes', label: "8 personnes" },
                { id: 3, title: '15 personnes', label: "15 personnes" }
            ]
        }]

    const menuCustomizationOrNot = [
        {
            id: 2,
            title: "Personnaliser",
            subCategories: [
                { id: 4, title: 'oui', label: "oui" },
                { id: 5, title: 'non', label: "non" }
            ]
        }
    ];

    //*SECOND PART*//

    const flavour1 = [
        {
            id: 1,
            title: "Parfum 1",
            subCategories: [
                { id: 6, title: 'Vanille', label: "Vanille" },
                { id: 7, title: 'Caramel', label: "Caramel" },
                { id: 8, title: 'Chocolat', label: "Chocolat" }
            ]
        }]

    const flavour2 = [
        {
            id: 2,
            title: "Parfum 2",
            subCategories: [
                { id: 9, title: 'Framboise', label: "Framboise" },
                { id: 10, title: 'Banane', label: "Banane" },
                { id: 11, title: 'Fraise', label: "Fraise" }
            ]
        }
    ];

    const flavour3 = [
        {
            id: 2,
            title: "Parfum 3",
            subCategories: [
                { id: 12, title: 'Pistache', label: "Pistache" },
                { id: 13, title: 'Dulce de leche', label: "Dulce de leche" },
                { id: 14, title: 'Citron', label: "Citron" }
            ]
        }
    ];


    return (
        <section className={style.productCustomizerSection}>

            {/* 🔴 IF : Customize n'apparaît que if 'produit personnalisable */}
            {/*/////////////////////////// FIRST PART /////////////////////////////*/}

            <ReusableDropdown
                items={menuHowManyPeople}
                onMenuItemClick={handleMenuItemClick}
                onSubMenuItemClick={handleSubMenuItemClick}
            />
            <ReusableDropdown
                items={menuCustomizationOrNot}
                onMenuItemClick={handleMenuItemClick}
                onSubMenuItemClick={handleSubMenuItemClick}
            />

            {/* ********************************************** */}
            {/* CHECKBOXES NON REUSABLES)*/}
            <CheckboxName callback={callbackEnAttendant} />
            <CheckboxCandle callback={callbackEnAttendant} />

            {/* 🔴 DISPLAY IF : personnnaliser = 'oui' */}
            {/*/////////////////////////// SECOND PART /////////////////////////////*/}
            <div className={style.ifCustomize}>
                <ReusableDropdown
                    items={flavour1}
                    onMenuItemClick={handleMenuItemClick}
                    onSubMenuItemClick={handleSubMenuItemClick}
                />
                <ReusableDropdown
                    items={flavour2}
                    onMenuItemClick={handleMenuItemClick}
                    onSubMenuItemClick={handleSubMenuItemClick}
                />
                <ReusableDropdown
                    items={flavour3}
                    onMenuItemClick={handleMenuItemClick}
                    onSubMenuItemClick={handleSubMenuItemClick}
                />

                <ReusableCheckbox label="Sans gluten" callback={callbackEnAttendant} />
                <ReusableCheckbox label="Sans lactose" callback={callbackEnAttendant} />
                <ReusableCheckbox label="Sans fruits à coque" callback={callbackEnAttendant} />
            </div>
            <div className={style.quantityContainer}>
                <span>QUANTITÉ</span>
                <div>
                    <span>-</span>
                    <span>0</span>
                    <span>+</span>
                </div>
                <span>à partir de </span>
                <span>55.00€</span>
            </div>

            <div className={style.customButtonWrapper}>
                <Button title={"AJOUTER AU PANIER"} />
            </div>


            <div className={style.clockContainer}>
                <img src="assets/images/oh-my-donut-images/ICONS/clock.png" alt="Icon you must order 48 hours before receiving it" />
                <span>48h</span>
            </div>


            <div className={style.allergensContainer}>
                <img className="GLUTEN" alt="Gluten" src="assets/images/oh-my-donut-images/ALLERGENS/GLUTEN.png" />
                <span>GLUTEN</span>
                <img className="MILK" alt="Milk" src="assets/images/oh-my-donut-images/ALLERGENS/MILK.png" />
                <span>LAIT</span>
                <img className="NUTS" alt="Nuts" src="assets/images/oh-my-donut-images/ALLERGENS/NUT.png" />
                <span>FRUITS A COQUES</span>
            </div>

        </section>
    )
}

export default ProductCustomizer;