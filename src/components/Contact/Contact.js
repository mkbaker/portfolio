import React, { Component } from "react";
import "./Contact.css";
import axios from "axios";

import Emoji from "../Emoji/Emoji";
//semantic ui
import { Form, TextArea, Input, Button } from "semantic-ui-react";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  //handle input changes
  handleChangeFor = input => event => {
    this.setState({
      ...this.state,
      [input]: event.target.value
    });
  };

  handleSubmit = () => {
      axios({
          method: 'POST',
          url: '/send',
          data: this.state
      }) 
  }
 
  render() {
    return (
      <div className="contactDiv">
        <h1>Use this form to send me an email.</h1>
        <h3> I'll be in touch soon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Input
            placeholder="Your name"
            className="inputBox"
            onChange={this.handleChangeFor("name")}
            value={this.state.name}
          />
          <br />
          <Input
            placeholder="Your email"
            className="inputBox"
            onChange={this.handleChangeFor("email")}
            value={this.state.email}
          />
          <TextArea
            placeholder="Your message"
            className="inputBox"
            onChange={this.handleChangeFor("message")}
            value={this.state.message}
          />
          <div className="button">
            <Button>Send</Button>
          </div>
        </Form>
        
      </div>
    );
  }
}

export default Contact;