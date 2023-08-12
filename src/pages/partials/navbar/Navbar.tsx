import { FC, MouseEventHandler, useEffect, useState } from "react";
import { useCategoryContext } from "../../../contexts/CategoryContext";
import './Navbar.css'
import { useProductContext } from "contexts/ProductContext";

const Navbar: FC = () => {
  const { categories, getCategories } = useCategoryContext();
  const { products, getByCategories } = useProductContext();

  const [, setToggle] = useState(false);

  useEffect(() => {
    getCategories();
  }, []);

  const toggleMenu = (e: MouseEventHandler<HTMLElement>, category: any) => {
    const isToggle = category.isVisible = !category.isVisible;
    setToggle(isToggle);
  }

  return (
    <ul className="navbar-container">
      {categories.map(category =>
        <>
          <li onClick={((e: any) => { 
            toggleMenu(e, category)
            category.isDefault ?  getByCategories() : getByCategories(category.id)
            })} key={category.id}>{category.title.toUpperCase()}</li>
          <ul className={"subMenu " + (category.isVisible ? 'isVisible' : '')} >{category.subCategories?.map((sub, index) =>
            <li onClick={() => getByCategories(category.id, sub.id)} className="subMenu-child">{sub.title.toUpperCase()}</li>
          )}</ul>
        </>
      )}
    </ul>
  );
};
export default Navbar;
