import logo from './logo.svg';
import './App.css';
import MainComponent from "./components/MainComponent";

function App() {
    return (
        <div className="App">
            <header className="app-header">
                <img src={logo} width={"150px"} className="app-img-logo" alt="logo"/>
            </header>
            <MainComponent />
        </div>
    );
}

export default App;
