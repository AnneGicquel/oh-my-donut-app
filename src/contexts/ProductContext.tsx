import { ProductI } from "../interfaces/donuts.interface";
import { useContext, useState, createContext } from "react";
import { getAllProducts, getProductsByCategories } from "../services/product.services";

interface ProductDataI {
    products: ProductI[];
    getProducts: () => void;
    getByCategories: (categoryId?: number, subCategory?: number) => void;
}

const defaultProduct: ProductDataI = {
    products: [],
    getProducts: () => {},
    getByCategories: () => {}
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

    const getByCategories = async (categoryId?: number, subCategory?: number) => {
        console.log(categoryId, subCategory);
        return await getProductsByCategories(categoryId, subCategory).then(pCategory => setProducts([...pCategory.data]));
    }

    const allProducts: ProductDataI = {
        products: [...products],
        getProducts,
        getByCategories,
    }
    
    return <ProductContext.Provider value={allProducts}>
        { children }
    </ProductContext.Provider>;
}

export const useProductContext = (): ProductDataI => useContext(ProductContext);

export default ProductProvider;