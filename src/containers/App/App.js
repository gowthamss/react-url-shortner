import React from "react";
import "./App.css";
import Main from "../../components/main/main.component";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import Hero from "../../components/hero/hero.component";
import LinkInput from "../../components/link-input/link-input.component";

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Hero />
                <LinkInput />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App;
