import React from "react";

import "./Hero.css";
import Button from "../../../components/boilerplate/Button";

const Hero = () => {
  return (
    <div className="hero sectionContainer">
      <div className="heroTitleArea">
        <h1>
          Illinois <span className="blueHighlight">Robotics </span>
          in Space
        </h1>
        <p>A multidisciplinary student organization at UIUC</p>
        <div className="heroButtonPositioner">
          <Button text="Join Us" link="https://iris-uiuc.slack.com" />
        </div>
      </div>
      <img
        className="heroImage"
        src="/boards.webp"
        alt="picture of IRIS members"
      />
    </div>
  );
};

export default Hero;
