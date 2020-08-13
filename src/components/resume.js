import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }} className="">
              <img
                src="https://www.shareicon.net/data/128x128/2017/07/13/888372_man_512x512.png"
                alt="avatar" style={{height:'200px'}}
              />
            </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            Right side
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
