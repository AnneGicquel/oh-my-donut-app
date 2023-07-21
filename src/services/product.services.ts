import Axios, { AxiosResponse } from 'axios';
import { CategoryI, ProductI } from '../interfaces/donuts.interface';

// will be set into .env or an environment file.
const url = "http://localhost:3003";

export const getAllProducts = async ():  Promise<AxiosResponse<ProductI[], any>> => {
    return await Axios.get( url + "/products");
}