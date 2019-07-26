import React, { Component } from "react";
import kellenbaker from "../images/kellenbaker.jpg";


class Headshot extends Component {
    render() {
        return (
        <div className="imageCropper">
        <img src={kellenbaker} alt="Me" className="homeHeadshot" />
        </div>
        )
    }
}

export default Headshot;