import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/HomePage";
import TimerPage from "../pages/TimerPage";
import "../styles/styles.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/timer">
          <TimerPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
