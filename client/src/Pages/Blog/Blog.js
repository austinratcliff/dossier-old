import React, { useState, useEffect } from 'react'
import Post from './Post/Post'
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
          ? <div className="posts">
              { posts.map(post => <Post key={post.id} post={post} />).slice(0, 5) }
              <a
                className="dev-to"
                href="https://dev.to/austinratcliff/"
                target="_blank"
                rel="noopener noreferrer"
              >
                READ MORE AT DEV.TO
              </a>
            </div>
          : <h2 className="zero-posts">
              <i className="fas fa-circle-notch fa-2x fa-spin" />
            </h2>
      }
      {
        props.isMobile
          ? <i
              className="fas fa-angle-up fa-2x home"
              title="home"
              onClick={props.handleClick}
            />
          : <i
              className="fas fa-angle-left fa-2x home"
              title="home"
              onClick={props.handleClick}
            />
      }
    </div>
  )
}

export default Blog
