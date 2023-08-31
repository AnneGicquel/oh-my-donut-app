import { FC, Fragment, MouseEventHandler, useEffect, useRef, useState } from "react";
import { useCategoryContext } from "../../../contexts/CategoryContext";
import './Navbar.css'
import { useProductContext } from "contexts/ProductContext";
import { useMobileContext } from "contexts/MobileContext";

const Navbar: FC = () => {
  const { categories, getCategories, getCategoryImageAndColor } = useCategoryContext();
  const { getByCategories, getCategoryTitle } = useProductContext();
  const { toggleMobileMenu } = useMobileContext();

  const [, setToggle] = useState(false);
  const menuRef = useRef<HTMLUListElement | any>();

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (!toggleMobileMenu) {
      menuRef.current.classList.add('isDisplayed')
    } else {
      menuRef.current.classList.remove('isDisplayed')
    }
  }, [toggleMobileMenu])

  const toggleMenu = (e: MouseEventHandler<HTMLElement>, category: any) => {
    const isToggle = category.isVisible = !category.isVisible;
    setToggle(isToggle);
  }

  const img = "<img style='width: 25px; padding-left: 25px' src='/assets/images/oh-my-donut-images/ICONS/clock.png' /> <span style='font-family: Varela Round; font-size: 22px'>48h</span>";

  return (
    <ul className="navbar-container" ref={menuRef}>
      {categories.map(category =>
        <Fragment key={category.id}>
          <li onClick={((e: any) => {
            toggleMenu(e, category)
            getCategoryTitle(category.title);
            getCategoryImageAndColor(category.imageUrl, category.categoryStyle);
            category.isDefault ? getByCategories() : getByCategories(category.id)
          })}>{category.title !== 'Tower' ? category.title.toUpperCase() : <div dangerouslySetInnerHTML={ { __html: category.title.toLocaleUpperCase() +  img} }></div>}</li>
          <ul className={"subMenu " + (category.isVisible ? 'isVisible' : '')} >{category.subCategories?.map((sub, index) =>
            <li onClick={() => { 
              getByCategories(category.id, sub.id);
              getCategoryTitle(sub.title);
              getCategoryImageAndColor(category.imageUrl, category.categoryStyle); 
            }} className="subMenu-child" key={sub.id}>{sub.title.toUpperCase()}</li>
          )}</ul>
        </ Fragment>
      )}
    </ul>
  );
};
export default Navbar;
