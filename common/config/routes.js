import { Router, Route } from 'react-router'
import React from 'react'
import RouteDemo from '../routers/Demo'

const routes = (
    <Router>
      <Route path="/" component={RouteDemo} />
    </Router>
)

export default routes
