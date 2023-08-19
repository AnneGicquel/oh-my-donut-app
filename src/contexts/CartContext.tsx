import { ProductI } from "interfaces/donuts.interface";
import { createContext, useContext, useState } from "react";
import shortUUID from "short-uuid";
import short from 'short-uuid';


//interface des produits du panier
interface ICartProduct {
    id: string,
    product: ProductI; 
    quantity: number;
}

//interface panier, contient un tableau des produits du panier
interface ICart {
    products: ProductI[];
    addToCart:(newProduct: ProductI, newQuantity:number ) => void;
    removeProduct: (newProduct: ProductI) => void;
    removeOneQuantity: (newProduct: ProductI) => void;
    getTotalProduct: () => number;
    getTotalPrice: () => number;
    resetCart: () => void;

}

//panier par défaut: panier vide, tableau de produits vide
const defaultCart: ICart = {
    //création d'une instance où tout est réinitialisé à son point de départ par défault
    products: [],
    addToCart: () => {}, //on appelle la fonction vide
    removeProduct: () => {},
    removeOneQuantity: () => {},
    getTotalProduct: () => 0,
    getTotalPrice: () => 0,
    resetCart: () => {},
}

//création du contexte, de type <ICart>
const CartContext = createContext<ICart>(defaultCart)


//création du provider, qui wrappe le context pour qu'il soit utilisable dans tous les composants, on a aussi besoin d'un children
interface CartProviderProps {
    children: JSX.Element;
}

export const CartProvider = (props: CartProviderProps) => {
    const {children} = props; 

    //besoin d'un hook useState pour la mise à jour du panier. Agit sur l'ensemble des cartProducts du panier, et permet de faire fonctionner notre méthode addToCart 
    const [cartProducts, setCartProducts] = useState<ICartProduct[]>([]);


    //==> CREATION DES METHODES:

    // AJOUT AU PANIER:

    const addToCart = (newProduct: ProductI, newQuantity: number) => {

    const newCartProduct : ICartProduct = {
        id: shortUUID(),
        product: newProduct,
        quantity: newQuantity
    }

    // une fois méthode créée, mettre enplace le setteur "setCartProducts([ ... valeur du UseState])
    //création d'un nouveau tableau avec les cardProducts déjà existant, et on ajoute le nouveau cartProduct créé

    setCartProducts([...cartProducts, newCartProduct])
    console.log(cartProducts)

    //Condition: vérifier si le produit existe dans le panier:
    const existingProduct = cartProducts.find((p) => p.product === newProduct);

    if (!existingProduct) {
        setCartProducts([...cartProducts, newCartProduct]);
    } else {
        existingProduct.quantity += 1;
        setCartProducts([...cartProducts]);
    }
    console.log(cartProducts);

    }


    // RETIRER UN PRODUIT DU PANIER:

    const removeProduct = (newProduct: ProductI) => {
        const existingProduct = cartProducts.find((p) => p.product.id === newProduct.id);
        if (existingProduct) {
            const index = cartProducts.indexOf(existingProduct);
            cartProducts.splice(index, 1);
            setCartProducts([...cartProducts]);
        }
        return cartProducts;
    }


    // RETIRER UNE QUANTITE DU PANIER:

    const removeOneQuantity = (newProduct: ProductI) => {
        const existingProduct = cartProducts.find((p) => p.product.id === newProduct.id);

        console.log("existing", existingProduct);
        if (!existingProduct) {
            return;
        } else {
            if (existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
                setCartProducts([...cartProducts]);
            } else {
                removeProduct(newProduct);
                setCartProducts([...cartProducts]);
            }

        }
        const index = cartProducts.indexOf(existingProduct);
        console.log("index", index);
    }

    // OBTENIR LE TOTAL DE PRODUIT

    const getTotalProduct = () => {
        const totalProducts = cartProducts.reduce((accumulator: number, currentValue: ICartProduct) => {
            return accumulator += currentValue.quantity;
        }, 0);
        return totalProducts;

    }

    // OBTENIR LE PRIX TOTAL

    const getTotalPrice = () => {
        const totalPrice = cartProducts.reduce((accumulator: number, currentValue: ICartProduct) => {
            return accumulator += (currentValue.product.price * currentValue.quantity);
        }, 0);
        return totalPrice;

    }

    // REINITIALISATION DU PANIER:

    const resetCart = () => {
        setCartProducts([]);
    }

    // ==> CREATION DU COEUR DE NOTRE PANIER, doit être codé après la déclaration des méthodes, sinon problème de scope 
    const cart: ICart = {
        products: [],
        addToCart,
        removeOneQuantity,
        removeProduct,
        getTotalProduct,
        getTotalPrice,
        resetCart
    }

    return <CartContext.Provider value = {cart}> {children} </CartContext.Provider>

}

// méthode pour pouvoir exporter et utiliser les méthodes de notre context dans les autres composants:
export const useCartContext = () => {
    return useContext(CartContext);
}



//export du composant CartProvider
export default CartProvider