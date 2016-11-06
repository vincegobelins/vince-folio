import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from '../actions'
import Posts from '../components/Posts'
import BtnMore from '../components/BtnMore'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Popin from '../components/Popin'
import './App.css'

class App extends Component {
  static propTypes = {
    page: PropTypes.object.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
  }

  componentDidMount() {
    const { page, actions } = this.props;

    this.fetchPostsIfNeeded(page)
    this.fetchLength(page)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.page.cursor !== this.props.page.cursor) {
      const { page } = nextProps
      this.fetchPostsIfNeeded(page)
    }
  }

  fetchPostsIfNeeded(page) {
    this.props.actions.fetchPostsIfNeeded(page)
  }

  fetchLength(page) {
    this.props.actions.fetchLength(page)
  }

  nextPage() {
    this.props.actions.nextPage()
  }

  handleGetMoreClick (e) {
    e.preventDefault()
    this.nextPage()
  }

  render() {
    const { posts, page, popin, isFetching, isOpen, itemSelected, actions } = this.props
    const isEmpty = posts.length === 0
    return (
      <div>
      <div style={{ opacity: isOpen ? 1 : 0 }}>
        <Popin popin={popin} posts={posts} actions={actions} />
      </div>
      <Header />
        {isEmpty
          ? ''
          : <div style={{ opacity: isFetching ? 0.2 : 1 }}>
              <Posts isFetching={isFetching} posts={posts} actions={actions} />
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
          <BtnMore isFetching={isFetching} page={page} handleGetMoreClick={this.handleGetMoreClick.bind(this)}/>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { page, popin, postsByVince } = state
  const { isFetching, lastUpdated, items: posts } = postsByVince || { isFetching: true, items: [] }
  const { isOpen, itemSelected } = popin || { isOpen: false, itemSelected: 0 }

  return {
    page,
    posts,
    popin,
    isFetching,
    isOpen,
    lastUpdated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions : bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
