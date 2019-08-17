import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { connect } from "react-redux";
import "./Work.css";

//photos 
import pic from "../images/githubActivity.png";
import kellenbaker from "../images/kellenbaker.jpg";
import publicSpeaking from "../images/publicSpeaking.jpg";
import silentAction from "../images/silentAction.png";
import whatToSay from "../images/fiveHealthyPhrases.png";

//semantic ui
import { Card, Icon, Image } from "semantic-ui-react";
import WOW from "wowjs";


class Work extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  handleGithub = () => {
    window.open("http://www.github.com/mkbaker", "_blank");
  };

  handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/kellen-baker/", "_blank");
  };

  handleSilentAction = () => {
    window.open("https://silent-action.herokuapp.com/#/home", "_blank");
  };

  handleWithAll = () => {
    window.open("https://withall-kellen.herokuapp.com/#/home", "_blank");
  };

  //this link needs to be changed upon creation of CV page
  handleCV = () => {
    this.props.history.push("/about");
  };

  render() {
    return (
      <div className="containerDiv">
        <Card onClick={this.handleGithub} className="wow flipInY">
          <Image src={pic} />
          <Card.Content>
            <Card.Header>GitHub Portfolio</Card.Header>
            <Card.Description>
              Check out my projects on GitHub.
            </Card.Description>
          </Card.Content>
        </Card>

        <Card onClick={this.handleLinkedIn} className="wow flipInY">
          <Image src={kellenbaker} />
          <Card.Content>
            <Card.Header>LinkedIn Profile</Card.Header>
            <Card.Description>Feel free to connect!</Card.Description>
          </Card.Content>
        </Card>

        <Card onClick={this.handleSilentAction} className="wow flipInY">
          <Image src={silentAction} />
          <Card.Content>
            <Card.Header>Silent Action</Card.Header>
            <Card.Description>
              A crowdfunding platform where users can host online auctions to
              benefit community members facing medical expenses.
            </Card.Description>
          </Card.Content>
        </Card>

        <Card onClick={this.handleWithAll} className="wow flipInY">
          <Image src={whatToSay} />
          <Card.Content>
            <Card.Header>What To Say</Card.Header>
            <Card.Description>
              Automated content distribution and data collection for Minneapolis
              nonprofit WithAll. This link brings you to a copy of the code I
              helped build.
            </Card.Description>
          </Card.Content>
        </Card>

        {/* i'll active this code once i have the CV component built */}
        {/* <Card onClick={this.handleCV} className="wow flipInY">
          <Image src={publicSpeaking} />
          <Card.Content>
            <Card.Header>Resume / CV</Card.Header>
            <Card.Description>
              View my resume and full CV here.
            </Card.Description>
          </Card.Content>
        </Card> */}
      </div>
    );
  }
}

export default Work;
