import React from "react";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/HomePage";
import TimerPage from "../pages/TimerPage";
import "../styles/styles.css";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/timer">
          <TimerPage />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
