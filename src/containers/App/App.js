import React from "react";
import "./App.css";
import Main from "../../components/main/main.component";
import Footer from "../../components/footer/footer.component";

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App;
