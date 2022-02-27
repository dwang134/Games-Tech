import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
const Cards = () => {
  return (
    <div className="card">
      <h1>Checkout the latest feed!</h1>
      <div className="card-container">
        <div className="card-wrapper">
          <ul className="card-items">
            <CardItem
              src="/Games-Tech/images/img1.jpg"
              text="Where to buy Nvidia GeForce RTX 3060 Ti"
              label="Technology"
              path="/Games-Tech/tech"
            />
            <CardItem
              src="/Games-Tech/images/img3.jpg"
              text="Is Sekiro still one of the best AAA title in 2021?"
              label="Games"
              path="/Games-Tech/games"
            />
            </ul>
            <ul className="card-items">
            <CardItem
              src="/Games-Tech/images/img2.jpg"
              text="Where to buy Nvidia GeForce RTX 3060 Ti"
              label="Technology"
              path="/Games-Tech/tech"
            />
            <CardItem
              src="/Games-Tech/images/gow.webp"
              text="God of War finally releasing on PC in 2022?"
              label="Games"
              path="/Games-Tech/games"
            />
            <CardItem
              src="/Games-Tech/images/img3.jpg"
              text="Is Sekiro still one of the best AAA title in 2021?"
              label="Games"
              path="/Games-Tech/games"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
