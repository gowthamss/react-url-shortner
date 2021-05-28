import React from "react";
import "./header.styles.css";
import Navbar from "./navbar/navbar.component";
import MobileNavigation from "./navbar/mobile-navigation/mobile-navigation.component";

class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };
    }

    toggleShowMenu = () => {
        this.setState(() => ({ showMenu: !this.state.showMenu }));
    };

    render() {
        return (
            <div className="header">
                <Navbar toggleShowMenu={this.toggleShowMenu} />
                {this.state.showMenu ? <MobileNavigation /> : null}
            </div>
        );
    }
}

export default Header;
