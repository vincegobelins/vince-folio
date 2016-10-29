import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { nextPage, fetchPostsIfNeeded } from '../actions'
import Posts from '../components/Posts'
import BtnMore from '../components/BtnMore'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { TweenMax, Elastic, CSSPlugin, TimelineLite } from "gsap";
import './App.css'

class App extends Component {
  static propTypes = {
    page: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch, page } = this.props;
    dispatch(fetchPostsIfNeeded(page))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page) {
      const { dispatch, page } = nextProps
      dispatch(fetchPostsIfNeeded(page))
    }
  }

  handleChange = nextReddit => {
    this.props.dispatch(nextPage())
  }

  handleGetMoreClick = e => {
    e.preventDefault()

    const { dispatch, page } = this.props
    this.props.dispatch(nextPage())
  }

  render() {
    const { page, posts, isFetching, lastUpdated } = this.props
    const isEmpty = posts.length === 0
    return (
      <div>
      <Header />
        {isEmpty
          ? ''
          : <div style={{ opacity: isFetching ? 0.2 : 1 }}>
              <Posts isFetching={isFetching} posts={posts} />
            </div>
        }

        {isFetching
          ?
          <div className="loader">
            <p className="title-loader">Un instant ...</p>
          </div>
          : ''
        }
        <div>
          <BtnMore isFetching={isFetching} handleGetMoreClick={this.handleGetMoreClick}/>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { page, postsByVince } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsByVince || {
    isFetching: true,
    items: []
  }

  return {
    page,
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)
