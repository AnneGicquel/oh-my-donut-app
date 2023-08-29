import { useContext, createContext, useState } from "react";
import { CategoryI } from "../interfaces/donuts.interface";
import { getAllCategories } from "../services/category.services";


interface CategoryDataI {
    categories: CategoryI[];
    categoryImage: string;
    categoryStyle: string;
    getCategories: () => void;
    getCategoryImageAndColor: (img: string, style: string) => void
}

const defaultCategory: CategoryDataI = {
    categories: [],
    categoryImage: '',
    categoryStyle: '',
    getCategories: () => {},
    getCategoryImageAndColor: () => {}
}


const CategoryContext = createContext<CategoryDataI>(defaultCategory);

interface CategoryProviderProps {
    children: JSX.Element;
}

const CategoryProvider = ({ children }: CategoryProviderProps): JSX.Element => {

    // const { children} = props;

    const [categories, setCategories] = useState<CategoryI[]>([]);
    const [categoryImage, setCategoryImage] = useState<string>("/assets/images/oh-my-donut-images/CATEGORY/category-douceurs-hd.jpeg");
    const [categoryStyle, setCategoryStyle] = useState<string>();
    const [categoryTitle, setCategoryTitle] = useState<string>();


    const getCategories = async () => {
        return await getAllCategories()
        .then((category) => {
            setCategories([...category.data])
        });
    }

    const getCategoryImageAndColor = (img: string, style: string) => {
        setCategoryImage(img);
        setCategoryStyle(style);
    }

    const allCategories: CategoryDataI = {
        categories: [...categories],
        getCategories,
        getCategoryImageAndColor,
        categoryImage: categoryImage!,
        categoryStyle: categoryStyle!
    }

    return <CategoryContext.Provider value={allCategories}>{children}</CategoryContext.Provider>
           
}

export const useCategoryContext = (): CategoryDataI => useContext(CategoryContext);

export default CategoryProvider;