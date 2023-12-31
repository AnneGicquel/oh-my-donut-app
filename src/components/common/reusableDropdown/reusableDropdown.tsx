/** IMPORT **/
import React, { useEffect, useRef, useState } from "react";

import style from "components/common/reusableDropdown/reusableDropdown.module.css";
import GroupedCheckboxes from "components/groupedCheckboxes/GroupedCheckboxes";


/** PROPS **/
interface DropdownItem {
  id: number;
  title: React.ReactNode;
  subCategories?: any;
}

interface ReusableDropdownProps {
  items: DropdownItem;
  onMenuItemClick: (itemId: number) => void;
  onSubMenuItemClick: (itemId: number, subItemId: number, nbrPerson?: any) => void;
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
      <div
        className={style["menu-item"]}
        onClick={() => {
          toggleSubMenu(items.id);
          onMenuItemClick(items.id);
        }}
      >
        <span className={style["menu-item-text"]}>{items.title}</span>
        <span className={style.chevron}>
          {openItems.includes(items.id) ? "⌃" : "⌄"}
        </span>
      </div>
      {items.subCategories && openItems.includes(items.id) && (
        <ul className={style.subMenu}>
          {items.subCategories.map((subItem: any) => (
            <li
              key={subItem.id}
              className={style["subMenu-child"]}
              onClick={() => {
                onSubMenuItemClick(items.id, subItem.id, subItem)
                console.log(items.id, subItem.id, subItem.isSelected)
              }}
            >
              <div>
                <GroupedCheckboxes
                  label={subItem.title}
                  price={subItem.prix}
                  callback={test}
                  isChecked={subItem.isSelected}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ReusableDropdown;



