import { FC, useEffect } from "react";
import { useCategoryContext } from "../../../contexts/CategoryContext";
import './Navbar.css'

const Navbar: FC = () => {
  const { categories, getCategories } = useCategoryContext();

  useEffect( () => {
    getCategories();
  }, []);

  return (
    <ul className="navbar-container">
      { categories.map(category => <li key={category.id}>{category.title.toUpperCase()}</li>)}
    </ul>
  );
};
export default Navbar;
