import React from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniquelist = [
  // Set automatically removes duplicates, so we get only unique category values
  // .map() extracts the category from each menu item to create an array of categories
  // The spread operator ... converts the Set back into an array so we can use it in our component
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    }),
  ),
  "All",
];
console.log(uniquelist);
const Restaurant = () => {
  // Holds the currently visible menu items — starts with all items
  const [menuData, setMenuData] = React.useState(Menu);

  const [menuList, setmenuList] = React.useState(uniquelist);

  // Tracks which button is active so we can highlight it with CSS
  const [activeCategory, setActiveCategory] = React.useState("All");

  // ─────────────────────────────────────────────────────────────
  // filteritem — filters the Menu array by category
  //
  // FIX 1: Original code passed "All" as category and tried
  //   to match it against Menu items — but no item has category
  //   "All", so it returned an empty array and cards disappeared.
  //   Fix: "All" is treated as a special case that resets to full Menu.
  //
  // FIX 2: Original used "Breakfast" (capital B) but Menu data
  //   has category: "breakfast" (lowercase). Case mismatch meant
  //   filter always returned empty array for every category.
  //   Fix: .toLowerCase() on both sides makes comparison case-insensitive.
  // ─────────────────────────────────────────────────────────────
  const filteritem = (category) => {
    // Mark the clicked button as active for CSS highlight
    setActiveCategory(category);

    if (category === "All") {
      // "All" button clicked — show every item from the original Menu
      setMenuData(Menu);
    } else {
      // Filter to only items whose category matches the clicked button
      // .toLowerCase() on both sides fixes the case-sensitivity bug
      const updatedList = Menu.filter(
        (curElem) => curElem.category.toLowerCase() === category.toLowerCase(),
      );
      setMenuData(updatedList);
    }
  };

  return (
    <>
      <Navbar
        filteritem={filteritem}
        activeCategory={activeCategory}
        menuList={menuList}
      />

      {/* menuData updates every time filteritem() runs */}
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
