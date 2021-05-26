import React from "react";
import GetStarted from "./get-started/get-started.component";
import Statastics from "./statastics/statastics.component";

class Main extends React.Component {
    render() {
        return (
            <div>
                <Statastics />
                <GetStarted />
            </div>
        );
    }
}

export default Main;
