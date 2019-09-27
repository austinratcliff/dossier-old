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
              <span className="highlight">
                No projects yet...
              </span>
            </h2>
      }
      <i
        className="fas fa-angle-right fa-2x home"
        title="home"
        onClick={props.handleClick}
      />
    </div>
  )
}

export default Projects
