import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

import Log from "../img/IMG_4570.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// social media icons
import {
  faFacebookSquare,
  faGitSquare,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={Log} alt="avatar" className="img-pro" />
            <div className="banner-text">
              <h1>Full Stack Software Engineer</h1>
              <hr />
              <p>
                Java | Spring Boot | HTML/CSS | Bootstrap | jQuery | JavaScript
                | Angular | React | React Native | NodeJS | MySQL |
              </p>
              <div className="social-links">
                <a
                  href="www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGitSquare} />
                </a>
                <a
                  href="www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitterSquare} />
                </a>
                <a
                  href="www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFreeCodeCamp} />
                </a>
                <a
                  href="www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
