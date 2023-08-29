// IMPORT//
import ReusableCheckbox from "components/common/reusableCheckbox/reusableCheckbox";
import CheckboxName from "components/checkboxName/CheckboxName";
import style from "components/productCustomizer/ProductCustomizer.module.css"
import CheckboxCandle from "components/checkboxCandle/CheckboxCandle";
import ReusableDropdown from "components/common/reusableDropdown/reusableDropdown";
import Button from "components/common/button/Button";
import { useEffect, useState } from "react";
import { useProductContext } from "contexts/ProductContext";
import { useCartContext } from "contexts/CartContext";
import { useNavigate, useParams } from "react-router-dom";

// COMPONENT//
const ProductCustomizer = () => {

    // FETCH LES DATAS
    const { product, getOneProduct, setProduct } = useProductContext();
    const { id } = useParams(); //fetch data
    const { } = useCartContext();
    const navigate = useNavigate();

    useEffect(() => {
        getOneProduct(Number(id));
    }, [id]);

    // AJOUT AU PANIER
    const { addProductToCart } = useCartContext(); 

    // AFFICHE PRODUCT
    // useEffect(() => {
    //     console.log(product)

    // }, [product])

    // Fonction pour gérer le clic sur l'élément de menu (DropDown)
    const handleMenuItemClick = (itemId: number) => {
        console.log(`Menu item ${itemId} clicked`);
    };

    // Fonction pour gérer le clic sur le sous-élément du menu (DropDown)
    const handleSubMenuItemClick = (itemId: number, subItemId: number) => {
        // if sous-élément du menu a été cliqué
        const currentCategoryOfExtra = product.extras.find((extra: any) => extra.id === itemId);
        const subCategory = currentCategoryOfExtra.subCategories.find((sub: any) => sub.id === subItemId);
        currentCategoryOfExtra.subCategories.forEach((sub: any) => {
            sub.isSelected = sub.id === subItemId ? true : false;
        })
        console.log("subCategory", subCategory, product);
        setProduct({...product})
    }


    // 🟨 ⬇️
    // Gérer si le bouton a été cliqué
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);

    // Fonctions du button 🟨 ⬇️
    const handleButtonClick = () => {
        // Màj du state qd bouton cliqué
        setSubmitButtonClicked(true);
        // `$`
        // (template literals) en JavaScript. Les littéraux de gabarit sont entourés de backticks (``) et permettent l'insertion de valeurs de variables dans une chaîne de caractères en utilisant la syntaxe ${variable}.
        console.log(`Button clicked is ${submitButtonClicked}`)
        // Button clicked is ${TRUE or FALSE}
        addProductToCart(product);
        navigate('/cart');
    };


    // Fonction pour gérer le clic sur les checkboxes
    const callbackEnAttendant = () => {
        console.log("Checkbox-callbackEnAttendant => OK");
    };


    //DROPDOWN//
    //*FIRST PART*//
    const menuHowManyPeople = 
        {
            id: 1,
            title: "Nombre de personnes",
            subCategories: [
                { id: 1, title: '5 personnes', label: "5 personnes" },
                { id: 2, title: '8 personnes', label: "8 personnes" },
                { id: 3, title: '15 personnes', label: "15 personnes" }
            ]
        }

    // COUNTER 🟩
    // +localStorage.getItem('quantity')||0 => L'objet a peut-être la valeur 'null'.ts(2531)
    const initialQuantity = localStorage.getItem('quantity');
    const [quantity, setQuantity] = useState(initialQuantity !== null ? +initialQuantity : 0);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    // 🟫 ⬇️ STOCKAGE en L.S.

    // COUNTER
    useEffect(() => {
        localStorage.setItem("quantity", quantity.toString())
    }, [quantity]);



    return (
        <section className={style.productCustomizerSection}>

            {/* 🔴 IF : Customize n'apparaît que if 'produit personnalisable */}
            {/*/////////////////////////// FIRST PART /////////////////////////////*/}

            <ReusableDropdown
                items={menuHowManyPeople}
                onMenuItemClick={handleMenuItemClick}
                onSubMenuItemClick={handleSubMenuItemClick}
            />


            {/* ********************************************** */}
            {/* CHECKBOXES NON REUSABLES)*/}
            <CheckboxName callback={callbackEnAttendant} />
            <CheckboxCandle callback={callbackEnAttendant} />

            {/* Affiche le message si le bouton a été cliqué et aucune case n'a été cochée */}

            {/* {submitButtonClicked && menuCustomizationOrNot[||0].subCategories[||0].title === "oui" && !customizationChecked && (  */}
            {/* {submitButtonClicked && menuCustomizationOrNot[0].subCategories[0].title === "oui" && !customizationChecked && (
                <p className={style.errorMessage}>Veuillez choisir "oui" ou "non" dans le menu "Personnaliser"</p>
            )} */}

            {/* 🔴 DISPLAY IF : personnnaliser = 'oui' */}
            {/*/////////////////////////// SECOND PART /////////////////////////////*/}

            <div className={style.ifCustomize}>
                {(product && product.extras) && product.extras.map((extra: any) => (
                    <ReusableDropdown key={extra.id}
                        items={extra}
                        onMenuItemClick={handleMenuItemClick}
                        onSubMenuItemClick={handleSubMenuItemClick}
                    />
                ))}

                <ReusableCheckbox label="Sans gluten" callback={callbackEnAttendant} />
                <ReusableCheckbox label="Sans lactose" callback={callbackEnAttendant} />
                <ReusableCheckbox label="Sans fruits à coque" callback={callbackEnAttendant} />
            </div>


            <div className={style.quantityContainer}>
                <span>QUANTITÉ</span>
                <div>
                    <span onClick={decrementQuantity}>-</span>
                    <span>{quantity}</span>
                    <span onClick={incrementQuantity}>+</span>
                </div>
                <span>à partir de </span>
                <span>55.00€</span>
            </div>


            <div className={style.customButtonWrapper}>
                <Button title={"AJOUTER AU PANIER"} callback={handleButtonClick} />
            </div>


            <div className={style.clockContainer}>
                <img src="/assets/images/oh-my-donut-images/ICONS/clock.png" alt="Icon you must order 48 hours before receiving it" />
                <span>48h</span>
            </div>


            <div className={style.allergensContainer}>
                <img className="GLUTEN" alt="Gluten" src="/assets/images/oh-my-donut-images/ALLERGENS/GLUTEN.png" />
                <span>GLUTEN</span>
                <img className="MILK" alt="Milk" src="/assets/images/oh-my-donut-images/ALLERGENS/MILK.png" />
                <span>LAIT</span>
                <img className="NUTS" alt="Nuts" src="/assets/images/oh-my-donut-images/ALLERGENS/NUT.png" />
                <span>FRUITS A COQUES</span>
            </div>

        </section>
    )
}

export default ProductCustomizer;