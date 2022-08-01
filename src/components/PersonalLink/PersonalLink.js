import React from "react";
import "./personalLink.css";

const PersonalLink = () => {
    return <div className="personal-link">
        <h2>My personal link:</h2>
        <div className="info">
            <div className="id">
                <div className="line"></div>
                <div className="id-link">BSG.IO/Id1245</div>
            </div>
            <div className="buttons">
                <button className="copyBtn btn">
                    <img src={require('../../svg/copy.svg').default} alt="" />
                    <span>Copy</span>
                </button>
                <button className="shareBtn btn">
                    <img src={require('../../svg/share.svg').default} alt="" />
                </button>
            </div>
        </div>
    </div>;
};

export default PersonalLink;
