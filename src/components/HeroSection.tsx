import React from "react";
import "../App.css";
import "./HeroSection.css";
import { Button } from "./Button";
const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted></video>
      <h1>GET THE LATEST NEWS</h1>
      <p>start browsing today</p>
      <div className="hero-btns">
        <Button buttonStyle="btn--outline" buttonSize="btn--large">
          GET STARTED
        </Button>
        <Button buttonStyle="btn--primary" buttonSize="btn--large">
          WATCH TRAILER
          <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
