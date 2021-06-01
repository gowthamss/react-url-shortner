import React from "react";
import "./hero.styles.css";
import { ActionButton } from "../styled-components/styled.component";

const Hero = () => (
    <div className="hero">
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
