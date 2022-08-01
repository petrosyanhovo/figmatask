import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import PersonalLink from "./components/PersonalLink/PersonalLink";
import DashboardText from "./components/DashboardText/DashboardText";
import Profile from "./components/Profile/Profile";

const App = () => {
    return (
        <div className="App">
            <Header />
            <PersonalLink />
            <DashboardText />
            <Profile/>
        </div>
    );
};

export default App;
