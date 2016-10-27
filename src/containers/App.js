import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { nextPage, fetchPostsIfNeeded } from '../actions'
import Posts from '../components/Posts'

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

  handleRefreshClick = e => {
    e.preventDefault()

    const { dispatch, page } = this.props
    this.props.dispatch(nextPage())
  }

  render() {
    const { page, posts, isFetching, lastUpdated } = this.props
    const isEmpty = posts.length === 0
    return (
      <div>
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
          {!isFetching &&
            <a href="#"
               onClick={this.handleRefreshClick.bind(this)}>
              Refresh
            </a>
          }
        </p>
        {isEmpty
          ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
          : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
              <Posts posts={posts} />
            </div>
        }
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
