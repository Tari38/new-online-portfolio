import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import { Card } from "react-bootstrap";
import profilePic from "../img/me.png";

import "../pages/styles/Contact.css";

class Contact extends Component {
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <>
        <div className="contact-wrap">
          <Card className="contact-card" style={{ width: "20rem" }}>
            <Card.Img
              src={profilePic}
              variant="top"
              className="profilePic"
            ></Card.Img>
            <Card.Body className="contact-card-body">
              <Card.Title className="contact-card-title">
                Contact Me Via
              </Card.Title>
              <Card.Text className="contact-card-text">
                <ContactForm />

                <br />
                <p style={{ fontWeight: "bold" }}>or get in touch</p>
                <br />
                <div className="id-links">
                  <a id="fBook" href="https://www.facebook.com/sam.dorrell">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    id="lIn"
                    href="https://www.linkedin.com/in/samantha-dorrell-307377188/"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <br />
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default Contact;
