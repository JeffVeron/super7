import React from "react";
import Logo from "../banner/Logo";
import Menu from "../banner/Menu";
import "./banner.css";

function Banner() {
  return (
    <div className="banner">
      <Logo />

      <h3 className="superText">
        Super <span className="seven">7</span>
      </h3>

      <Menu className="menu" />
    </div>
  );
}

export default Banner;
