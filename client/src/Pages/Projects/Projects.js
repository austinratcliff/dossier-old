import React from 'react'
import './Projects.css'

const Projects = props => {
  return (
    <div className="Projects">
      <h1 className="header">
        <i
          className="fas fa-code"
          title="projects"
        /> Projects
      </h1>
      <i
        className="fas fa-angle-right fa-2x home"
        title="home"
        onClick={props.handleClick}
      />
    </div>
  )
}

export default Projects
