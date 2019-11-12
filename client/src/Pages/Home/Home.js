import React from 'react'
import Menu from './Menu/Menu'
import './Home.css'

const Home = props => {
  return (
    <div className="Home">
      <Menu handleClick={props.handleClick} />
      <h1 className="name">Austin Ratcliff</h1>
      <h2 className="title">Software Developer</h2>
    </div>
  )
}

export default Home
