import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
const servicios = () => {
  return (
    <div>
      <ul className="cards__items">
        <CardItem
          src="./images/vender.jpg"
          text="Si queres vender, debes tener estos consejos que te damos"
          label="Guia para vender"
          path="/vender"
        />
        <CardItem
          src="./images/alquilar1.jpg"
          text="Si queres comprar, debes tener estos consejos que te damos"
          label="Guia para comprar"
          path="/comprar"
        />
      </ul>
    </div>
  );
};

export default servicios;
