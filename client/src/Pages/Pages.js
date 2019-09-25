import React, { Component } from 'react'
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

  setPage() {
    const pages = {...this.state.pages}
    let pageNameToSet
    let pageToSet

    for (const page in pages) {
      if (pages[page]) {
        pageNameToSet = page
      }
    }

    switch (pageNameToSet) {
      case 'home':
        pageToSet = <Home handleClick={this.handleClick} />
        break
      case 'about':
        pageToSet = <About handleClick={this.handleClick} />
        break
      case 'blog':
        pageToSet = <Blog handleClick={this.handleClick} />
        break
      case 'contact':
        pageToSet = <Contact handleClick={this.handleClick} />
        break
      case 'projects':
        pageToSet = <Projects handleClick={this.handleClick} />
        break
      default:
        pageToSet = null
    }

    return pageToSet
  }

  render() {
    const page = this.setPage()
    return <div className="Pages">{page}</div>
  }
}

export default Pages
