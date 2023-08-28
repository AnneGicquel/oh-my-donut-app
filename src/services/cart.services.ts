import Axios, { AxiosResponse } from 'axios';
import { ProductCartI, ProductI } from '../interfaces/donuts.interface';

// we are using a proxy in package.json =>  "proxy": "http://localhost:3003",
// const url = "http://localhost:3003";


// GET ALL FROM CART
export const getCart = async ():  Promise<AxiosResponse<ProductCartI, any>> => {
    return await Axios.get("/cart");
}

// ADD A PRODUCT TO CART
export const addToCart = async ():  Promise<AxiosResponse<ProductI, any>> => {
    return await Axios.post("/cart");
}