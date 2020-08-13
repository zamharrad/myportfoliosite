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
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Zamhar Raa'D</h2>
            <h4 style={{ color: "grey" }}>Software Engineer</h4>
            <hr style={{ width: "50%", borderTop: "3px solid gold" }} />
            <p>
              Instead of using the official material.css and material.js files
              from the MDL project, you should use the files we provide in
              /extra. The reason to that is because the official Layout
              component is not fully compatible with React.{" "}
            </p>
            <hr style={{ width: "50%", borderTop: "3px solid gold" }} />
            <h5>Address :</h5>
            <p>36 A, Gammda Road, Keselwatha</p>
            <h5>Phone</h5>
            <p>076-9432266</p>
            <h5>E-mail</h5>
            <p>mhmdzamhar@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ width: "50%", borderTop: "3px solid gold" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
