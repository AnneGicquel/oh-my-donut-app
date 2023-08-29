import { useContext, createContext, useState } from "react";
import { CategoryI } from "../interfaces/donuts.interface";
import { getAllCategories } from "../services/category.services";


interface CategoryDataI {
    categories: CategoryI[];
    categoryImage: string;
    getCategories: () => void;
    getCategoryImage: (img: string) => void
}

const defaultCategory: CategoryDataI = {
    categories: [],
    categoryImage: '',
    getCategories: () => {},
    getCategoryImage: () => {}
}


const CategoryContext = createContext<CategoryDataI>(defaultCategory);

interface CategoryProviderProps {
    children: JSX.Element;
}

const CategoryProvider = ({ children }: CategoryProviderProps): JSX.Element => {

    // const { children} = props;

    const [categories, setCategories] = useState<CategoryI[]>([]);
    const [categoryImage, setCategoryImage] = useState<string>("/assets/images/oh-my-donut-images/CATEGORY/category-douceurs-hd.jpeg");

    const getCategories = async () => {
        return await getAllCategories()
        .then((category) => {
            setCategories([...category.data])
        });
    }

    const getCategoryImage = (img: string) => {
        setCategoryImage(img);
    }

    const allCategories: CategoryDataI = {
        categories: [...categories],
        getCategories,
        getCategoryImage,
        categoryImage: categoryImage!
    }

    return <CategoryContext.Provider value={allCategories}>{children}</CategoryContext.Provider>
           
}

export const useCategoryContext = (): CategoryDataI => useContext(CategoryContext);

export default CategoryProvider;