import React, { Component, PropTypes } from 'react'
import { TweenMax, TimelineLite } from "gsap";
import Post from '../components/Post'
import './Popin.css'

export default class Popin extends Component {

  constructor() {
    super();
    this.state = {itemSelected : 0};
    this.tween = '';
  }

  componentDidMount() {
    this.tween = this.initTween();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.popin.isOpen == true) {
      this.setState({ itemSelected: nextProps.popin.itemSelected });
      this.open();
    }
  }

  open() {
    this.tween.restart();
  }

  close() {
    this.props.actions.closeItem();
    this.setState({ itemSelected: null });
  }

  initTween() {
    let bg = this.refs.bg;

    //if(bg) {
      //TweenMax.set(bg, {css:{visibility: 'hidden'}});
      let t = new TimelineLite();
      t.from(bg, 2, {css:{opacity: 0}}, 0);

      return t;
    //}

    //t.from(img, 1, {css:{y : 20}}, 0.5);
    /*
    t.from(subtitle, 0.5, {css:{opacity: 0, y : '100%'}});
    t.from(title, 0.5, {css:{opacity: 0, y : '100%'}}, '-=0.25');
    t.from(separator, 1, {css:{width: 0}}, "-=0.75");
    t.to(img, 1, {css:{width: '0px'}}); */
  }

  render() {
    const{posts, popin} = this.props
    const post = this.props.posts[this.state.itemSelected]

    return (
      <div>
        <div ref="bg" className="wrap-popin">
        <div className="popin">
          <div className="content-popin">
            <img className="thumb-popin" src={post ? post._embedded["wp:featuredmedia"]["0"].media_details.sizes.full.source_url : ''}></img>
            <button onClick={this.close.bind(this)}>Fermer</button>
            <div className="types-popin">
              <ul className="list-types">
                <li className="item-type">Java</li>
                <li className="item-type">ES6</li>
                <li className="item-type">Java</li>
              </ul>
            </div>
            <div className="wrap-title-popin">
              <h2 className="title-popin">{post ? post.title.rendered : ''}</h2>
            </div>
            <div className="wrap-title-date">
              <p className="date-popin">12 juillet 1994</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus sapien orci, ut imperdiet ex auctor et. Ut non leo a tortor euismod ultricies. Ut vulputate quam tincidunt purus faucibus, quis porttitor arcu mollis. Curabitur at venenatis ex. Donec convallis turpis ullamcorper nisi condimentum, sed bibendum enim aliquet. Maecenas vehicula vehicula arcu, vel gravida lorem scelerisque vitae. Nam porta dolor eu imperdiet mollis. Donec vitae congue dolor.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus sapien orci, ut imperdiet ex auctor et. Ut non leo a tortor euismod ultricies. Ut vulputate quam tincidunt purus faucibus, quis porttitor arcu mollis. Curabitur at venenatis ex. Donec convallis turpis ullamcorper nisi condimentum, sed bibendum enim aliquet. Maecenas vehicula vehicula arcu, vel gravida lorem scelerisque vitae. Nam porta dolor eu imperdiet mollis. Donec vitae congue dolor.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus sapien orci, ut imperdiet ex auctor et. Ut non leo a tortor euismod ultricies. Ut vulputate quam tincidunt purus faucibus, quis porttitor arcu mollis. Curabitur at venenatis ex. Donec convallis turpis ullamcorper nisi condimentum, sed bibendum enim aliquet. Maecenas vehicula vehicula arcu, vel gravida lorem scelerisque vitae. Nam porta dolor eu imperdiet mollis. Donec vitae congue dolor.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus sapien orci, ut imperdiet ex auctor et. Ut non leo a tortor euismod ultricies. Ut vulputate quam tincidunt purus faucibus, quis porttitor arcu mollis. Curabitur at venenatis ex. Donec convallis turpis ullamcorper nisi condimentum, sed bibendum enim aliquet. Maecenas vehicula vehicula arcu, vel gravida lorem scelerisque vitae. Nam porta dolor eu imperdiet mollis. Donec vitae congue dolor.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus sapien orci, ut imperdiet ex auctor et. Ut non leo a tortor euismod ultricies. Ut vulputate quam tincidunt purus faucibus, quis porttitor arcu mollis. Curabitur at venenatis ex. Donec convallis turpis ullamcorper nisi condimentum, sed bibendum enim aliquet. Maecenas vehicula vehicula arcu, vel gravida lorem scelerisque vitae. Nam porta dolor eu imperdiet mollis. Donec vitae congue dolor.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus sapien orci, ut imperdiet ex auctor et. Ut non leo a tortor euismod ultricies. Ut vulputate quam tincidunt purus faucibus, quis porttitor arcu mollis. Curabitur at venenatis ex. Donec convallis turpis ullamcorper nisi condimentum, sed bibendum enim aliquet. Maecenas vehicula vehicula arcu, vel gravida lorem scelerisque vitae. Nam porta dolor eu imperdiet mollis. Donec vitae congue dolor.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus sapien orci, ut imperdiet ex auctor et. Ut non leo a tortor euismod ultricies. Ut vulputate quam tincidunt purus faucibus, quis porttitor arcu mollis. Curabitur at venenatis ex. Donec convallis turpis ullamcorper nisi condimentum, sed bibendum enim aliquet. Maecenas vehicula vehicula arcu, vel gravida lorem scelerisque vitae. Nam porta dolor eu imperdiet mollis. Donec vitae congue dolor.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus sapien orci, ut imperdiet ex auctor et. Ut non leo a tortor euismod ultricies. Ut vulputate quam tincidunt purus faucibus, quis porttitor arcu mollis. Curabitur at venenatis ex. Donec convallis turpis ullamcorper nisi condimentum, sed bibendum enim aliquet. Maecenas vehicula vehicula arcu, vel gravida lorem scelerisque vitae. Nam porta dolor eu imperdiet mollis. Donec vitae congue dolor.</p>
          </div>
          </div>
        </div>
      </div>

    )
  }
}
