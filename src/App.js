import "./resource/reset.css";
import "./resource/main.css";
import './resource/responsive.css';
import Header from "./view/layout/Header";
import Nav from "./view/layout/Nav";
import Main from "./view/layout/Main";
import Footer from "./view/layout/Footer";
import Sidebar from "./view/layout/Sidebar";



function App() {
    return (
        <div className="App">
            <Header />
            <Nav />
            <Main />
            <Sidebar />
            <Footer />
        </div>
    );
}

export default App;
