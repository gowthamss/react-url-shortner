import React from "react";
import "./App.css";
import Main from "../../components/main/main.component";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import Hero from "../../components/hero/hero.component";

// class App extends React.Component {
//     constructor() {
//         super();
//     }

//     render() {
//         return (

//         );
//     }
// }

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
