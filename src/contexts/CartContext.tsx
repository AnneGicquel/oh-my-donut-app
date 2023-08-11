import { ProductI } from "interfaces/donuts.interface";
import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";


//interface des produits du panier
interface ICartProduct {
    id: string,
    product: ProductI; 
    quantity: number;
}

//interface panier, contient un tableau des produits du panier
interface ICart {
    products: ProductI[];
    addToCart:(newProduct: ProductI, newQuantity:number ) => void
}

//panier par défaut: panier vide, tableau de produits vide
const defaultCart: ICart = {
    //création d'une instance où tout est réinitialisé à son point de départ par défault
    products: [],
    addToCart: () => {} //on appelle la fonction vide
}

//création du contexte, de type <CartI>
const CartContext = createContext<ICart>(defaultCart)


//création du provider, qui wrappe le context pour qu'il soit utilisable dans tous les composants, on a aussi besoin d'un children
interface CartProviderProps {
    children: JSX.Element;
}

export const CartProvider = (props: CartProviderProps) => {
    const {children} = props;


    //--> création des méthodes 

    //besoin d'un hook useState pour la mise à jour du panier. Agit sur l'ensemble des cartProducts du panier, et permet de faire fonctionner notre méthode addToCart 
    const [cartProducts, setCartProducts] = useState<ICartProduct[]>([]);

    const addToCart = (newProduct: ProductI, newQuantity: number) => {

    const newCartProduct : ICartProduct = {
        id: uuidv4(),
        product: newProduct,
        quantity: newQuantity
    };

    // une fois méthode créée, mettre enplace le setteur "setCartProducts([ ... valeur du UseState])
    //création d'un nouveau tableau avec les cardProducts déjà existant, et on ajoute le nouveau cartProduct créé

    setCartProducts([...cartProducts, newCartProduct])
    console.log(cartProducts)

    }

    // création du coeur de notre panier, doit être codé après la déclaration de notre méthode, sinon problème de scope 
    const cart: ICart = {
        products: [],
        addToCart
    }



    return <CartContext.Provider value = {cart}> {children} </CartContext.Provider>

}

// méthode pour pouvoir exporter et utiliser les méthodes de notre contecxt dans les autres composants:
export const useCartContext = () => {
    return useContext(CartContext);
}



//export du composant CartProvider
export default CartProvider