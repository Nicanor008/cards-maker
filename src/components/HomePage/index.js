import React from "react";
import "./homePage.css";

import LoveIcon from "../../images/Love2Icons.svg";
import Wedding from "../../images/Wedding.svg";

const HomePage = () => {
  return (
    <>
      {/* image */}
      <div className="bodyWrapper love2Icons">
        <figure className="image container is-centered">
          <img src={LoveIcon} alt="Love Icons" className="image is-centered" />
        </figure>
      </div>

      {/* about cardsmaker description */}
      <div className="container columnDescriptionWrapper">
        <div className="columns is-mobile">
          <div className="column">
            <p className="bd-notification is-primary rowHeader">Create</p>
            <p className="rowTextContent">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when
            </p>
          </div>
          <div className="column">
            <p className="bd-notification is-primary rowHeader">Collaborate</p>
            <p className="rowTextContent">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when
            </p>
          </div>
          <div className="column">
            <p className="bd-notification is-primary rowHeader">Share</p>
            <p className="rowTextContent">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when
            </p>
          </div>
        </div>
      </div>

      <div className="container columns is-mobile">
        <div className="column">
          <figure className="image is-3by1">
            <img src={Wedding} alt="Wedding people" />
          </figure>
        </div>
        <div className="column">
          <p className="rowTextContent rowDescriptionText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when<br /><br />
          <button className="button is-danger">Create Cards</button></p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
