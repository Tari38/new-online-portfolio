import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

import "../styles/Contact.css";

class ContactForm extends Component {
  handleSubmit(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    axios({
      method: "POST",
      url: process.env.EMAIL,
      data: {
        name: name,
        email: email,
        subject: subject,
        message: message,
      },
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }
  resetForm() {
    document.getElementById("contact-form").reset();
  }
  render() {
    return (
      <Form
        id="contact-form"
        onSubmit={this.handleSubmit.bind(this)}
        method="POST"
      >
        <FormGroup className="form-group">
          <i className="fas fa-user prefix grey-text"></i>
          <Label for="name">Name</Label>
          <Input type="text" className="form-control" id="name"></Input>
        </FormGroup>
        <FormGroup className="form-group">
          <i className="fas fa-envelope prefix grey-text"></i>
          <Label for="exampleInputEmail1">Email address</Label>
          <Input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          ></Input>
        </FormGroup>
        <FormGroup className="form-group">
          <i className="fas fa-tag prefix grey-text"></i>
          <Label for="subject">Subject</Label>
          <Input
            type="text"
            className="form-control"
            id="subject"
            aria-describedby="subjectHelp"
          ></Input>
        </FormGroup>
        <FormGroup className="form-group">
          <i className="fas fa-pencil-alt prefix grey-text"></i>
          <Label for="message">Message</Label>
          <Input
            className="form-control"
            type="textarea"
            name="text"
            rows="10"
            id="message"
          ></Input>
        </FormGroup>
        <Button type="submit" className="btn btn-primary">
          Submit
        </Button>
      </Form>
    );
  }
}

export default ContactForm;
