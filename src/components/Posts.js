import React, { Component, PropTypes } from 'react'
import Post from '../components/Post'
import './Posts.css'

export default class Posts extends Component {

  render() {
    const{posts, actions} = this.props;

    return (
      <div className="posts">
        <ul className="list-posts">
          {posts.map((post, i) =>
            <Post post={post} actions={actions} i={i} key={i} />
          )}
        </ul>
      </div>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}
