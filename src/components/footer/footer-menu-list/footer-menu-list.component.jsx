import React from "react";
import {
    LogoAndCardHeading,
    LinkButton,
} from "../../styled-components/styled.component";
import "./footer-menu-list.styles.css";

const FooterMenuList = (props) => {
    return (
        <div className="menu-list">
            <LogoAndCardHeading className="menu-header" footer>
                {props.heading}
            </LogoAndCardHeading>
            {props.menuItems.map((item, index) => (
                <LinkButton className="menu-link" key={index}>
                    {item}
                </LinkButton>
            ))}
        </div>
    );
};

export default FooterMenuList;
