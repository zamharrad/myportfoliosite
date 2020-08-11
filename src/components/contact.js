import React, { Component } from "react";
import { Grid, Cell, ListItem, ListItemContent, List } from "react-mdl";
import "./css/contact.css";
import { MDBIcon } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faMobile } from "@fortawesome/free-brands-svg-icons";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Zamhar Raa'D</h2>
            <img
              src="https://i.pravatar.cc/323"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Our application also has React components, Beverage and Showcase.
              After initializing the above library, we don’t have to re-import
              icons into each of them. We import the FontAwesomeIcon component,
              and when used,
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <MDBIcon icon="mobile-alt" /> <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>076-9432 266
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "Anton",
                    }}
                  >
                    <MDBIcon far icon="envelope" style={{ fontSize: "32px" }} />
                    mhmdzamhar@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <MDBIcon fab icon="skype" aria-hidden="true" />
                    Zamharmuzammil
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <MDBIcon icon="map-marker-alt" />
                    <span> </span>36,Gammad Road, Keselwatha
                    <br /> <br />
                    Panadura , Sri Lanka
                    <br />
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
