import React, { useState, useEffect } from 'react'
import './Blog.css'

const Blog = props => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(process.env.REACT_APP_BLOG_URL, {
      headers: {
        'api_key': process.env.REACT_APP_BLOG_API_KEY
      }
    })
      .then(res => res.json())
      .then(posts => setPosts(posts))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="Blog">
      <h1 className="header">
        <i
          className="fas fa-align-left"
          title="blog"
        /> Blog
      </h1>
      {
        posts.length > 0
          ? posts.map(post => <p key={post.id}>{post.title}</p>).slice(0, 5)
          : <h2 className="zero-posts">
              <span className="highlight">
                No posts yet...
              </span>
            </h2>
      }
      <i
        className="fas fa-angle-left fa-2x home"
        title="home"
        onClick={props.handleClick}
      />
    </div>
  )
}

export default Blog
