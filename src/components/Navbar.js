import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBarTransparent: {
    backgroundColor: "#1565c0",
  },

  appBarSolid: {
    background: "#64b5f6",
  },
}));

function Navbar() {
  const classes = useStyles();
  const [navBackground, setNavBackground] = useState("appBarTransparent");
  const navRef = React.useRef();
  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 120;
      if (show) {
        setNavBackground("appBarSolid");
      } else {
        setNavBackground("appBarTransparent");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className={classes.root}>
      <header className={classes[navRef.current]}>
        <a href="#" class="site-logo" aria-label="homepage">
          <div className="nav-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src="./images/logo.jpeg" />
            </Link>
          </div>
        </a>
        <nav class="main-nav">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul
            className="nav__list"
            className={click ? "nav-menu active" : "nav-menu"}
          >
            <li className="nav__list-item">
              <a href="/" className="nav__link">
                Inicio
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" class="nav__link" onClick={closeMobileMenu}>
                Acerca de
              </a>
            </li>
            <li className="nav__list-item">
              <a href="./Comprar" class="nav__link" onClick={closeMobileMenu}>
                Guia de compra
              </a>
            </li>
            <li className="nav__list-item">
              <a href="./Vender" className="nav__link">
                Guia de Venta
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="nav__link">
                {/* link */}
              </a>
            </li>
          </ul>
        </nav>
        <nav className="account">
          <ul class="nav__list">
            <li class="nav__list-item">
              {/* <a class="nav__link nav__link--btn" href="#">
                Login
              </a> */}
            </li>
            <li className="nav__list-item">
              {/* <a
                class="nav__link nav__link--btn nav__link--btn--highlight"
                href="#"
              >
                Join
              </a> */}
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline"></Button>}
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
