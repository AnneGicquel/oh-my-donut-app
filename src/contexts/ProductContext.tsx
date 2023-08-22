import { ProductI } from "../interfaces/donuts.interface";
import { useContext, useState, createContext } from "react";
import { getAllProducts, getProduct, getProductsByCategories } from "../services/product.services";

interface ProductDataI {
    products: ProductI[];
    product: ProductI | any, // productDetails
    getProducts: () => void;
    getByCategories: (categoryId?: number, subCategory?: number) => void;
    getOneProduct: (id:number) => void // productDetails
}

const defaultProduct: ProductDataI = {
    products: [],
    product: null, // productDetails
    getProducts: () => {},
    getByCategories: () => {},
    getOneProduct:(id:number) => {} // productDetails

}

const ProductContext = createContext<ProductDataI>(defaultProduct);

interface ProductProviderProps {
    children: JSX.Element
}

const ProductProvider = ({ children }: ProductProviderProps): JSX.Element => {
    
    const [products, setProducts] = useState<ProductI[]>([])
    const [product, setProduct] = useState<ProductI>() // productDetail
    
    const getProducts = async () => { 
        return await getAllProducts().then(product => setProducts([...product.data]))
    }

    const getByCategories = async (categoryId?: number, subCategory?: number) => {
        console.log(categoryId, subCategory);
        return await getProductsByCategories(categoryId, subCategory).then(pCategory => setProducts([...pCategory.data]));
    }

    const getOneProduct = async (id: number) => {
        return await getProduct(id).then(product => setProduct(product.data)); // productDetails
    }

    const allProducts: ProductDataI = {
        products: [...products],
        product: product, // productDetails
        getProducts,
        getByCategories,
        getOneProduct,// productDetails
    }
    
    return <ProductContext.Provider value={allProducts}>
        { children }
    </ProductContext.Provider>;
}

export const useProductContext = (): ProductDataI => useContext(ProductContext);

export default ProductProvider;