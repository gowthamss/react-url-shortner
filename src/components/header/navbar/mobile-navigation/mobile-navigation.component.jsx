import React from "react";
import {
    LinkButton,
    ActionButton,
} from "../../../styled-components/styled.component";
import "./mobile-navigation.styles.css";

const MobileNavigation = () => (
    <div className="mobile-navigation">
        <div className="mobile-nav-list">
            <LinkButton className="mobile-nav-link" header>
                Features
            </LinkButton>
            <LinkButton className="mobile-nav-link" header>
                Prices
            </LinkButton>
            <LinkButton className="mobile-nav-link" header>
                Resources
            </LinkButton>
        </div>
        <div className="divider"></div>
        <div className="mobile-nav-list">
            <LinkButton className="mobile-nav-link" header>
                Login
            </LinkButton>
            <ActionButton className="mobile-nav-link-btn" pill>
                sign up
            </ActionButton>
        </div>
    </div>
);

export default MobileNavigation;
