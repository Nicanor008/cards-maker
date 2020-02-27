import React from "react";
import "./homePage.css";

import LoveIcon from "../../images/Love2Icons.svg";

const HomePage = () => {
  return (
    <>
      {/* image */}
      <figure className="bodyWrapper">
        <center>
          <img
            src={LoveIcon}
            alt="Love Icons"
            className="image love2Icons responsive"
          />
        </center>
      </figure>

      {/* about cardsmaker description */}
      <div className="container">
        <div class="columns is-mobile is-centered">
          <div class="column is-primary"><p class="bd-notification is-primary">First column</p></div>
          <div class="column"><p class="bd-notification is-primary">First column</p></div>
          <div class="column"><p class="bd-notification is-primary">First column</p></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
