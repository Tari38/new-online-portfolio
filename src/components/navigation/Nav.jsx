import React from "react";
import { Navbar } from "reactstrap";
import { Link } from "react-router-dom";
import { Logo } from "./img/SDWebDevelopment.png";

import "./Nav.css";

function NavBar() {
  return (
    <>
      <Navbar className="navbar justify-content-between" light expand="md">
        <div className="navlink">
        <Link classNAme="navlink" to="/components/pages/Home"> <img src={Logo}></img></Link>
          <Link className="navlink" to="/components/pages/Home">
            Home
          </Link>
          <Link className="navlink" to="/components/pages/About">
            About
          </Link>
          <Link className="navlink" to="/components/pages/Portfolio">
            Portfolio
          </Link>
          <Link className="navlink" to="/components/pages/Contact">
            Contact
          </Link>
          <Link className="navlink" to="/components/pages/CV">
            CV
          </Link>
        </div>

        <div className="social-links justify-content-between" light expand="md">
          <a className="social-links" href="https://dribbble.com/Tari39">
            <i className="fab fa-dribbble"></i>
          </a>
          <a
            className="social-links"
            href="https://www.facebook.com/sam.dorrell"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            className="social-links"
            href="https://www.linkedin.com/in/samantha-dorrell-307377188/"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </Navbar>

      {/* Hamburger Menu */}

      <div className="menu-wrap">
        <input type="checkbox" className="toggler"></input>
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul className="menu-navlink">
                <li>
                  <a href="/components/pages/Home">Home</a>
                </li>
                <li>
                  <a href="/components/pages/About">About</a>
                </li>
                <li>
                  <a href="/components/pages/Portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="/components/pages/Contact">Contact</a>
                </li>
                <li>
                  <a href="/components/pages/CV">CV</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
