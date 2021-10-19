import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './../pages/home/Home'
import CreateGame from '../pages/createGame/CreateGame'
import ViewGame from '../pages/viewGame/ViewGame'
import ViewPlay from '../pages/viewPlay/ViewPlay'
import NotFound from '../pages/notFound/NotFound'
import CreateUser from '../pages/createUser/CreateUser'
import ViewUser from '../pages/viewUser/ViewUser'
import CreateProfile from '../pages/createProfile/CreateProfile'
import DeleteGame from '../pages/deleteGame/DeleteGame'
import DeleteProfile from '../pages/deleteProfile/DeleteProfile'

function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/user/create" component={CreateUser} />
        <Route path="/user/view/:id" component={ViewUser} />
        <Route path="/game/create" component={CreateGame} />
        <Route path="/game/view/:id" component={ViewGame} />
        <Route path="/game/play/:id" component={ViewPlay} />
        <Route path="/game/delete/:id" component={DeleteGame} />
        <Route path="/profile/create" component={CreateProfile} />
        <Route path="/profile/delete/:id" component={DeleteProfile} />

        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  )
}

export default Routes
