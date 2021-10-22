import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import Servicios from "../components/Servicios";
import Results from "./results";

function Cards() {
  return (
    <div className="cards">
      <div className="titulo">
        <h1>Propiedades en ventas</h1>
      </div>
      {/* <Results /> */}
      <Servicios />
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              id="casa"
              src="./images/Cabaña/foto1.jpg"
              text="Excelente cabaña en el centro"
              label="Hermosa Cabaña"
              price="valor: 185.000 usd"
              path="/Prop1"
            />
            <CardItem
              id="baño"
              src="images/Caleuche/casaCa.jpeg"
              text="Casa en Barrio con Excelente vistas"
              label="Casa en Caleuche"
              price=" Valor: 120.000 usd"
              path="/Prop2"
            />
            <CardItem
              src="images/Curruhue/foto1.jpg"
              text="En el centro de la ciudad podras encontrar este Departamento"
              label="Departameton nuevo y Centrico"
              price="Valor: 115.000 usd"
              path="/Prop3"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="./images/Rudecindo/foto1.jpeg"
              text="Departamento de 3 habitaciones"
              label="Departamento Centrico"
              price="Valor: 195.000 usd"
              path="/Prop4"
            />
            <CardItem
              src="./images/barby/foto1.jpeg"
              text="Publica aqui tu propiedad"
              label="Espacio para publicar"
              path="/Prop5"
            />
            <CardItem
              src="./images/juan.jpg"
              text="Publica aqui tu propiedad"
              label="Espacio para publicar "
              path="/Prop6"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
