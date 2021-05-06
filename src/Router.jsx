import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import PickPlayer from './Pages/PickPlayer'
import Game from './Pages/Game'
import UserCard from './Components/UserCard'
import UserPanel from './Components/userPanel'
import { CardControll } from './styleGlobal' 

export default function router() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/">
          <PickPlayer />
        </Route> */}
        <Route path="/">
          <Game />
          <CardControll>
          <UserCard />
          <UserPanel />
        </CardControll>
        </Route>
      </Switch>
    </Router>
  );
}