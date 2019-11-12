import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Home.css'

const Home = props => {
  return (
    <div className="Home">
      <Navbar expand='lg' fixed='top'>
        <Navbar.Toggle>
          <i className='fas fa-ellipsis-h' title='menu' />
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav>
            <i
              className='fas fa-user fa-2x icon about'
              title='about'
              onClick={props.handleClick}
            />
            <i className='fas fa-align-left fa-2x icon blog'
              title='blog'
              onClick={props.handleClick}
            />
            <i
              className='fas fa-comment-dots fa-2x icon contact'
              title='contact'
              onClick={props.handleClick}
            />
            <i
              className='fas fa-code fa-2x icon projects'
              title='projects'
              onClick={props.handleClick}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <h1 className="name">Austin Ratcliff</h1>
      <h2 className="title">Software Developer</h2>
    </div>
  )
}

export default Home
