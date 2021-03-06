import React from "react";
import "../App.css";
import "./HeroSection.css";
import { Button } from "./Button";
const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* <img src="/videos/computerBrowse.gif"/> */}
      <video src="/Games-Tech/videos/Game_room.mp4" autoPlay loop muted></video>
      <h1>GAMES AND TECH NEWS</h1>
      <p>start browsing today</p>
      <div className="hero-btns">
        <Button buttonStyle="btn--outline" buttonSize="btn--large">
          GET STARTED
        </Button>
        <Button buttonStyle="btn--primary" buttonSize="btn--large">
          SIGN UP
          <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
