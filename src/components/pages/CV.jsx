import React, { Component } from "react";

import "./styles/CV.css";

class CV extends Component {
  render() {
    return (
      <>
        <div className="cv-main">
          <div className="cv-banner">
            <div className="cv-title-text">
              <h1 className="text-uppercase">Samantha Dorrell</h1>
              <h3 className="text-uppercase">Full Stack Web Developer</h3>
            </div>
          </div>
          <div className="cv-body">
            <div className="side-bar col-xl-3 col-lg-4 col-md-4 col-sm-5 col-xs-12">
              <div className="side-bar-title text-uppercase">
                <h4>Technical Skills</h4>
              </div>
              <div className="side-bar-skills text-uppercase">
                <h5>HTML5</h5>
                <h5>CSS3</h5>
                <h5>JavaScript</h5>
                <h5>React</h5>
                <h5>MongoDB</h5>
                <h5>Express</h5>
                <h5>Node</h5>
                <h5>Bootstrap</h5>
                <h5>SQL</h5>
                <h5>Git</h5>
                <h5>Responsive Web Design</h5>
                <h5>Webpack</h5>
                <h5>C++ with Unreal Engine 4</h5>
              </div>
            </div>

            <div className="cv-info col-xl-4 col-lg-5 col-md-6 col-sm-12">
              <h2 className="cv-info-headers">ABOUT</h2>
              <br />
              <p className="cv-info-text">
                I am a self-taught Web Developer with a broad technical skill
                set. As such-:
                <li>
                  {" "}
                  ...my experience in art and design combines well with web
                  development, creating clean code and great UX/UI design.
                </li>
                <li>
                  {" "}
                  ...I can do manual testing of various websites combined with
                  the use of Git throughout for project management and tracking
                  source code.
                </li>
                <li>
                  {" "}
                  ...I have the ability and determination to assimilate new
                  knowledge and technologies and adapt quickly to new situations
                  and tasks.{" "}
                </li>
                <li>
                  {" "}
                  ...I"m currently seeking a Junior Developer position in order
                  to help build, maintain and enhance company software, apps and
                  websites.
                </li>
                <li>
                  {" "}
                  ...I am an avid gamer, and am currently doing an online learning
                  course on how to code with C++ and Unreal Engine 4 which I
                  am really enjoying.
                  </li>
              </p>
              <hr />
              <h2 className="cv-info-headers">WORK EXPERIENCE</h2>
              <br />
              <p className="cv-info-text">
                I have many years working experience across a variety of
                industries, including:
                <li> Artist and Author (most recent)</li>
                <li> IT Administrator / Data Entry</li>
                <li> Childcare and Education</li>
                <li> Retail</li>
                <li> Readers" Digest Book Production and Distribution</li>
                <li> Culinary (Bakery)</li>
              </p>
              <hr />
              <h2 className="cv-info-headers">LATEST EDUCATION</h2>
              <br />

              <h4 className="cv-info-subheaders">
                Web Development Courses (2019 - Present):
              </h4>
              <p className="cv-info-text">
                <li>
                  Udemy - The Complete 2019 Web Development Bootcamp (HTML, CSS,
                  JavaScript, jQuery, Bootstrap, DOM, Node.js, Express.js, Git,
                  React.js, EJS, SQL, MongoDB, Mongoose, Authentication &
                  Security)
                </li>
                <li>Udemy - The MERN Fullstack Guide</li>
                <li>Udemy - Unreal Engine C++ Developer</li>
              </p>
              <br />

              <h2 className="cv-info-headers">HIGHER EDUCATION</h2>
              <h4 className="cv-info-subheaders">
                Amersham and Wycombe College
              </h4>
              <li className="cv-info-text">
                Level 3 CACHE Diploma in Childcare and Education
              </li>

              <h4 className="cv-info-subheaders">
                Buckinghamshire Chilterns University College
              </h4>
              <li className="cv-info-text">Foundation in Art and Design</li>
              <br />

              <h2 className="cv-info-headers">SECONDARY EDUCATION</h2>
              <h4 className="cv-info-subheaders">MANDEVILLE UPPER SCHOOL</h4>
              <li className="cv-info-text">A Level Art and Design - B</li>
              <li className="cv-info-text">A Level English - E</li>

              <h6 className="cv-info-subheaders">GCSE"S</h6>
              <div className="cv-info-text">
                <li>Art - A*</li>
                <li>Design - A</li>
                <li>Maths - C</li>
                <li>Double Science - C/C</li>
                <li>Double English - C/C</li>
                <li>Music - C</li>
                <li>Religious Education - D</li>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </>
    );
  }
}

export default CV;
