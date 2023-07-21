import { useContext, createContext, useState } from "react";
import { CategoryI } from "../interfaces/donuts.interface";
import { getAllCategories } from "../services/category.services";


interface CategoryDataI {
    categories: CategoryI[];
    getCategories: () => void;
}

const defaultCategory: CategoryDataI = {
    categories: [],
    getCategories: () => {}
}


const CategoryContext = createContext<CategoryDataI>(defaultCategory);

interface CategoryProviderProps {
    children: JSX.Element;
}

const CategoryProvider = ({ children }: CategoryProviderProps): JSX.Element => {

    // const { children} = props;

    const [categories, setCategories] = useState<CategoryI[]>([]);

    const getCategories = async () => {
        return await getAllCategories()
        .then((category) => {
            setCategories([...category.data])
        });
    }


    const allCategories: CategoryDataI = {
        categories: [...categories],
        getCategories,
    }

    return <CategoryContext.Provider value={allCategories}>{children}</CategoryContext.Provider>
           
}

export const useCategoryContext = (): CategoryDataI => useContext(CategoryContext);

export default CategoryProvider;