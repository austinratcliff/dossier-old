import React from 'react'
import './Blog.css'

const Blog = props => {
  return (
    <div className="Blog">
      <h1 className="header">
        <i
          className="fas fa-align-left"
          title="blog"
        /> Blog
      </h1>
      <i
        className="fas fa-angle-left fa-2x home"
        title="home"
        onClick={props.handleClick}
      />
    </div>
  )
}

export default Blog
