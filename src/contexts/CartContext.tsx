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
    getProductTotalPrice: (qty: number, price: number) => number;
    getTotalOfAllProducts: () => number
    resetCart: () => void;
    getRound: (val: number) => number;
    getProducstTva: () => string;
    getTotal: () => number;
}

const defaultCart: ICart = {
    products: [],
    getProductsFromCart: () => { },
    addProductToCart: () => { },
    changeQuantity: () => { },
    removeProductFromCart: () => { },
    getTotalProductQuantity: () => 0,
    getProductTotalPrice: () => 0,
    getTotalOfAllProducts: () => 0,
    resetCart: () => { },
    getRound: () => 0,
    getProducstTva: () => '0',
    getTotal: () => 0
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
        console.log('CART PRODUCT INSIDE GETPRODUCTSFROMCART =>', cartProducts)
        if (cart) {
            setCartProducts(() => JSON.parse(cart));
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
            tva: 10
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
        // getTotalProductQuantity();
        getProductsFromCart();
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
            } else {
                foundProduct.product.quantity = quantity
                saveProduct(cart);
            }
            getProductsFromCart();
        }
    }

    /* Function to get the total quantity of the cart */
    const getTotalProductQuantity = () => {
        const totalProducts = cartProducts.reduce((accumulator: number, currentValue: ProductCartI) => {
            return accumulator += currentValue.product.quantity!;
        }, 0);

        return totalProducts;
    }

    /* Function to get the total price of the cart */
    const getProductTotalPrice = (qty: number, price: number) => {
        console.log(qty, price)
        let result = qty * price;
            return getRound(result);
    }

    const getTotalOfAllProducts = () => {
        const totalPrice = cartProducts.reduce((accumulator: number, currentValue: ProductCartI) => {
            console.log(currentValue);
            return accumulator += (currentValue.product.price * currentValue.product.quantity!);
        }, 0);
        const result = getRound(totalPrice);

        return +result;
    }


    const getProducstTva = () => {
        const total = getTotalOfAllProducts();
        let result = (10 * total) / 100;
        return result.toFixed(2)
    }

    const getTotal = () => {
        const totalProducts = getTotalOfAllProducts();
        const totalTva = getProducstTva();
        const result = (totalProducts + Number(totalTva));
        return result;
    }

    const resetCart = () => {
        localStorage.clear();
        getProductsFromCart();
    }

    const getRound = (val: number) => {
        return +Number(val/100).toFixed(2)
      }
    

    const cart: ICart = {
        products: cartProducts,
        getProductsFromCart,
        addProductToCart,
        changeQuantity,
        removeProductFromCart,
        getTotalProductQuantity,
        getProductTotalPrice,
        getTotalOfAllProducts,
        resetCart,
        getRound,
        getProducstTva,
        getTotal,
    }

    return <CartContext.Provider value={cart}>
        {children}
    </CartContext.Provider>
}

export const useCartContext = () => useContext(CartContext);