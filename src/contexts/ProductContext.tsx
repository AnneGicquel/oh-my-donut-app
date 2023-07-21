import { ProductI } from "../interfaces/donuts.interface";
import { useContext, useState, createContext } from "react";
import { getAllProducts } from "../services/product.services";

interface ProductDataI {
    products: ProductI[];
    getProducts: () => void;
}

const defaultProduct: ProductDataI = {
    products: [],
    getProducts: () => {}
}

const ProductContext = createContext<ProductDataI>(defaultProduct);

interface ProductProviderProps {
    children: JSX.Element
}

const ProductProvider = ({ children }: ProductProviderProps): JSX.Element => {
    
    const [products, setProducts] = useState<ProductI[]>([])
    
    const getProducts = async () => { 
        return await getAllProducts().then(product => setProducts([...product.data]))
    }

    const allProducts: ProductDataI = {
        products: [...products],
        getProducts,
    }
    
    return <ProductContext.Provider value={allProducts}>
        { children }
    </ProductContext.Provider>;
}

export const useProductContext = (): ProductDataI => useContext(ProductContext);

export default ProductProvider;