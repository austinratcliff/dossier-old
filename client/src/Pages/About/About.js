import React from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import austin from './assets/austin.png'
import './About.css'

const About = props => {
  return (
    <Container className="About">
      <div className="v-center-header">
        <h1 className="header">
          <i
            className="fas fa-user"
            title="about"
          /> About
        </h1>
      </div>
      <Image
        className="austin"
        src={austin}
        alt="austin"
        fluid
      />
      <div className="text">
        <h2 className="description">
          <span className="highlight">
            Habitually curious.
          </span>
        </h2>
        <h2 className="description">
          <span className="highlight">
            Strategically detailed.
          </span>
        </h2>
        <h2 className="description">
          <span className="highlight">
            Politely daring.
          </span>
        </h2>
        <p className="bio">
          Austin is an Oklahoma-born, Chicago-living software developer with an affinity for clean code, astrology, and oversized sweatshirts. Originally a fashion marketing and journalism grad, his dream of being the next Anna Wintour changed after he learned web development at Dev Bootcamp. Now, when he's not at work, he can be found at his favorite coffee shop in Wicker Park, either working on yet another iteration of one of his side projects or online shopping.
        </p>
      </div>
      <i
        className="fas fa-angle-up fa-2x home"
        title="home"
        onClick={props.handleClick}
      />
    </Container>
  )
}

export default About
