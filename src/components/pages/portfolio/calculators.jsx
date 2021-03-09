import React, { Component } from "react";
import { CardBody, CardImg } from "reactstrap";
import Calc from "../../img/basic-calc.jpg";
// import "../styles/Portfolio.css";

export default class Calculators extends Component {
  render() {
    return (
      <div>
        <CardImg src={Calc} className="d-block w-100" alt="calculators link" />
        <CardBody className="card-info">
          <h5>
            <a
              href="https://react-calculators.herokuapp.com/"
              alt="calculator app link"
            >
              Calculators
            </a>
          </h5>
        </CardBody>
      </div>
    );
  }
}
