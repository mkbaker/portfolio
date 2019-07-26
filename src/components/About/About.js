import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { connect } from "react-redux";
import WOW from "wowjs";

//components 
import Headshot from "../Headshot/Headshot";
import Emoji from "../Emoji/Emoji";

//material-ui
import Grid from "@material-ui/core/Grid";

class About extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
  render() {
    return (
      <div className="introDiv">
        <div className="wow rollIn">
          <div className="aboutPagePhoto">
            <Headshot />
          </div>
        </div>
        <div className="introText">
          <h1 className="wow lightSpeedIn">Hi, I'm Kellen.</h1>
          <p className="wow lightSpeedIn">
            I'm a software engineer, musician, and artist. <br />
            I love to learn and explore every day. <br />
            Let's make something cool together.{" "}
            <Emoji symbol="🤘" label="the horns" />
          </p>
        </div>
      </div>
    );
  }
}

export default About;