import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { NewCourse } from './pages/NewCourse'
import { GolfCourse } from './pages/GolfCourse'
import { GolfCourses } from './pages/GolfCourses'
import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'

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
      <Route exact path="/course">
        <GolfCourse />
      </Route>
      <Route exact path="/courses">
        <GolfCourses />
      </Route>
      <Route exact path="/login">
        <SignUp />
      </Route>
    </Switch>
  )
}
