import React from "react";
import LinkInput from "./link-input/link-input.component";
import GetStarted from "./get-started/get-started.component";
import Statastics from "./statastics/statastics.component";

class Main extends React.Component {
    render() {
        return (
            <div>
                <LinkInput />
                <Statastics />
                <GetStarted />
            </div>
        );
    }
}

export default Main;
