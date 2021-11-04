import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Game
import CreateGame from '../pages/game/createGame/CreateGame'
import ViewGame from '../pages/game/viewGame/ViewGame'
import UpdateGame from '../pages/game/updateGame/UpdateGame'
import DeleteGame from '../pages/game/deleteGame/DeleteGame'

// Profile
import CreateProfile from '../pages/profile/createProfile/CreateProfile'
import DeleteProfile from '../pages/profile/deleteProfile/DeleteProfile'
import UpdateProfile from '../pages/profile/updateProfile/UpdateProfile'

// User
import CreateUser from '../pages/user/createUser/CreateUser'
import ViewUser from '../pages/user/viewUser/ViewUser'


import Home from './../pages/home/Home'
import ViewPlay from '../pages/viewPlay/ViewPlay'
import Login from '../pages/login/Login'
import GuardedRoute from '../components/guardedRoute/GuardedRoute'
import Logout from '../pages/logout/Logout'
import CreateGenre from '../pages/createGenre/CreateGenre'
import NotFound from '../pages/notFound/NotFound'

function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <GuardedRoute path="/logout" component={Logout} />
        <Route path="/user/create" component={CreateUser} />
        <GuardedRoute path="/user/:id" component={ViewUser} />
        <GuardedRoute path="/game/create" component={CreateGame} />
        <GuardedRoute path="/game/view/:id" component={ViewGame} />
        <GuardedRoute path="/game/play/:id" component={ViewPlay} />
        <GuardedRoute path="/game/update/:id" component={UpdateGame} />
        <GuardedRoute path="/game/delete/:id" component={DeleteGame} />
        <GuardedRoute path="/profile/create" component={CreateProfile} />
        <GuardedRoute path="/profile/delete/:id" component={DeleteProfile} />
        <GuardedRoute path="/profile/update/:id" component={UpdateProfile} />
        <GuardedRoute path="/genre/create" component={CreateGenre} />

        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  )
}

export default Routes
