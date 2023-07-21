import { EffectCallback, FC, useEffect } from "react";
import { useCategoryContext } from "../../../contexts/CategoryContext";

const Navbar: FC = () => {
  const { categories, getCategories } = useCategoryContext();

  useEffect( () => {
    getCategories();
  }, []);

  return (
    <ul>
      { categories.map(category => <li key={category.id}>{category.title}</li>)}
    </ul>
  );
};
export default Navbar;
