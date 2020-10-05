import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navigation/Nav";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import CV from "./components/pages/CV";
import Footer from "./components/partials/Footer";

import "./App.css";

function App() {
  return ( 
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/components/pages/home" exact>
            <Home />
          </Route>
          <Route path="/components/pages/about">
            <About />
          </Route>
          <Route path="/components/pages/portfolio">
            <Portfolio />
          </Route>
          <Route path="/components/pages/contact">
            <Contact />
          </Route>
          <Route path="/components/pages/cv">
            <CV />
          </Route>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
