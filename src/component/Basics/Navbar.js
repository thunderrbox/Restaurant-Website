import React from "react";

const Navbar = ({ filteritem, activeCategory, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {/* "all" matches the special case in filteritem that resets full list */}
          {menuList.map((curElem) => {
            return (
              <button
                className={`btn-group__item ${activeCategory === curElem ? "active" : ""}`}
                onClick={() => filteritem(curElem)}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
