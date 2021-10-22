import React, { useState } from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import "../Cards.css";
import CardItem from "../CardItem";
import Custo from "./Custo5";
import Footer from "../Footer";

import "./Prop1.css";

const Prop1 = () => {
  let data = [
    {
      id: 1,
      imgSrc: "./images/barby/foto5.jpeg",
    },
    {
      id: 2,
      imgSrc: "./images/barby/foto8.jpeg",
    },
    {
      id: 3,
      imgSrc: "./images/barby/foto17.jpeg",
    },
    {
      id: 4,
      imgSrc: "./images/barby/foto12.jpeg",
    },
    {
      id: 5,
      imgSrc: "./images/barby/foto16.jpeg",
    },
    {
      id: 6,
      imgSrc: "./images/barby/foto6.jpeg",
    },
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              keys={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img
                src={item.imgSrc}
                style={{
                  width: "100%",
                  height: "10%",
                  borderRadius: "20px",
                  paddingTop: "135px",
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="texto">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            bgcolor: "background.paper",
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: 1,
            fontWeight: "bold",
          }}
        >
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
              objectFit: "cover",
              borderRadius: 3,
            }}
            alt="The house from the offer."
            src="./images/barby/foto1.jpeg"
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              m: 3,
              minWidth: { md: 350 },
            }}
          >
            <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
              Mascardi 588 Departamento 15
            </Box>
            <Box
              component="span"
              sx={{ color: "primary.main", fontSize: 20, padding: 2 }}
            >
              USD 120.000
            </Box>
            <Box
              sx={{
                mt: 1.5,
                p: 0.5,
                backgroundColor: (theme) =>
                  alpha(theme.palette.primary.main, 0.1),
                borderRadius: "5px",
                color: "primary.main",
                fontWeight: "medium",
                display: "flex",
                fontSize: 12,
                alignItems: "center",
                "& svg": {
                  fontSize: 21,
                  mr: 0.5,
                },
              }}
            >
              Metros cubiertos 43.6 - 2 Ambientes - Sin cochera - Muy buena
              ubicacion - Excelente para inversion
            </Box>
          </Box>
        </Box>
        <Custo />
      </div>
      <div className="casas">
        <div className="cards">
          <h1>Propiedades que te pueden interesar</h1>
          <div className="cards__container">
            <div className="cards__wrapper">
              <ul className="cards__items">
                <CardItem
                  src="images/Caleuche/casaCa.jpeg"
                  text="Casa en Barrio con Excelente vistas"
                  label="Casa en Caleuche"
                  price=" Valor: 135.000 usd"
                  path="/Prop2"
                />
                <CardItem
                  src="images/Curruhue/foto1.jpg"
                  text="En el centro de la ciudad podras encontrar este Departamento"
                  label="Departameton nuevo y Centrico"
                  price="Valor: 115.000 usd"
                  path="/Prop3"
                />
                <CardItem
                  src="./images/Rudecindo/foto1.jpeg"
                  text="Departamento de 3 habitaciones"
                  label="Departamento Centrico"
                  price="Valor: 123.000 usd"
                  path="/Prop4"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Prop1;
