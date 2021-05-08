import React from "react";
import './App.css';
import LoginPage from "./components/login/LoginPage";
import Home from "./components/homepage/Home";

function App() {
    return (
        <div className="App">
            {
                (localStorage.getItem("users") == undefined || localStorage.getItem("users") == null) ?
                    <LoginPage/>
                    :
                    <Home/>
            }
        </div>
    );
}

export default App;
