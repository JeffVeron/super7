import React from "react";
import  "./menu.css";

function Menu() {
  var menuImage = require("./menu.png");
  return (
    <div className="menu">
      <img
        src={menuImage}
        className="menuImage"
        alt="menu Icon"
      />

    <p className="menu-text">Menu</p>
    </div>
  );
} 

export default Menu
