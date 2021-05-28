import React from "react";
import "./hamburger-menu.styles.css";

const HamburgerMenu = ({ toggleShowMenu }) => (
    <div className="hamburger-menu" onClick={toggleShowMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
    </div>
);

export default HamburgerMenu;
