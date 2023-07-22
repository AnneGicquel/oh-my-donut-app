import { FC, MouseEventHandler, useEffect, useState } from "react";
import { useCategoryContext } from "../../../contexts/CategoryContext";
import './Navbar.css'

const Navbar: FC = () => {
  const { categories, getCategories } = useCategoryContext();

  const [, setToggle] = useState(false);

  useEffect(() => {
    getCategories();
  }, []);

  const toggleMenu = (e: MouseEventHandler<HTMLLIElement>, category: any) => {
    const isToggle = category.isVisible = !category.isVisible;
    setToggle(isToggle);
  }

  return (
    <ul className="navbar-container">
      {categories.map(category =>
        <>
          <li onClick={((e: any) => toggleMenu(e, category))} key={category.id}>{category.title.toUpperCase()}</li>
          <ul className={"subMenu " + (category.isVisible ? 'isVisible' : '')} style={{ padding: 0 }}>{category.subMenu?.map((sub, index) =>
            <li className="subMenu-child">{sub.title.toUpperCase()}</li>
          )}</ul>
        </>
      )}
    </ul>
  );
};
export default Navbar;
