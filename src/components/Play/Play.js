import React, { Component } from "react";
import daytrotter from "../images/daytrotter.png";
import mk from "../images/mk.jpg";
import artpic from "../images/artpic.png";
//semantic ui
import { Card, Icon, Image } from "semantic-ui-react";
import WOW from "wowjs";

class Play extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  handleGranddad = () => {
    window.open("https://granddad.bandcamp.com/", "_blank");
  };

  handleAtmik = () => {
    window.open("https://atmik.bandcamp.com/", "_blank");
  };

  //this link needs to be changed upon creation of CV page
  handleOpenProcessing = () => {
       window.open(
         "https://www.openprocessing.org/user/184054",
         "_blank"
       );
  };

  render() {
    return (
      <div className="containerDiv">
        <Card onClick={this.handleGranddad} className="wow flipInY">
          <Image src={daytrotter} />
          <Card.Content>
            <Card.Header>Granddad</Card.Header>
            <Card.Description>
              My emo/punk band. We've toured all over and made a lot of really cool friends. 
            </Card.Description>
          </Card.Content>
        </Card>

        <Card onClick={this.handleAtmik} className="wow flipInY">
          <Image src={mk} />
          <Card.Content>
            <Card.Header>Atmik</Card.Header>
            <Card.Description>My personal electronic music project.</Card.Description>
          </Card.Content>
        </Card>

        <Card onClick={this.handleOpenProcessing} className="wow flipInY">
          <Image src={artpic} />
          <Card.Content>
            <Card.Header>Computer Art</Card.Header>
            <Card.Description>
              Check out some sketches I've been making at OpenProcessing.org. 
            </Card.Description>
          </Card.Content>
        </Card> 
      </div>
    );
  }
}

export default Play;
