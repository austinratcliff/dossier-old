import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import ReactMarkdown from 'react-markdown'
import './Post.css'

const Post = props => {
  const [show, setShow] = useState({ [props.post.id]: false })

  const handleShow = () => setShow({ ...show, [props.post.id]: true })
  const handleHide = () => setShow({ ...show, [props.post.id]: false })

  const date = new Date(props.post.published_at)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const month = months[date.getMonth()]
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  const year = date.getFullYear()

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
        {month + ' ' + day + ', ' + year}
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
