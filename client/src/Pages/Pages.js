import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import Home from './Home/Home'
import About from './About/About'
import Blog from './Blog/Blog'
import Contact from './Contact/Contact'
import Projects from './Projects/Projects'

class Pages extends Component {
  constructor() {
    super()

    this.state = {
      pages: {
        home: true,
        about: false,
        blog: false,
        contact: false,
        projects: false
      }
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const pages = {...this.state.pages}

    for (const page in pages) {
      event.target.title === page ? pages[page] = true : pages[page] = false
    }

    this.setState({
      pages: pages
    })
  }

  render() {
    return (
      <div className="Pages">
        <Home handleClick={this.handleClick} />
        <CSSTransition
          classNames="about"
          in={this.state.pages.about}
          timeout={1000}
          unmountOnExit
        >
          <About handleClick={this.handleClick} />
        </CSSTransition>
        <CSSTransition
          classNames="blog"
          in={this.state.pages.blog}
          timeout={1000}
          unmountOnExit
        >
          <Blog handleClick={this.handleClick} />
        </CSSTransition>
        <CSSTransition
          classNames="contact"
          in={this.state.pages.contact}
          timeout={1000}
          unmountOnExit
        >
          <Contact handleClick={this.handleClick} />
        </CSSTransition>
        <CSSTransition
          classNames="projects"
          in={this.state.pages.projects}
          timeout={1000}
          unmountOnExit
        >
          <Projects handleClick={this.handleClick} />
        </CSSTransition>
      </div>
    )
  }
}

export default Pages
