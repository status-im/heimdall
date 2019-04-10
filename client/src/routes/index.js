import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import Home from './home'
import NotFound from './notFound'

const styles = {
  root: {
    margin: 20,
    padding: 20,
    maxWidth: 400,
  }
}

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default withStyles(styles)(AppRouter)