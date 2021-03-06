import { combineReducers } from 'redux'
import {
  NEXT_PAGE, RECEIVE_LENGTH,
  REQUEST_POSTS, RECEIVE_POSTS,
  OPEN_ITEM, CLOSE_ITEM
} from '../actions'

const page = (state = { cursor: 1, fullLength: 0 }, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return {
        ...state,
        cursor: state.cursor + 1
      }
    case RECEIVE_LENGTH:
      return {
        ...state,
        fullLength: parseInt(action.fullLength, 10)
      }
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

const popin = (state = { isOpen: false, itemSelected: [] }, action) => {
  switch (action.type) {
    case OPEN_ITEM:
      return {
        ...state,
        isOpen: true,
        itemSelected: action.selected
      }
    case CLOSE_ITEM:
      return {
        ...state,
        isOpen: false,
      }
    default:
      return state
  }
}


const rootReducer = combineReducers({
  popin,
  page,
  postsByVince
})

export default rootReducer
