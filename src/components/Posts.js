import React, { Component, PropTypes } from 'react'

export default class Posts extends Component {

  render() {
    const{posts} = this.props;

    return (
      <ul>
        {posts.map((post, i) =>
          <li key={i}>{post.title.rendered}</li>
        )}
      </ul>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}
