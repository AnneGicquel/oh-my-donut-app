import Axios, { AxiosResponse } from 'axios';
import { CategoryI } from '../interfaces/donuts.interface';

// we are using a proxy in package.json =>  "proxy": "http://localhost:3003",
// const url = "http://localhost:3003";

export const getAllCategories = async ():  Promise<AxiosResponse<CategoryI[], any>> => {
    return await Axios.get("/categories");
}