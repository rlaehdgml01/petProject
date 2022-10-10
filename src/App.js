import "./resource/reset.css";
import "./resource/main.css";
import './resource/responsive.css';
import Header from "./view/layout/Header";
import Nav from "./view/layout/Nav";
import Main from "./view/layout/Main";
import Footer from "./view/layout/Footer";



function App() {
    return (
        <div className="App">
            <Header />
            <Nav />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
