export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_LENGTH = 'RECEIVE_LENGTH'
export const NEXT_PAGE = 'NEXT_PAGE'

export const nextPage = page => ({
  type: NEXT_PAGE,
  page
})

export const requestPosts = page => ({
  type: REQUEST_POSTS,
  page
})

export const receivePosts = (page, json) => ({
  type: RECEIVE_POSTS,
  page,
  posts: json.map(child => child),
  receivedAt: Date.now()
})

export const receiveLength = (length) => ({
  type: RECEIVE_LENGTH,
  length
})

const fetchPosts = page => dispatch => {
  dispatch(requestPosts(page))
  return fetch(`http://vincentaguettaz.com/wp-json/wp/v2/portfolio?_embed&per_page=6&page=${page}`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(page, json)))
    //dispatch(receiveLength(response.headers.get('X-WP-Total')))
}

const shouldFetchPosts = (state, page) => {
  const posts = state.postsByVince[page]
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

export const fetchPostsIfNeeded = page => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), page)) {
    return dispatch(fetchPosts(page))
  }
}
