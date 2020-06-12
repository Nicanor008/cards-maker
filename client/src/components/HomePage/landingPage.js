import React from "react";
import "./homePage.css";

import LoveIcon from "../../images/Love2Icons.svg";
import SEO from "../SEO";
import { CreateCardsDescription } from "./createCardsDescription";

const LandingPage = () => {
  return (
    <>
      <SEO title="Cards Maker" />
      {/* image */}
      <div className="bodyWrapper love2Icons">
        <center>
          <figure className="is-centered">
            <img
              alt="Love Icons"
              src={LoveIcon}
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

        <CreateCardsDescription description="Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when" />
      </div>
    </>
  );
};

export default LandingPage;
