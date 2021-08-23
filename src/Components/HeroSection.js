import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video
        src="/Users/arielmurphy/Desktop/Relationshipfront/react-website-relationship/public/videos/online-dating-distance-relationship-obese-woman-6C4QSYN.mov"
        autoPlay
        loop
        muted
      />
      <h1>Flirt First</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          Match Now!
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
