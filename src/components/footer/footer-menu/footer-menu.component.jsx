import React from "react";
import FooterMenuList from "../footer-menu-list/footer-menu-list.component";
import "./footer-menu.styles.css";

const footerMenuList = {
    Features: ["link shortening", "branded links", "analytics"],
    Resources: ["blog", "developers", "support"],
    Company: ["about", "our team", "careers", "contact"],
};

const FooterMenu = () => {
    return (
        <section className="footer-menu">
            {Object.entries(footerMenuList).map(
                ([heading, itemsList], index) => (
                    <FooterMenuList
                        key={index}
                        heading={heading}
                        menuItems={itemsList}
                    />
                )
            )}
        </section>
    );
};

export default FooterMenu;
