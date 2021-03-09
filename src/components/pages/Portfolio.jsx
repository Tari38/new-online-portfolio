import React from "react";
import { Card, CardDeck } from "reactstrap";
import GraphitePortraits from "./portfolio/graphite-portraits";
import DailyUIDesigns from "./portfolio/dailyui-designs";
import NewsLetterSignup from "./portfolio/newsletter-signup";
import Tindog from "./portfolio/tindog";
import BullCowGame from "./portfolio/bullcow";
import Calculators from "./portfolio/calculators";

import "../pages/styles/Portfolio.css";

export default function Portfolio() {
  return (
    <>
      <div className="portfolio-main">
        <div className="title-banner">
          <h1 className="title-text">My Portfolio</h1>
        </div>

        <CardDeck className="card-deck">
          <Card className="card">
            <GraphitePortraits />
          </Card>
          <Card className="card">
            <DailyUIDesigns />
          </Card>
          <Card className="card">
            <Calculators />
          </Card>
        </CardDeck>

        <CardDeck className="card-deck">
          <Card className="card">
            <Tindog />
          </Card>
          <Card className="card">
            <NewsLetterSignup />
          </Card>
          <Card className="card">
            <BullCowGame />
          </Card>
        </CardDeck>
      </div>
    </>
  );
}
