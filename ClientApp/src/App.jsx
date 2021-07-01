import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { NewCourse } from './pages/NewCourse'
import { GolfCourse } from './pages/GolfCourse'
import { GolfCourses } from './pages/GolfCourses'
import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'
import { EditCourse } from './pages/EditCourse'

import './custom.scss'

export function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/new">
        <NewCourse />
      </Route>
      <Route exact path="/courses/:id">
        <GolfCourse />
      </Route>
      <Route exact path="/courses">
        <GolfCourses />
      </Route>
      <Route exact path="/signin">
        <SignUp />
      </Route>
      <Route exact path="/courses/:id/edit">
        <EditCourse />
      </Route>
    </Switch>
  )
}
