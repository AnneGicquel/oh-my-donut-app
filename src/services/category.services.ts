import Axios, { AxiosResponse } from 'axios';
import { CategoryI } from '../interfaces/donuts.interface';

// will be set into .env or an environment file.
const url = "http://localhost:3003";

export const getAllCategories = async ():  Promise<AxiosResponse<CategoryI[], any>> => {
    return await Axios.get( url + "/categories");
}