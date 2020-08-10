import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

import Log from "../img/IMG_4570.png";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={Log} alt="avatar" className="img-pro" />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
