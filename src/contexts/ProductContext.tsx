import { ProductI } from "../interfaces/donuts.interface";
import { useContext, useState, createContext } from "react";
import { getAllProducts, getProduct, getProductsByCategories } from "../services/product.services";

interface ProductDataI {
    products: ProductI[];
    product: ProductI | any, // productDetails
    categoryTitle: string,
    getProducts: () => void;
    getByCategories: (categoryId?: number, subCategory?: number) => void;
    getOneProduct: (id:number) => void // productDetails
    getCategoryTitle: (categoryTitle: string) => void;
    setProduct: (product: ProductI) => void;
    // getOneProductTotal: () => void;
}

const defaultProduct: ProductDataI = {
    products: [],
    product: null, // productDetails
    categoryTitle: '',
    getProducts: () => {},
    getByCategories: () => {},
    getOneProduct:(id:number) => {}, // productDetails
    getCategoryTitle: () => {},
    setProduct: (product: {}) => {}, 
    // getOneProductTotal: () => {}
    // ⬆️
}

const ProductContext = createContext<ProductDataI>(defaultProduct);

interface ProductProviderProps {
    children: JSX.Element
}

const ProductProvider = ({ children }: ProductProviderProps): JSX.Element => {
    
    const [products, setProducts] = useState<ProductI[]>([])
    const [product, setProduct] = useState<ProductI>() // productDetail
    const [categoryTitle, setCategoryTitle] = useState<string>();
    
    const getProducts = async () => { 
        return await getAllProducts().then(product => setProducts([...product.data]))
    }

    const getByCategories = async (categoryId?: number, subCategory?: number) => {
        // console.log(categoryId, subCategory);
        return await getProductsByCategories(categoryId, subCategory).then(pCategory => setProducts([...pCategory.data]));
    }

    const getOneProduct = async (id: number) => {
        return await getProduct(id).then(product => setProduct(product.data)); // productDetails
    } 
    // ⬆️

    const getCategoryTitle = (categoryTitle: string) => {
        setCategoryTitle(categoryTitle);
        // ⬆️
    }

    const allProducts: ProductDataI = {
        products: [...products],
        product: product,// productDetails
        categoryTitle: categoryTitle!, 
        getProducts,
        getByCategories,
        getOneProduct,// productDetails
        getCategoryTitle,
        setProduct,
        // getOneProductTotal
        // ⬆️
    }
    
    return <ProductContext.Provider value={allProducts}>
        { children }
    </ProductContext.Provider>;
}

export const useProductContext = (): ProductDataI => useContext(ProductContext);

export default ProductProvider;