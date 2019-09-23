import React, { useState, useEffect } from 'react'
import logo from '../logo.svg'
import './App.css'

const App = () => {
  const [tests, setTests] = useState([])

  useEffect(() => {
    fetch('/api/test')
      .then(res => res.json())
      .then(tests => setTests(tests))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {
          tests.map(test => <p key={test._id}>{test.test}</p>)
        }
      </header>
    </div>
  )
}

export default App
