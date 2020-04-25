import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import React from 'react'
import EditVideo from './EditVideo/index'
import StudentView from './pages/student/view'
import HeaderStudent from './pages/student/header'
const URL_VIDEO =
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4'
export default function RouterComponent() {
  return (
    <Router>
      <div>
        <HeaderStudent />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/editVideo">
            <EditVideo  />
          </Route>

          <Route path="/student/view">
            <StudentView />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
