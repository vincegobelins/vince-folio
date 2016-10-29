import React, { Component, PropTypes } from 'react'
import { TweenMax, Elastic, CSSPlugin, TimelineLite } from "gsap";
import './Posts.css'

export default class Post extends Component {

  componentDidMount() {
    const{i} = this.props;
     let post = this.refs.post;
     let title = this.refs.title;
     let img = this.refs.img;
     let length = 6;
     let delay = i - (Math.floor( i / length) * length);
     let t = new TimelineLite();
     //TweenMax.set(sq1, {css:{opacity: 0}});

     t.from(post, 0.25, {css:{opacity: 0, y : 20}}, delay / 5);
     //t.from(img, 1, {css:{y : 20}}, 0.5);
     t.from(title, 1, {css:{opacity: 0, y : '100%'}});
  }

  render() {
    const{post, i} = this.props;

    return (
            <li ref="post" className="item-post" key={i}>
              <a className="link-post" href="#">
                <div className="wrap-img-post">
                <img ref="img" className="img-post" src={post._embedded["wp:featuredmedia"]["0"].media_details.sizes.thumbnail.source_url}/>
                </div>
                <div className="wrap-title-post">
                  <p ref="title" className="title-post">{post.title.rendered}</p>
                </div>
              </a>
            </li>
    )
  }
}
