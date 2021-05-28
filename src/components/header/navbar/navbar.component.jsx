import React from "react";
import {
    LogoAndCardHeading,
    LinkButton,
    ActionButton,
} from "../../styled-components/styled.component";
import HamburgerMenu from "./hamburger-menu/hamburger-menu.component";
import "./navbar.styles.css";

const Navbar = ({ toggleShowMenu }) => (
    <div className="nav">
        <div className="navbar">
            <LogoAndCardHeading logo header className="logo">
                Shortly
            </LogoAndCardHeading>
            {/* Mobile Navigation */}
            <div className="mobile-nav-container">
                <HamburgerMenu toggleShowMenu={toggleShowMenu} />
            </div>
            <div className="desktop-nav-container">
                <div className="nav-list">
                    <LinkButton className="nav-link" header>
                        Features
                    </LinkButton>
                    <LinkButton className="nav-link" header>
                        Prices
                    </LinkButton>
                    <LinkButton className="nav-link" header>
                        Resources
                    </LinkButton>
                </div>
                <div className="nav-list">
                    <LinkButton className="nav-link" header>
                        Login
                    </LinkButton>
                    <ActionButton className="nav-link-btn" pill>
                        sign up
                    </ActionButton>
                </div>
            </div>
        </div>
    </div>
);

export default Navbar;
