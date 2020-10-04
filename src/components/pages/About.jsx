import React, { Component } from "react";
import coder2 from "../img/coder2a.jpg";
import { Accordion, Card } from "react-bootstrap";

import "../pages/styles/About.css";

class About extends Component {
  render() {
    return (
      <>
        <div className="about-main">
          <h1 className="title-text">About Me</h1>

          <div className="accordion-container">
            <Accordion className="accordion-about">
              <Card>
                <Accordion.Toggle
                  className="accordion-header"
                  as={Card.Header}
                  variant="link"
                  eventKey="0"
                >
                  About Me
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="accordion-body">
                    <li>
                      I am a mum to one young daughter, with good organisational
                      and time-management skills.
                    </li>
                    <li>
                      I have a good eye for detail and a strong determination to
                      complete commissions to a high standard.
                    </li>
                    <li>
                      As well as drawing and writing, I enjoy reading fiction
                      novels and playing a multitude of games across a variety
                      of platforms.
                    </li>
                    <li>
                      I also relish in completing puzzles, both jigsaws and mind
                      engaging puzzles to give myself a challenge.
                    </li>
                    <li>
                      I have previously been involved in our local orchestra,
                      where we have played at a variety of venues for the
                      public, including Stowe Gardens.
                    </li>
                    <li>
                      Unfortunately, after years of trauma, I have physical and
                      mental health issues which I am living with day to day,
                      and am looking for something I can feel I can contribute
                      to being based at home.
                    </li>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle
                  className="accordion-header"
                  as={Card.Header}
                  variant="link"
                  eventKey="1"
                >
                  Why I Learnt To Code
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body className="accordion-body">
                    <li>
                      I have grown up with computers from a very early age back
                      in the early 80's and taught myself later on how to build
                      them from scratch. Unfortunately whilst at school, they
                      didn"t have a computer room, just one computer where we
                      learnt MS DOS! Classes such as I.T were non-existent but
                      once my younger brother moved up into school, computers
                      seemed to appear everywhere.
                    </li>
                    <li>
                      He inspires me to better myself, and is a whizz with
                      computers, coding and web development.
                    </li>
                    <li>
                      I have always enjoyed working on computers, and being able
                      to learn new skills is something I crave.
                    </li>
                    <li>
                      I love to learn, to find out how things work, and how to
                      make life easier!
                    </li>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle
                  className="accordion-header"
                  as={Card.Header}
                  variant="link"
                  eventKey="2"
                >
                  Where I Want To Go
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body className="accordion-body">
                    <li>
                      I took on the full-stack developer bootcamp as I wasn"t
                      sure which area I wanted to focus on.{" "}
                    </li>
                    <li>
                      Design is close to my heart but my enjoyment of finding
                      out the inner workings of coding and how it makes it all
                      run smoothly (hopefully) is also extremely tempting.
                    </li>
                    <li>
                      I hope with more experience I will find an area I am most
                      comfortable with but having the ability to create code
                      efficiently and being organised is what my head screams
                      out for.
                    </li>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            <div>
              <img src={coder2} alt="illustration" id="coder2a"></img>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default About;
