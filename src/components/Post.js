import React, { Component, PropTypes } from 'react'
import { TimelineLite } from "gsap";
import './Posts.css'

export default class Post extends Component {

  state = {
    class: ''
  }

  componentDidMount() {
    const{i} = this.props;
     let post = this.refs.post;
     let title = this.refs.title;
     let subtitle = this.refs.subtitle;
     let separator = this.refs.separator;
     let img = this.refs.img;
     let length = 6;
     let delay = i - (Math.floor( i / length) * length);
     let t = new TimelineLite({onComplete: this.addTransition.bind(this)});;
     //TweenMax.set(sq1, {css:{opacity: 0}});

     t.from(post, 0.5, {css:{opacity: 0, rotationX : '20deg'}}, delay / 4);
     //t.from(img, 1, {css:{y : 20}}, 0.5);
     t.from(subtitle, 0.5, {css:{opacity: 0, y : '100%'}});
     t.from(title, 0.5, {css:{opacity: 0, y : '100%'}}, '-=0.25');
     t.from(separator, 1, {css:{width: 0}}, "-=0.75");
     t.to(img, 1, {css:{width: '0px'}});
  }

  addTransition(el) {
    this.setState({ class: 'add-transition' })
  }

  render() {
    const{post, i} = this.props;

    return (
            <li ref="post" className="wrap-item-post" key={i}>
              <div className="item-post">
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
                <div ref="img" className="wrap-item-post-loading"></div>
                <div className="content-post">
                  <div className="wrap-subtitle-post">
                    <p ref="subtitle" className="subtitle-post" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                  </div>
                  <div ref="separator" className={'separator-post ' + this.state.class}></div>
                  <div className="wrap-title-post">
                    <p ref="title" className="title-post">{post.title.rendered}</p>
                  </div>
                </div>
              </a>
              </div>
            </li>
    )
  }
}

Post.propTypes = {
  i: PropTypes.number.isRequired
}
