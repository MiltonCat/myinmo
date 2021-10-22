import React from "react";
import Map from "./Map";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="titulo">
        <h1>Catalan Propiedades</h1>
      </div>
      <div className="l-footer">
        <Map />
      </div>

      <ul className="r-footer">
        <li>
          <h2>Explora</h2>
          <ul className="box">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/About">Acerca de</a>
            </li>
          </ul>
        </li>

        <li className="features">
          <h2>¿Necesitas ayuda?</h2>

          <ul className="box h-box">
            <li>
              <a href="/comprar">Como comprar</a>
            </li>
            <li>
              <a href="/vender">Como vender</a>
            </li>
            <li>
              <a href="/alquilar">Como alquilar</a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="b-footer">
        <p>Todos los derechos reservados &copy; Milton Catalan Dev</p>
      </div>
    </footer>
  );
};
export default Footer;
