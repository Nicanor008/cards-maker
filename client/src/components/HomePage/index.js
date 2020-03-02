import React from "react";
import "./homePage.css";

import LoveIcon from "../../images/Love2Icons.svg";
import Wedding from "../../images/Wedding.svg";
import SEO from "../SEO";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <SEO title="Cards Maker" />
      {/* image */}
      <div className="bodyWrapper love2Icons">
        <center>
          <figure className="is-centered">
            <img
              src={LoveIcon}
              alt="Love Icons"
              className="LoveIcons image"
              width="800"
            />
          </figure>
        </center>
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

        <br /><br />

        <div className="container columns is-mobile ">
          <div className="column">
            <figure className="image is-3by1">
              <img src={Wedding} alt="Wedding people" />
            </figure>
          </div>
          <div className="column">
            <p className="rowTextContent rowDescriptionText">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when
              <br />
              <br />
              <Link to="/create">
              <button className="button is-danger">Create Cards</button></Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
