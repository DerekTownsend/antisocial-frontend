import {FETCH_POSTS, ADD_POST, EDIT_POST, DELETE_POST, LIKE_POST, UNLIKE_POST, DISLIKE_POST, UNDISLIKE_POST, FAVORITE_POST, UNFAVORITE_POST}  from '../actions/types'

export default function postsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.posts
    case ADD_POST:
      return [...state, action.post]
    case LIKE_POST:
    case UNLIKE_POST:
    case DISLIKE_POST:
    case UNDISLIKE_POST:
    case FAVORITE_POST:
    case UNFAVORITE_POST:
    case EDIT_POST:
      const stateCopy = state.slice()
      const index = stateCopy.map((post) => { return post.id }).indexOf(action.post.id);
      stateCopy.splice(index,1, action.post)
      return stateCopy
    case DELETE_POST:
      const newState = state.filter((post) => post.id !== action.id  )
      return newState
    default:
      return state;
  }
}
