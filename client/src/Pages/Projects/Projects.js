import React, { useState, useEffect } from 'react'
import Project from './Project/Project'
import './Projects.css'

const Projects = props => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(projects => setProjects(projects))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="Projects">
      <h1 className="header">
        <i
          className="fas fa-code"
          title="projects"
        /> Projects
      </h1>
      {
        projects.length > 0
          ? <div className="projects">
              { projects.map(project => <Project key={project._id} project={project} />) }
            </div>
          : <h2 className="zero-projects">
              <i className="fas fa-circle-notch fa-2x fa-spin" />
            </h2>
      }
      {
        props.isMobile
          ? <i
              className="fas fa-angle-up fa-2x home"
              title="home"
              onClick={props.handleClick}
            />
          : <i
              className="fas fa-angle-right fa-2x home"
              title="home"
              onClick={props.handleClick}
            />
      }
    </div>
  )
}

export default Projects
