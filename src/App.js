import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import PersonalLink from "./components/PersonalLink/PersonalLink";
import DashboardText from "./components/DashboardText/DashboardText";
import Profile from "./components/Profile/Profile";
import NumberCards from "./components/NumberCards/NumberCards";

const App = () => {
    return (
        <div className="App">
            <Header />
            <PersonalLink />
            <DashboardText />
            <Profile />
            <NumberCards />
        </div>
    );
};

export default App;
