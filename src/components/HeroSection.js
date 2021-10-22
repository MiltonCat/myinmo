import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <img src="./images/front1.jpg" />
      <h1>Encontrá tu hogar</h1>
      <p>Nosotros te ayudamos</p>

      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          {/* aca va un buscador */}
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          {/* <i className='far fa-play-circle' /> */}
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
