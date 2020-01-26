import React, { forwardRef } from "react";

import "./Contact.css";

const Contact = (props, ref) => {
  return (
    <>
      <div ref={ref} className="contactSectionContainer">
        <div className="line" />
        <h1>Get in touch</h1>
        <div className="contactSections">
          <div className="contactSection">
            <p className="contactRow">
              <b>Sponsors: </b>
              <a href="mailto:irisuiuc@gmail.com">irisuiuc@gmail.com</a>
            </p>
            <p className="contactRow">
              <b>Outreach: </b>
              <a href="mailto:irisuiuc@gmail.com">irisuiuc@gmail.com</a>
            </p>
            <p className="contactRow">
              <b>General Inquiry: </b>
              <a href="irisuiuc@gmail.com">irisuiuc@gmail.com</a>
            </p>
          </div>
          <div className="socialContact contactSection">
            {/* <a href="https://reddit.com/u/quiuc" className="contactRow">
							Reddit
						</a> */}
            <a
              href="https://www.facebook.com/IllinoisRoboticsInSpace/"
              className="contactRow"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/illinoisroboticsinspace/"
              className="contactRow"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/iris_uiuc?lang=en"
              className="contactRow"
            >
              Twitter
            </a>
            <a href="https://iris-uiuc.slack.com" className="contactRow">
              Slack
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default forwardRef(Contact);
