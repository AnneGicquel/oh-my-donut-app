import { ProductCartI, ProductI } from "interfaces/donuts.interface";
import { createContext, useContext, useState } from "react";
import { getCart } from "services/cart.services";
import { uid } from "uid";

/* Interface article dans le Panier */
// interface ICartProduct {
//     id: string;
//     product: ProductI;
//     quantity: number
// }

/* Interface panier */
interface ICart {
    products: ProductCartI[] | undefined;
    getProductsFromCart: () => void;
    addProductToCart: (product: ProductI, quantity?: number) => void;
    removeOne: (product: ProductI) => void;
    removeProduct: (product: ProductI) => void;
    getTotalProduct: () => number;
    getTotalPrice: () => number;
    resetCart: () => void;
}

/* Initialisation d'un panier par défaut */
const defaultCart: ICart = {
    products: [],
    getProductsFromCart: () => { },
    addProductToCart: () => { },
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
    const [cartProducts, setCartProducts] = useState<ProductCartI[]>([]);


    const saveProduct = (table: ProductCartI) => {
        localStorage.setItem('table', JSON.stringify(table));
      }
    

    const createCart = () => {
        const newCart: [] = [];
        const stringifyBasket = JSON.stringify(newCart);
        localStorage.setItem('cart', stringifyBasket);
      }

    const getProductsFromCart = async () => {

        const cart = localStorage.getItem("cart");
        setCartProducts(() => [JSON.parse(cart!)])
        console.log('CART PRODUCT INSIDE GETPRODUCTSFROMCART =>', cartProducts)
        if(cart) {
          return JSON.parse(cart);
        } else {
          createCart();
          getCart();
        }
    }

    /* Function add product(s) to cart */
    const addProductToCart = (product: ProductI, quantity?: number) => {
        const newProduct = {
            id: uid(),
            product,
            quantity : 0,
            totalPrice: 0,
            tva: 19
        }
        /* check if product exist in the cart */
        const foundProduct = cartProducts?.find((p) => p.product.id === newProduct.product.id);
        console.log('FOUNDED PRODUCT => ',foundProduct);

        if (!foundProduct) {
            setCartProducts([...cartProducts, newProduct]);
            saveProduct(newProduct);
        } else {
            /* add quantity */
            // foundProduct.quantity += 1;
            foundProduct.product.quantity! += 1;
            setCartProducts([...cartProducts]);
            saveProduct(foundProduct);
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
        const totalProducts = cartProducts.reduce((accumulator: number, currentValue: ProductCartI) => {
            return accumulator += currentValue.quantity;
        }, 0);
        return totalProducts;
        return 0;

    }

    /* Function to get the total price of the cart */
    const getTotalPrice = () => {
        const totalPrice = cartProducts.reduce((accumulator: number, currentValue: ProductCartI) => {
            return accumulator += (currentValue.product.price * currentValue.quantity);
        }, 0);
        return totalPrice;
        return 0;

    }

    /* Function to reset the cart */
    const resetCart = () => {
        // setCartProducts();
    }

    const cart: ICart = {
        products: cartProducts,
        getProductsFromCart,
        addProductToCart,
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