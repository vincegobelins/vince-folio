import { combineReducers } from 'redux'
import {
  NEXT_PAGE,
  REQUEST_POSTS, RECEIVE_POSTS
} from '../actions'

const page = (state = 1, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return state + 1
    default:
      return state
  }
}

const postsByVince = (state = { isFetching: false, didInvalidate: false, items: [] }, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: state.items.concat(action.posts),
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}


const rootReducer = combineReducers({
  page,
  postsByVince
})

export default rootReducer
