import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import PickPlayer from './Pages/PickPlayer'
import Game from './Pages/Game'
import UserCard from './Components/UserCard'
import UserPanel from './Components/userPanel'
import ModalWinner from './Components/ModalWinner'
import { CardControll } from './styleGlobal' 
import Winner from './Controller/Winner'
import Rules from './Pages/GameRules'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function router() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Rules />
        </Route>
        <Route exact path="/game">
          <CardControll>
            <UserCard />
            <UserPanel />
          </CardControll>
          <Game />
        </Route>
        <Route exact path="/winner">
          <Winner />
        </Route>
      </Switch>
    </Router>
  );
}