import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { nextPage, fetchPostsIfNeeded, fetchLength } from '../actions'
import Posts from '../components/Posts'
import BtnMore from '../components/BtnMore'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './App.css'

class App extends Component {
  static propTypes = {
    page: PropTypes.object.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch, page } = this.props;
    dispatch(fetchPostsIfNeeded(page))
    dispatch(fetchLength(page))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.page.cursor !== this.props.page.cursor) {
      const { dispatch, page } = nextProps
      dispatch(fetchPostsIfNeeded(page))
    }
  }

  handleChange = nextReddit => {
    this.props.dispatch(nextPage())
  }

  handleGetMoreClick = e => {
    e.preventDefault()
    this.props.dispatch(nextPage())
  }

  render() {
    const { posts, page, isFetching } = this.props
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
          <BtnMore isFetching={isFetching} page={page} handleGetMoreClick={this.handleGetMoreClick}/>
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
