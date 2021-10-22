import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Provider } from "react-redux";
import Home from "./components/pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Vender from "./components/Vender";
import Comprar from "./components/Comprar";
import Prop1 from "./components/propiedades/Prop1";
import Prop2 from "./components/propiedades/Prop2";
import Prop3 from "./components/propiedades/Prop3";
import Prop4 from "./components/propiedades/Prop4";
import Prop5 from "./components/propiedades/Prop5";
import Prop6 from "./components/propiedades/Prop6";
import Results from "./components/results";
import Details from "./components/details";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./temaConfig";

import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/products" component={Products} />
            <Route path="/vender" component={Vender} />
            <Route path="/comprar" component={Comprar} />
            <Route path="/Prop1" component={Prop1} />
            <Route path="/Prop2" component={Prop2} />
            <Route path="/Prop3" component={Prop3} />
            <Route path="/Prop4" component={Prop4} />
            <Route path="/Prop5" component={Prop5} />
            <Route path="/Prop6" component={Prop6} />
            <Route path="/" component={Prop5} />
            <Route path="/services" component={Services} />
            <Route path="/details/:itemId" component={Details} />
            <Redirect from="/" to={Home} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
