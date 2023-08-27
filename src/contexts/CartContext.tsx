import { ProductCartI, ProductI } from "interfaces/donuts.interface";
import { createContext, useContext, useState } from "react";
import { getCart } from "services/cart.services";
import { uid } from "uid";

interface ICart {
    products: ProductCartI[];
    getProductsFromCart: () => void;
    addProductToCart: (product: ProductI) => void;
    changeQuantity: (quantity: number, product: ProductI) => void;
    removeProductFromCart: (product: ProductI) => void;
    getTotalProductQuantity: () => number;
    getTotalPrice: () => number;
    resetCart: () => void;
}

const defaultCart: ICart = {
    products: [],
    getProductsFromCart: () => { },
    addProductToCart: () => { },
    changeQuantity: () => { },
    removeProductFromCart: () => { },
    getTotalProductQuantity: () => 0,
    getTotalPrice: () => 0,
    resetCart: () => { },
}

const CartContext = createContext<ICart>(defaultCart);


interface CartProviderProps {
    children: JSX.Element;
}

export const CartProvider = (props: CartProviderProps) => {
    const { children } = props;
    const [cartProducts, setCartProducts] = useState<ProductCartI[]>([]);


    const saveProduct = (cart: ProductCartI) => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }


    const createCart = () => {
        const newCart: [] = [];
        const stringifyBasket = JSON.stringify(newCart);
        localStorage.setItem('cart', stringifyBasket);
    }

    const getProductsFromCart = () => {

        const cart = localStorage.getItem("cart");
        setCartProducts(() => JSON.parse(cart!))
        console.log('CART PRODUCT INSIDE GETPRODUCTSFROMCART =>', cartProducts)
        if (cart) {
            return JSON.parse(cart);
        } else {
            createCart();
            getCart();
        }
    }

    const addProductToCart = (product: ProductI) => {
        const cart = getProductsFromCart();

        console.log("CARRRRT", cart);

        const newProduct = {
            id: uid(),
            product,
            quantity: 0,
            totalPrice: 0,
            tva: 19
        }

        const foundProduct = cart?.find((p: ProductCartI) => p.product.id === newProduct.product.id)!;
        console.log('FOUNDED PRODUCT => ', foundProduct);

        if (!foundProduct) {
            setCartProducts([...cartProducts, newProduct]);
            cart.push(newProduct);
        } else {
            foundProduct.product.quantity! += 1;
            setCartProducts([...cartProducts]);
        }
        saveProduct(cart);
        console.log(cartProducts);
    }


    const removeProductFromCart = (product: ProductI) => {
        const cart = getProductsFromCart();

        const foundProduct = cart.find((item: ProductCartI) => item.product.id === product.id);

        if (foundProduct) {
            const index = cart.indexOf(foundProduct);
            console.log('INDEXOF => ', index);
            cart.splice(index, 1);
            saveProduct(cart);
            getProductsFromCart()
        }

    }

    /* Function to Change quantity from a product */
    const changeQuantity = (quantity: number, product: ProductI) => {
        const cart = getProductsFromCart();
        let foundProduct = cart.find((item: ProductCartI) => item.product.id === product.id);
        if (!foundProduct) {
            return;
        } else {
            if (quantity <= 0) {
                const index = cart.indexOf(foundProduct);
                cart.splice(index, 1);
                saveProduct(cart);
                getProductsFromCart()
            } else {
                foundProduct.product.quantity = quantity
                saveProduct(cart);
                getProductsFromCart();
            }
        }
    }

    /* Function to get the total quantity of the cart */
    const getTotalProductQuantity = () => {
        const cart = getProductsFromCart();

        const totalProducts = cart.reduce((accumulator: number, currentValue: ProductCartI) => {
            console.log(currentValue.product.quantity)
            return accumulator += currentValue.product.quantity!;
        }, 0);
        console.log(totalProducts)
        return totalProducts;

    }

    /* Function to get the total price of the cart */
    const getTotalPrice = () => {
        const totalPrice = cartProducts.reduce((accumulator: number, currentValue: ProductCartI) => {
            return accumulator += (currentValue.product.price * currentValue.quantity);
        }, 0);
        return totalPrice;

    }

    /* Function to reset the cart */
    const resetCart = () => {
        localStorage.clear();
        getProductsFromCart();
    }

    const cart: ICart = {
        products: cartProducts,
        getProductsFromCart,
        addProductToCart,
        changeQuantity,
        removeProductFromCart,
        getTotalProductQuantity,
        getTotalPrice,
        resetCart
    }

    return <CartContext.Provider value={cart}>
        {children}
    </CartContext.Provider>
}

export const useCartContext = () => useContext(CartContext);