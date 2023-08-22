import Axios, { AxiosResponse } from 'axios';
import { ProductI } from '../interfaces/donuts.interface';

// we are using a proxy in package.json =>  "proxy": "http://localhost:3003",
// const url = "http://localhost:3003";

export const getAllProducts = async ():  Promise<AxiosResponse<ProductI[], any>> => {
    return await Axios.get("/products");
}

export const getProductsByCategories = async (categoryId?: number, subCategory?: number): Promise<AxiosResponse<ProductI[], any>> => {
    if(categoryId && subCategory) {
        return await Axios.get(`/products?categoryId=${categoryId}&subCategory=${subCategory}`);
    } else if (categoryId) {
        return await Axios.get(`/products?categoryId=${categoryId}`);
    } else {
        return await Axios.get("/products");
    }
}

export const getProduct = async (id: number): Promise<AxiosResponse<ProductI, any>> => {

    return await Axios.get(`/products/${id}`); // productDetails

}