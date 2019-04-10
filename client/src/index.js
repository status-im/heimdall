import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import AppRouter from './routes'
import { CssBaseline } from '@material-ui/core';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
})

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
      <ApolloProvider client={client}>
        <AppRouter />
      </ApolloProvider>
  </React.Fragment>,
  document.getElementById('app')
)