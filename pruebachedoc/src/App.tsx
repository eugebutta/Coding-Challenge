import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/Movies";
import { GET_ALL } from "./Redux/constants";
import JSON from "./data/sample.json";
import Series from "./Components/Series/Series";
import { ThemeProvider } from "styled-components";

const LightTheme = {
  pageBackground: "#457fb4",
  titleColor: "#dc658b",
  tagLineColor: "lavander",
  color: "#16191e"
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "#dc658b",
  tagLineColor: "lavander",
  color:"white"

};

export const  themes  :  { [key: string]: any }   = {
  light: LightTheme,
  dark: DarkTheme,
};

function App() {
  const dispatch = useDispatch();
  dispatch({ type: GET_ALL, payload: JSON });
  return (
    <div>
      <ThemeProvider theme={themes}>
        <Header />
        <React.Fragment>
          <Route exact path={["/Home", "/"]} component={Home} />
          <Route exact path="/Movies" component={Movies} />
          <Route exact path="/Series" component={Series} />
        </React.Fragment>
      <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
