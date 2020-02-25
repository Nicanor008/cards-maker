import React from 'react';
import "./homePage.css";

import LoveIcons from "../../images/LoveIcons.png";
import LoveIcon from "../../images/2LoveIcons.png";

const HomePage = () => {
    return (
        <figure className="bodyWrapper">
            <img src={LoveIcon} alt="Love Icons" className="image is-5by4 responsive" />
        </figure>
    )
}

export default HomePage;
