import React, { Component } from "react";
import { CardBody, CardImg } from "reactstrap";
import NewsletterImg from "../../img/My-logo.png";
// import "../styles/Portfolio.css";

export default class NewsLetterSignup extends Component {
  render() {
    return (
      <div>
        <CardImg
          src={NewsletterImg}
          className="d-block w-100"
          alt="newsletter signup link"
        />
        <CardBody className="card-body">
          <h5>
            <a
              href="https://newsletter-signup-practise.herokuapp.com/"
              alt="newsletter signup link"
            >
              Newsletter Signup
            </a>
          </h5>
        </CardBody>
      </div>
    );
  }
}
