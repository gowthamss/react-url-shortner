import React from "react";
import "./App.css";
import Footer from "../../components/footer/footer.component";

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">
                <Footer />
            </div>
        );
    }
}

export default App;
