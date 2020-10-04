import React, { Component } from "react";
import { CardBody, CardImg } from "reactstrap";
import DailyUI1 from "../../img/1.png";
// import "../styles/Portfolio.css";

export default class DailyUIDesigns extends Component {
  render() {
    return (
      <div>
        <CardImg src={DailyUI1} className="d-block w-100" alt="daily UI link" />
        <CardBody className="card-info">
          <h5>
            <a
              href="https://daily-ui-designs.herokuapp.com/"
              alt="daily UI design link"
            >
              Daily UI Designs
            </a>
          </h5>
        </CardBody>
      </div>
    );
  }
}
