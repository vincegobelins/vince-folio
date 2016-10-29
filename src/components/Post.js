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

     t.from(post, 0.5, {css:{opacity: 0, rotationX : '20deg'}}, delay / 5);
     //t.from(img, 1, {css:{y : 20}}, 0.5);
     t.from(title, 1, {css:{opacity: 0, y : '100%'}});
  }

  onPostClick() {
    alert('ok');
    let post = this.refs.post;
    let t = new TimelineLite();
    //TweenMax.set(sq1, {css:{opacity: 0}});

    t.to(post, 0.25, {css:{opacity: 0, y : 20}}, 2 / 5);
  }

  render() {
    const{post, i} = this.props;

    return (
            <li ref="post" className="item-post" key={i}>
              <a className="link-post" href="#" onClick={this.onPostClick.bind(this)}>
                <div className="wrap-img-post">
                  <img ref="img" className="img-post" src={post._embedded["wp:featuredmedia"]["0"].media_details.sizes.thumbnail.source_url}/>
                </div>
                <div className="wrap-item-post-hover">
                  <div className="types">
                    <ul className="list-types">
                    {post.pure_taxonomies.type.map((type, i) =>
                      <li className="item-type" key={i}>{type.name}</li>
                    )}
                    </ul>
                  </div>
                  <div className="show-more"></div>
                </div>
                <div className="content-post">
                  <div className="wrap-subtitle-post">
                    <p ref="subtitle" className="subtitle-post" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                  </div>
                  <div className="wrap-title-post">
                    <p ref="title" className="title-post">{post.title.rendered}</p>
                  </div>
                </div>
              </a>
            </li>
    )
  }
}
