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
import UpdateProfile from '../pages/updateProfile/UpdateProfile'
import UpdateGame from '../pages/updateGame/UpdateGame'
import Login from '../pages/login/Login'
import GuardedRoute from '../components/guardedRoute/GuardedRoute'
import Logout from '../pages/logout/Logout'

function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <GuardedRoute path="/logout" component={Logout} />
        <Route path="/user/create" component={CreateUser} />
        <GuardedRoute path="/user/view/:id" component={ViewUser} />
        <GuardedRoute path="/game/create" component={CreateGame} />
        <GuardedRoute path="/game/view/:id" component={ViewGame} />
        <GuardedRoute path="/game/play/:id" component={ViewPlay} />
        <GuardedRoute path="/game/update/:id" component={UpdateGame} />
        <GuardedRoute path="/game/delete/:id" component={DeleteGame} />
        <GuardedRoute path="/profile/create" component={CreateProfile} />
        <GuardedRoute path="/profile/delete/:id" component={DeleteProfile} />
        <GuardedRoute path="/profile/update/:id" component={UpdateProfile} />

        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  )
}

export default Routes
