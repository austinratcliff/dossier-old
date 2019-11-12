import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Menu.css'

const Menu = props => {
  return (
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
  )
}

export default Menu
