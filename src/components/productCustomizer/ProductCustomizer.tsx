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
    const { getRound } = useCartContext()
    const { id } = useParams(); //fetch data
    const navigate = useNavigate();

    const [moreExtras, setMoreExtras] = useState<any>({
        nbrPersonnes: { nbr: 0, price: 0 },
        plaque: false,
        name: { title: '', price: 0 },
        candle: { isSelected: false, price: 0 },
        allergen: { gluten: false, lactose: false, fruits: false }
    });


    useEffect(() => {
        getOneProduct(Number(id));
    }, []);

    // AJOUT AU PANIER
    const { addProductToCart } = useCartContext(); 

    // AFFICHE PRODUCT
    // useEffect(() => {
    //     console.log(product)

    // }, [product])

    // Fonction pour gérer le clic sur l'élément de menu (DropDown)
    const handleMenuItemClick = (itemId: number) => {
        // console.log(`Menu item ${itemId} clicked`);
    };

    // Fonction pour gérer le clic sur le sous-élément du menu (DropDown)
    const handleSubMenuItemClick = (itemId: number, subItemId: number, nbrPerson: any) => {
        // if sous-élément du menu a été cliqué
        const currentCategoryOfExtra = product?.extras?.find((extra: any) => extra.id === itemId);
        const subCategory = currentCategoryOfExtra.subCategories.find((sub: any) => sub.id === subItemId);
        currentCategoryOfExtra.subCategories.forEach((sub: any) => {
            sub.isSelected = sub.id === subItemId ? true : false;
        });

        // console.log('SUBMENU =>', nbrPerson);
        setMoreExtras({
            ...moreExtras,
            nbrPersonnes : { nbr: nbrPerson.nbrPerson, price: nbrPerson.prix },
        });
        setProduct({...product})
        getOneProductTotal2()
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
        product['customExtras'] = moreExtras;
        setProduct({...product, moreExtras});
        addProductToCart(product);
        navigate('/cart');
    };


    // Fonction pour gérer le clic sur les checkboxes
    const callbackEnAttendantName = (e: any, checked?: any) => {
        const { value } = e.target
        // console.log('CHECKED => ', checked);
        setMoreExtras(() => ({ 
            ...moreExtras,
            plaque: !e.target.checked,
            name: !checked ? { title: value, price: 300 } : { title: value, price: 0 },
        }))

    };

    const callbackEnAttendantCandle = (e: any, isChecked: any) => {
        setMoreExtras(() =>({
            ...moreExtras,
            candle: !isChecked ? { isSelected: e.target.checked, price: 100 } : { isSelected: e.target.checked, price: 0 },
        }))
    };

    const callbackEnAttendantAllegen = (e: any) => {
        const value = e.target.alt
        setMoreExtras(() =>({
            ...moreExtras,
            allergen: { 
                ...moreExtras.allergen,
                [value]: e.target.checked
            }
        }));
    };

    const [total, setTotal] = useState<number>(0);

    const getOneProductTotal2 = () => {
        let nbPersonnePrice =  moreExtras.nbrPersonnes?.price || 0;
        let namePrice = moreExtras.name?.price || 0;
        let candlePrice = moreExtras.candle?.price || 0;
        let quantity = product?.quantity || 0;
        let productPrice = product?.price || 0;
        const extrasResult = nbPersonnePrice + namePrice + candlePrice;
        const pResult = quantity * ( productPrice + extrasResult ); 

        setTotal(Number(pResult));
    }


    //DROPDOWN//
    //*FIRST PART*//
    const menuHowManyPeople = 
        {
            id: 1,
            title: "Nombre de personnes",
            subCategories: [
                { id: 1, title: '5 personnes', label: "5 personnes", nbrPerson: 5, prix: 500 },
                { id: 2, title: '8 personnes', label: "8 personnes", nbrPerson: 8, prix: 800 },
                { id: 3, title: '15 personnes', label: "15 personnes", nbrPerson: 15, prix: 1500 }
            ]
        }

    // COUNTER 🟩
    // +localStorage.getItem('quantity')||0 => L'objet a peut-être la valeur 'null'.ts(2531)

    const incrementQuantity = () => {
        product.quantity += 1;
        setProduct({...product});
        // console.log('PRPRORPRORP => ', product);
    };

    const decrementQuantity = () => {
        if (product.quantity <= 0) {
            return;
        }
        product.quantity -= 1;
        setProduct({...product});
    };

    // 🟫 ⬇️ STOCKAGE en L.S.

    // COUNTER
    useEffect(() => {
        getOneProductTotal2();
        // console.log('là', product);
    }, [product, total, moreExtras]);



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
            <CheckboxName callback={callbackEnAttendantName} />
            <CheckboxCandle callback={callbackEnAttendantCandle} />

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

                <ReusableCheckbox label="Sans gluten" callback={callbackEnAttendantAllegen} />
                <ReusableCheckbox label="Sans lactose" callback={callbackEnAttendantAllegen} />
                <ReusableCheckbox label="Sans fruits à coque" callback={callbackEnAttendantAllegen} />
            </div>


            <div className={style.quantityContainer}>
                <span>QUANTITÉ</span>
                <div className={style.customize_quantity}>
                    <span onClick={decrementQuantity}>-</span>
                    <span className={style.counter}>{ product?.quantity }</span>
                    <span onClick={incrementQuantity}>+</span>
                </div>
                <span>à partir de </span>
                <span>{ total === 0 ? getRound(product?.price) : getRound(total) } €</span>
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