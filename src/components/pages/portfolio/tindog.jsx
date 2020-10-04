import React, { Component } from "react";
import { CardBody, CardImg } from "reactstrap";
import Iphone6 from "../../img/iphone6.png";
// import "../styles/Portfolio.css";

export default class Tindog extends Component {
  render() {
    return (
      <div>
        <CardImg src={Iphone6} className="d-block w-100" alt="tindog link" />
        <CardBody className="card-info">
          <h5>
            <a href="...">Tindog</a>
          </h5>
          <p>The old tindog app refactored for React.</p>
        </CardBody>
      </div>
    );
  }
}
