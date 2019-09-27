import React, { useState } from 'react'
import Badge from 'react-bootstrap/Badge'
import Modal from 'react-bootstrap/Modal'
import ReactMarkdown from 'react-markdown'
import './Project.css'

const Project = props => {
  const [show, setShow] = useState({ [props.project._id]: false })

  const handleShow = () => setShow({ ...show, [props.project._id]: true })
  const handleHide = () => setShow({ ...show, [props.project._id]: false })

  return (
    <div className="Project">
      <h2
        className="name"
        onClick={handleShow}
      >
        <span className="highlight-hover">
          {props.project.name}
        </span>
      </h2>
      <Modal
        show={show[props.project._id]}
        onHide={handleHide}
        animation={false}
        size="lg"
        centered
        scrollable
      >
        <Modal.Header>
          <Modal.Title>
            {props.project.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReactMarkdown source={props.project.description} />
        </Modal.Body>
        <Modal.Footer>
          <a
            className="url"
            href={props.project.projectURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fas fa-laptop-code"
              title="project"
            /> Visit
          </a>
          <a
            className="url"
            href={props.project.githubURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fab fa-github"
              title="github"
            /> GitHub
          </a>
          {
            props.project.badges.map(badge => <Badge key={badge} className={badge} pill>{badge}</Badge>)
          }
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Project
