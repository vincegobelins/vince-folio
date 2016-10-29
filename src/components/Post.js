import React, { Component, PropTypes } from 'react'
import './Posts.css'

export default class Post extends Component {

  componentDidMount() {

  }

  render() {
    const{post, i} = this.props;

    return (
            <li className="item-post" key={i}>
              <a className="link-post" href="#">
                <div className="wrap-img-post">
                <img className="img-post" src={post._embedded["wp:featuredmedia"]["0"].media_details.sizes.thumbnail.source_url}/>
                </div>
                <p className="title-post">{post.title.rendered}</p>
              </a>
            </li>
    )
  }
}
