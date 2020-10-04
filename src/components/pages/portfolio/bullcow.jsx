import React, { Component } from "react";
import { CardBody, CardImg } from "reactstrap";
import Bullcow from "../../img/bullcow.jpg";

export default class BullCowGame extends Component {
  render() {
    return (
      <div>
        <CardImg src={Bullcow} className="d-block w-100" alt="bull cow link" />
        <CardBody className="card-info">
          <h5>
            <a href="https://github.com/Tari38/BullCowGame/">Bull Cow Game</a>
          </h5>
          <p>Bull Cow Game created with Unreal Engine and C++</p>
        </CardBody>
      </div>
    );
  }
}
