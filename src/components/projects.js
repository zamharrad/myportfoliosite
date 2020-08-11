import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardMenu,
  Icon,
  Button,
  CardActions,
  IconButton,
  CardText,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        /* Project 1 */
        <div className="project-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "150px",
                display: "flex",
                background: "url(https://create-react-app.dev/img/logo-og.png)",
              }}
            >
              React Project
            </CardTitle>
            <CardText>
              Many of our components require the use of JavaScript to function.
              Specifically, they require jQuery, Popper.js, and our own
              JavaScript plugins.{" "}
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "150px",
                display: "flex",
                background: "url(https://create-react-app.dev/img/logo-og.png)",
              }}
            >
              React Project
            </CardTitle>
            <CardText>
              Many of our components require the use of JavaScript to function.
              Specifically, they require jQuery, Popper.js, and our own
              JavaScript plugins.{" "}
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "150px",
                display: "flex",
                background: "url(https://create-react-app.dev/img/logo-og.png)",
              }}
            >
              React Project
            </CardTitle>
            <CardText>
              Many of our components require the use of JavaScript to function.
              Specifically, they require jQuery, Popper.js, and our own
              JavaScript plugins.{" "}
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return <div>Angular section</div>;
    } else if (this.state.activeTab === 2) {
      return <div>java / Spring Boot section</div>;
    } else if (this.state.activeTab === 3) {
      return <div>Other section</div>;
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>Java / Spring boot</Tab>
          <Tab>Java Script</Tab>
        </Tabs>

        <Grid >
          <Cell col={12}>
            <div className="content"> {this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
