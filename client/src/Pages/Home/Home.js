import React from 'react'
import './Home.css'

const Home = props => {
  return (
    <div className="Home">
      <h1 className="name">Austin Ratcliff</h1>
      <h2 className="title">Software Developer</h2>
      <i
        className="fas fa-user fa-2x icon about"
        title="about"
        onClick={props.handleClick}
      />
      <i
        className="fas fa-align-left fa-2x icon blog"
        title="blog"
        onClick={props.handleClick}
      />
      <i
        className="fas fa-comment-dots fa-2x icon contact"
        title="contact"
        onClick={props.handleClick}
      />
      <i
        className="fas fa-code fa-2x icon projects"
        title="projects"
        onClick={props.handleClick}
      />
    </div>
  )
}

export default Home
