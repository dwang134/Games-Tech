import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
const Cards = () => {
  return (
    <div className="card">
      <h1>Checkout the latest news!</h1>
      <div className="card-container">
        <div className="card-wrapper">
          <ul className="card-items">
            <CardItem
              src="images/img1.jpg"
              text="Where to buy Nvidia GeForce RTX 3060 Ti"
              label="Technology"
              path="/tech"
            />
            <CardItem
              src="images/img3.jpg"
              text="Is Sekiro still one of the best AAA title in 2021?"
              label="Games"
              path="/games"
            />
            </ul>
            <ul className="card-items">
            <CardItem
              src="images/img2.jpg"
              text="Where to buy Nvidia GeForce RTX 3060 Ti"
              label="Technology"
              path="/tech"
            />
            <CardItem
              src="images/img3.jpg"
              text="Is Sekiro still one of the best AAA title in 2021?"
              label="Games"
              path="/games"
            />
            <CardItem
              src="images/img3.jpg"
              text="Is Sekiro still one of the best AAA title in 2021?"
              label="Games"
              path="/games"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
