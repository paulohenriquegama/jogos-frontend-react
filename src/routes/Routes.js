import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './../pages/home/Home'
import CreateGame from '../pages/createGame/CreateGame';
import ViewGame from '../pages/viewGame/ViewGame';
import ViewPlay from '../pages/viewPlay/ViewPlay';
import NotFound from '../pages/notFound/NotFound';


function Routes() {
  
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game/create" component={CreateGame} />
        <Route path="/game/view/:id" component={ViewGame} />
        <Route path="/game/play/:id" component={ViewPlay} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  )
}

export default Routes;
