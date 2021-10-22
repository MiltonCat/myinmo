import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mapa: {
    boxShadow: "20px 10px 10px rgb(0 0 0 / 20%)",
  },
}));

const Map = () => {
  const classes = useStyles();
  return (
    // <div className={classes.root}>
    <div className={classes.mapa}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.3838012877927!2d-71.35147978498242!3d-40.156007679413186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96110e772e8e1355%3A0xbd8b63d76cdb583a!2sAv.%20San%20Mart%C3%ADn%20946%2C%20Q8370%20San%20Martin%20de%20los%20Andes%2C%20Neuqu%C3%A9n!5e0!3m2!1ses-419!2sar!4v1634595922755!5m2!1ses-419!2sar"
        width="400"
        height="300"
        // style="border:0;"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
    // </div>
  );
};

export default Map;
