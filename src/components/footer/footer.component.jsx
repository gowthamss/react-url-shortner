import React from "react";
import "./footer.styles.css";
import FooterMenu from "./footer-menu/footer-menu.component";
import SocialIcons from "./social-icons/social-icons.component";
import { LogoAndCardHeading } from "../styled-components/styled.component";

const Footer = () => {
    return (
        <div className="footer">
            <LogoAndCardHeading logo className="footer-logo">
                Shortly
            </LogoAndCardHeading>
            <FooterMenu />
            <SocialIcons />
        </div>
    );
};

export default Footer;
