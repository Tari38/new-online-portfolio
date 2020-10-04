import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import html5 from "../img/skills/html5.png";
import css3 from "../img/skills/css3.png";
import git from "../img/skills/git2.png";
import js from "../img/skills/javascript.png";
import react from "../img/skills/react.png";
import mongo from "../img/skills/mongodb.png";
import node from "../img/skills/nodejs.png";

import "../pages/styles/Home.css";

class Home extends Component {
  render() {
    return (
      <>
        <div className="c-hero">
          <div className="c-hero__box">
            <h1 className="c-hero__title">
              Hi. I'm Samantha.
              <span className="u-d-block@md"> A full stack web developer.</span>
            </h1>
            <p className="c-hero__sub">
              {" "}
              Please take a look around my portfolio, get to know me and my
              work.
            </p>
          </div>

          <div className="skills">
            <Carousel className="carousel">
              <Carousel.Item>
                <img src={html5} alt="html5"></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={css3} alt="css3"></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={git} alt="git"></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={js} alt="javascript"></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={react} alt="react"></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={mongo} alt="mongoDB"></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={node} alt="node.js"></img>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
