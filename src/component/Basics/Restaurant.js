import React from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";

const Restaurant = () => {
  // Holds the currently visible menu items — starts with all items
  const [menuData, setMenuData] = React.useState(Menu);

  // Tracks which button is active so we can highlight it with CSS
  const [activeCategory, setActiveCategory] = React.useState("all");

  // ─────────────────────────────────────────────────────────────
  // filteritem — filters the Menu array by category
  //
  // BUG FIX 1: Original code passed "All" as category and tried
  //   to match it against Menu items — but no item has category
  //   "All", so it returned an empty array and cards disappeared.
  //   Fix: "all" is treated as a special case that resets to full Menu.
  //
  // BUG FIX 2: Original used "Breakfast" (capital B) but Menu data
  //   has category: "breakfast" (lowercase). Case mismatch meant
  //   filter always returned empty array for every category.
  //   Fix: .toLowerCase() on both sides makes comparison case-insensitive.
  // ─────────────────────────────────────────────────────────────
  const filteritem = (category) => {
    // Mark the clicked button as active for CSS highlight
    setActiveCategory(category);

    if (category === "all") {
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
      <nav className="navbar">
        <div className="btn-group">
          {/* "all" matches the special case in filteritem that resets full list */}
          <button
            className={`btn-group__item ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => filteritem("all")}
          >
            All
          </button>

          {/* Category strings are lowercase to match Menu data values */}
          <button
            className={`btn-group__item ${activeCategory === "breakfast" ? "active" : ""}`}
            onClick={() => filteritem("breakfast")}
          >
            Breakfast
          </button>

          <button
            className={`btn-group__item ${activeCategory === "lunch" ? "active" : ""}`}
            onClick={() => filteritem("lunch")}
          >
            Lunch
          </button>

          <button
            className={`btn-group__item ${activeCategory === "evening" ? "active" : ""}`}
            onClick={() => filteritem("evening")}
          >
            Evening
          </button>

          <button
            className={`btn-group__item ${activeCategory === "dinner" ? "active" : ""}`}
            onClick={() => filteritem("dinner")}
          >
            Dinner
          </button>
        </div>
      </nav>

      {/* menuData updates every time filteritem() runs */}
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
