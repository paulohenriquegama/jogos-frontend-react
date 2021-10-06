import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './../pages/home/Home'
import CreateGame from '../pages/createGame/CreateGame';

function Routes() {
  
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game/create" component={CreateGame} />
      </Switch>
    </div>
  )
}

export default Routes;
