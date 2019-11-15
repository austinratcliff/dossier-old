import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Pages from '../Pages/Pages'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route
          path='/'
          exact={true}
          component={Pages}
        />
      </Router>
    </div>
  )
}

export default App
