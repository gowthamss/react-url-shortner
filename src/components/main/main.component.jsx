import React from "react";
import GetStarted from "./get-started/get-started.component";
import Statastics from "./statastics/statastics.component";
import LinkInput from "./link-input/link-input.component";
import "./main.styles.css";

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <LinkInput />
                <Statastics />
                <GetStarted />
            </div>
        );
    }
}

export default Main;
