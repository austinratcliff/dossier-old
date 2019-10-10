import React, { useState } from 'react'
import Badge from 'react-bootstrap/Badge'
import Modal from 'react-bootstrap/Modal'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
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
          {
            props.project.projectURL
              ? <a
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
              : <OverlayTrigger
                  placement='bottom'
                  overlay={<Tooltip>No public website yet</Tooltip>}
                >
                  <div className="url">
                    <i
                      className="fas fa-laptop-code"
                      title="project"
                    /> Visit
                  </div>
                </OverlayTrigger>
          }
          {
            props.project.githubURL
              ? <a
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
              : <OverlayTrigger
                  placement='bottom'
                  overlay={<Tooltip>No public GitHub repo</Tooltip>}
                >
                  <div className="url">
                    <i
                      className="fab fa-github"
                      title="github"
                    /> GitHub
                  </div>
                </OverlayTrigger>
          }
          {
            props.project.badges.map(badge => <Badge key={badge} className={badge} pill>{badge}</Badge>)
          }
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Project
