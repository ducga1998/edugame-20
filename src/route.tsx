import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import React from 'react'
import EditVideo from './EditVideo'
import StudentView from './pages/student/view'
import HeaderStudent from './pages/student/header'
export default function RouterComponent() {
  return (
    <Router>
      <div>
        <HeaderStudent />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/editVideo">
            <EditVideo />
          </Route>

          <Route path="/student/view">
            <StudentView />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
