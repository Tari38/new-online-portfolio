import React, { Component } from "react";
import { CardBody, CardImg } from "reactstrap";
import Dog from "../../img/dog.jpg";
// import "../styles/Portfolio.css";

export default class GraphitePortraits extends Component {
  render() {
    return (
      <div>
        <CardImg
          src={Dog}
          className="d-block w-100"
          alt="graphite portraits link"
        />
        <CardBody className="card-info">
          <h5>
            <a href="https://graphite-portraits.herokuapp.com/home">
              Graphite Portraits
            </a>
          </h5>
          <p>My personal artwork website.</p>
        </CardBody>
      </div>
    );
  }
}
