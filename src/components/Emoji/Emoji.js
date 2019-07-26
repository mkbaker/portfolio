import React from "react";

const Emoji = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

export default Emoji;

// Our Emoji component takes two props: label, and symbol. 
//If present, the label is used to generate an aria-label, which will be read by a user’s screen reader.
// If absent, aria-label is left blank and aria-hidden is set to true. 
//This means it will be ignored by the screen reader.
// This is a good practice if the emoji doesn’t add anything to the website other than a bit of flair.
// The symbol, which will be a string containing the emoji, is passed into the returned span. The role is the same in the previous example, and I added a class for styling.
// After importing our Emoji component, we can use it like so:
// <Emoji symbol="🐑" label="sheep"/>
// // or
// <Emoji symbol="🐑"/>

// https://medium.com/@seanmcp/%EF%B8%8F-how-to-use-emojis-in-react-d23bbf608bf7