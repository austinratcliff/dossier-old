import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import ReactMarkdown from 'react-markdown'
import './Post.css'

const Post = props => {
  const [show, setShow] = useState({ [props.post.id]: false })

  const handleShow = () => setShow({ ...show, [props.post.id]: true })
  const handleHide = () => setShow({ ...show, [props.post.id]: false })

  return (
    <div className="Post">
      <h2
        className="title"
        onClick={handleShow}
      >
        <span className="highlight-hover">
          {props.post.title}
        </span>
      </h2>
      <p className="date">
        {props.post.published_at}
      </p>
      <Modal
        show={show[props.post.id]}
        onHide={handleHide}
        animation={false}
        size="lg"
        centered
        scrollable
      >
        <Modal.Header>
          <Modal.Title>
            {props.post.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReactMarkdown source={props.post.body_markdown} />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Post
