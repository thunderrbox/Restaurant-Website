import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <div className="main-container">
        <div className="card-container">
          {menuData.map((curElem) => {
            return (
              <div className="card" key={curElem.id}>
                <div className="card-topbar">
                  <div className="card-left">
                    <div className="card-circle">
                      <span className="card-number">{curElem.id}</span>
                    </div>
                    <span className="card-author">{curElem.category}</span>
                  </div>
                </div>

                <div className="card-content">
                  <span className="card-title">{curElem.name}</span>
                  <p className="card-description">{curElem.description}</p>
                </div>

                <div className="card-read-row">
                  <button className="card-read-link">Read</button>
                </div>

                <div className="card-img-wrap">
                  <img
                    src={curElem.image}
                    alt={curElem.name}
                    className="card-img"
                  />
                </div>

                <div className="card-footer">
                  <span className="subtle">₹{curElem.price}</span>
                  <button className="btn-order">
                    <span>Order Now</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>{" "}
      </div>
    </>
  );
};

export default MenuCard;
