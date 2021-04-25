import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PickPlayer from './Pages/PickPlayer'
import Game from './Pages/Game'

export default function router() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PickPlayer />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
      </Switch>
    </Router>
  );
}