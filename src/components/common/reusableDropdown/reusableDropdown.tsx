/** IMPORT **/
import React, { useEffect, useRef, useState } from "react";

import style from "components/common/reusableDropdown/reusableDropdown.module.css";
import GroupedCheckboxes from "components/groupedCheckboxes/GroupedCheckboxes";


/** PROPS **/
interface DropdownItem {
  id: number;
  title: React.ReactNode;
  subCategories?: DropdownItem[];
}

interface ReusableDropdownProps {
  items: DropdownItem[];
  onMenuItemClick: (itemId: number) => void;
  onSubMenuItemClick: (itemId: number, subItemId: number) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Ajout de la nouvelle prop !!!!!!!!
}

/** COMPONENT **/
const ReusableDropdown = ({
  items,
  onMenuItemClick,
  onSubMenuItemClick,
}: ReusableDropdownProps) => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const test = () => {
    console.log("TESTTT");
    // Logique pour gérer le clic sur les checkboxes
  };

  const toggleSubMenu = (itemId: number) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(itemId)
        ? prevOpenItems.filter((id) => id !== itemId)
        : [...prevOpenItems, itemId]
    );
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setOpenItems([]);
    }
  };


  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={style.dropdown} ref={dropdownRef}>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <div
              className={style["menu-item"]}
              onClick={() => {
                toggleSubMenu(item.id);
                onMenuItemClick(item.id);
              }}
            >
              <span className={style["menu-item-text"]}>{item.title}</span>
              <span className={style.chevron}>
                {openItems.includes(item.id) ? "⌃" : "⌄"}
              </span>
            </div>
            {item.subCategories && openItems.includes(item.id) && (
              <ul className={style.subMenu}>
                {item.subCategories.map((subItem) => (
                  <li
                    key={subItem.id}
                    className={style["subMenu-child"]}
                    onClick={() => onSubMenuItemClick(item.id, subItem.id)}
                  >
                    <div>
                      <GroupedCheckboxes
                        label={subItem.title} 
                        callback={test}
                         /> 
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReusableDropdown;



