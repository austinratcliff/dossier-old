import React from 'react'
import './Contact.css'

const Contact = props => {
  return (
    <div className="Contact">
      <h1 className="header">
        <i
          className="fas fa-comment-dots"
          title="contact"
        /> Contact
      </h1>
      <i
        className="fas fa-angle-down fa-2x home"
        title="home"
        onClick={props.handleClick}
      />
    </div>
  )
}

export default Contact
