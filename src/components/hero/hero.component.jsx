import React from "react";
import "./hero.styles.css";
import { ActionButton } from "../styled-components/styled.component";
import { ReactComponent as HeroImageDesktop } from "../../assets/images/illustration-working-desktop.svg";
import { ReactComponent as HeroImageMobile } from "../../assets/images/illustration-working-mobile.svg";

const Hero = () => (
    <div className="hero">
        {/* <div className="hero-img-container">
            <img src="" alt="person working" className="hero-img" />
</div> */}
        <div className="bg-img-container">
            <div className="bg-img"></div>
        </div>
        <div className="hero-content">
            <h2 className="hero-heading">More than just shorter links</h2>
            <p className="hero-description">
                Build your brand's recognition and get detailed insights on how
                your links are performing.
            </p>
            <ActionButton pill className="hero-btn">
                Get Started
            </ActionButton>
        </div>
    </div>
);

export default Hero;
