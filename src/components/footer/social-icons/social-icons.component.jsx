import React from "react";
import "./social-icons.styles.css";
import facebookLogo from "../../../assets/images/icon-facebook.svg";
import twitterLogo from "../../../assets/images/icon-twitter.svg";
import pinterestLogo from "../../../assets/images/icon-pinterest.svg";
import instagramLogo from "../../../assets/images/icon-instagram.svg";

const socialIcons = [facebookLogo, twitterLogo, pinterestLogo, instagramLogo];

const SocialIcons = () => {
    return (
        <div className="social-icon-div">
            {socialIcons.map((icon, index) => (
                <img
                    className="social-icon"
                    key={index}
                    src={icon}
                    alt="social icon"
                />
            ))}
        </div>
    );
};

export default SocialIcons;
