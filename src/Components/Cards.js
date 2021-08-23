import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these New Users</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/1.jpg"
              text="Roger, 29 M"
              label="Rome, NY"
              path="/profile"
            />
            <CardItem
              src="images/2.jpg"
              text="Stephanie, 32 F"
              label="Manlius, NY"
              path="/profile"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/3.jpg"
              text="Liliana, 22, F"
              label="Brewerton, NY"
              path="/profile"
            />
            <CardItem
              src="images/4.jpg"
              text="Justin, 30, M"
              label="Utica, NY"
              path="/profile"
            />
            <CardItem
              src="images/5.jpg"
              text="Austin, 26 M"
              label="Vernon, NY"
              path="/profile"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
