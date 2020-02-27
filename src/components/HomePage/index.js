import React from "react";
import "./homePage.css";

import LoveIcon from "../../images/Love2Icons.svg";

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
      <div className="container">
        <div class="columns is-mobile">
          <div class="column">
            <p class="bd-notification is-primary">First column</p>
            <p>
              sdfds fsdfsdfsdfsdf sdf sdfsdf sdf dsfsd f sd f ds fsdfsdfdsf
              sdfsdfsdfsdf sdf sdfdsfsdfsdfsdf sdfsd
            </p>
          </div>
          <div class="column">
            <p class="bd-notification is-primary">First column</p>
            <p>
              sdfds fsdfsdfsdfsdf sdf sdfsdf sdf dsfsd f sd f ds fsdfsdfdsf
              sdfsdfsdfsdf sdf sdfdsfsdfsdfsdf sdfsd
            </p>
          </div>
          <div class="column">
            <p class="bd-notification is-primary">First column</p>
            <p>
              sdfds fsdfsdfsdfsdf sdf sdfsdf sdf dsfsd f sd f ds fsdfsdfdsf
              sdfsdfsdfsdf sdf sdfdsfsdfsdfsdf sdfsd
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
