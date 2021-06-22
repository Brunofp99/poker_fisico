import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import PickPlayer from './Pages/PickPlayer'
import Game from './Pages/Game'
import UserCard from './Components/UserCard'
import UserPanel from './Components/userPanel'
import { CardControll } from './styleGlobal' 
import Winner from './Controller/Winner'

export default function router() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/">
          <PickPlayer />
        </Route> */}
        <Route exact path="/">
          <Game />
          <CardControll>
            <UserCard />
            <UserPanel />
          </CardControll>
        </Route>
        <Route exact path="/winner">
          <Winner />
        </Route>
      </Switch>
    </Router>
  );
}