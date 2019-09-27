import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react'
import Pages from '../Pages/Pages'
import Admin from '../Admin/Admin'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Security
          issuer={process.env.REACT_APP_OKTA_ORG_URL + '/oauth2/default'}
          clientId={process.env.REACT_APP_OKTA_CLIENT_ID}
          redirectUri={window.location.origin + '/implicit/callback'}
        >
          <Route
            path='/'
            exact={true}
            component={Pages}
          />
          <SecureRoute
            path='/admin'
            component={Admin}
          />
          <Route
            path='/implicit/callback'
            component={ImplicitCallback}
          />
        </Security>
      </Router>
    </div>
  )
}

export default App
