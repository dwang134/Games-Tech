import React, { useState } from "react";
import "../../App.css";
import "../HeroSection.css";
import "./Product.css";
const Games: React.FC = () => {
  const [sound, setVolume] = useState(0);

  const volumeUp = (increase: number) => {
    document.getElementsByTagName("video")[0].volume = increase;
  };

  return (
    <div className="games">
      <div className="hero-container">
        <video src="../../../Games-Tech/videos/snow-anime.mp4" autoPlay muted></video>
        <h2 className="product-text">GAMES</h2>
        {/* <div className="volume-container">
          <div className="volume-group">
            <i className="fas fa-volume-down" onClick={() => volumeUp(0.5)}></i>
            </div>
            <div className="volume-group">
            <i className="fas fa-volume-up" onClick={() => volumeUp(0.1)}></i>
            </div>
          </div> */}
        </div>
      </div>
  );
};

export default Games;
