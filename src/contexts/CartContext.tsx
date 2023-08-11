import { ProductI } from "interfaces/donuts.interface";
import { createContext, useContext, useState } from "react";

/* Interface article dans le Panier */
interface ICartProduct {
    id: string;
    product: ProductI
    quantity: number
}

/* Interface panier */
interface ICart {
    products: ICartProduct[];
    addOne: (product: ProductI, quantity: number) => void;
    removeOne: (product: ProductI) => void;
    removeProduct: (product: ProductI) => void;
    getTotalProduct: () => number;
    getTotalPrice: () => number;
    resetCart: () => void;
}

/* Initialisation d'un panier par défaut */
const defaultCart: ICart = {
    products: [],
    addOne: () => { },
    removeOne: () => { },
    removeProduct: () => { },
    getTotalProduct: () => 0,
    getTotalPrice: () => 0,
    resetCart: () => { },
}

/* Initialisation d'un contexte */
const CartContext = createContext<ICart>(defaultCart);


/* Provider */
interface CartProviderProps {
    children: JSX.Element;
}

export const CartProvider = (props: CartProviderProps) => {
    const { children } = props;
    const [cartProducts, setCartProducts] = useState<ICartProduct[]>([]);

    /* Function add product(s) to cart */
    const addOne = (product: ProductI, quantity: number) => {
        const newProduct = {
            id: "123",
            product,
            quantity
        }
        /* check if product exist in the cart */
        const foundProduct = cartProducts.find((p) => p.product === newProduct.product);

        if (!foundProduct) {
            setCartProducts([...cartProducts, newProduct]);
        } else {
            /* add quantity */
            foundProduct.quantity += 1;
            setCartProducts([...cartProducts]);
        }
        console.log(cartProducts);
    }

    /* Function to remove quantity from a product */
    const removeOne = (product: ProductI) => {
        const foundProduct = cartProducts.find((p) => p.product.id === product.id);

        console.log("found", foundProduct);
        if (!foundProduct) {
            return;
        } else {
            if (foundProduct.quantity > 1) {
                foundProduct.quantity -= 1;
                setCartProducts([...cartProducts]);
            } else {
                removeProduct(product);
                setCartProducts([...cartProducts]);
            }

        }
        const index = cartProducts.indexOf(foundProduct);
        console.log("index", index);
    }

    /*  Function to remove a product from the cart */
    const removeProduct = (product: ProductI) => {
        const foundProduct = cartProducts.find((p) => p.product.id === product.id);
        if (foundProduct) {
            const index = cartProducts.indexOf(foundProduct);
            cartProducts.splice(index, 1);
            setCartProducts([...cartProducts]);
        }
        return cartProducts;
    }

    /* Function to get the total quantity of the cart */
    const getTotalProduct = () => {
        const totalProducts = cartProducts.reduce((accumulator: number, currentValue: ICartProduct) => {
            return accumulator += currentValue.quantity;
        }, 0);
        return totalProducts;

    }

    /* Function to get the total price of the cart */
    const getTotalPrice = () => {
        const totalPrice = cartProducts.reduce((accumulator: number, currentValue: ICartProduct) => {
            return accumulator += (currentValue.product.price * currentValue.quantity);
        }, 0);
        return totalPrice;

    }

    /* Function to reset the cart */
    const resetCart = () => {
        setCartProducts([]);
    }

    const cart: ICart = {
        products: cartProducts,
        addOne,
        removeOne,
        removeProduct,
        getTotalProduct,
        getTotalPrice,
        resetCart
    }

    return <CartContext.Provider value={cart}>
        {children}
    </CartContext.Provider>
}

export const useCartContext = () => useContext(CartContext);