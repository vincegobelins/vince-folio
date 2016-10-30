import React, { Component, PropTypes } from 'react'
import { TimelineLite } from "gsap";
import './Posts.css'

export default class Post extends Component {

  componentDidMount() {
    const{i} = this.props;
     let post = this.refs.post;
     let title = this.refs.title;
     let subtitle = this.refs.subtitle;
     let separator = this.refs.separator;
     //let img = this.refs.img;
     let length = 6;
     let delay = i - (Math.floor( i / length) * length);
     let t = new TimelineLite();
     //TweenMax.set(sq1, {css:{opacity: 0}});

     t.from(post, 0.5, {css:{opacity: 0, rotationX : '20deg'}}, delay / 5);
     //t.from(img, 1, {css:{y : 20}}, 0.5);
     t.from(title, 0.5, {css:{opacity: 0, y : '100%'}});
     t.from(separator, 0.5, {css:{opacity: 0, width: 0}});
     t.from(subtitle, 0.5, {css:{opacity: 0, y : '100%'}});
  }

  render() {
    const{post, i} = this.props;

    return (
            <li ref="post" className="item-post" key={i}>
              <a target="_blank" className="link-post" href={post.acf.link}>
                <div className="wrap-img-post">
                  <img alt="vincegobelins" ref="img" className="img-post" src={post._embedded["wp:featuredmedia"]["0"].media_details.sizes.portfolio.source_url}/>
                </div>
                <div className="wrap-item-post-hover">
                  <div className="types">
                    <ul className="list-types">
                    {post.pure_taxonomies.type.map((type, i) =>
                      <li className="item-type" key={i}>{type.name}</li>
                    )}
                    </ul>
                  </div>
                  <div className="show-more"><i className="fa fa-link" aria-hidden="true"></i></div>
                </div>
                <div className="content-post">
                  <div className="wrap-subtitle-post">
                    <p ref="subtitle" className="subtitle-post" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                  </div>
                  <div ref="separator" className="separator-post"></div>
                  <div className="wrap-title-post">
                    <p ref="title" className="title-post">{post.title.rendered}</p>
                  </div>
                </div>
              </a>
            </li>
    )
  }
}

Post.propTypes = {
  i: PropTypes.number.isRequired
}
