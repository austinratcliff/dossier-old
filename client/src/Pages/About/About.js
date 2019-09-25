import React from 'react'
import './About.css'

const About = props => {
  return (
    <div className="About">
      <h1 className="header">
        <i
          className="fas fa-user"
          title="about"
        /> About
      </h1>
      <i
        className="fas fa-angle-up fa-2x home"
        title="home"
        onClick={props.handleClick}
      />
    </div>
  )
}

export default About
