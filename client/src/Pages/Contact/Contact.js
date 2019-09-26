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
      <h2 className="message">
        <span className="highlight">
          Say hello!
        </span>
      </h2>
      <div className="contacts">
        <i
          className="far fa-envelope fa-2x icon"
          title="email"
        />
        <a
          className="contact"
          href="mailto:hello@austinratcliff.com"
        >
          <span className="highlight-hover">
            hello@austinratcliff.com
          </span>
        </a>
        <i
          className="fab fa-linkedin-in fa-2x icon"
          title="linkedin"
        />
        <a
          className="contact"
          href="https://linkedin.com/in/austinratcliff/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="highlight-hover">
            @austinratcliff
          </span>
        </a>
        <i
          className="fab fa-github fa-2x icon"
          title="github"
        />
        <a
          className="contact"
          href="https://github.com/austinratcliff/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="highlight-hover">
            @austinratcliff
          </span>
        </a>
        <i
          className="fab fa-instagram fa-2x icon"
          title="instagram"
        />
        <a
          className="contact"
          href="https://instagram.com/austin.ratcliff/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="highlight-hover">
            @austin.ratcliff
          </span>
        </a>
      </div>
      <i
        className="fas fa-angle-down fa-2x home"
        title="home"
        onClick={props.handleClick}
      />
    </div>
  )
}

export default Contact
