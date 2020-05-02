import {FETCH_COMMENTS, ADD_COMMENT, LIKE_COMMENT, UNLIKE_COMMENT, DISLIKE_COMMENT, UNDISLIKE_COMMENT, FAVORITE_COMMENT, UNFAVORITE_COMMENT,  EDIT_COMMENT, DELETE_COMMENT} from '../actions/types'

export default function commentsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return action.comments
    case ADD_COMMENT:
      return [...state, action.comment]
    case LIKE_COMMENT:
    case UNLIKE_COMMENT:
    case DISLIKE_COMMENT:
    case UNDISLIKE_COMMENT:
    case FAVORITE_COMMENT:
    case UNFAVORITE_COMMENT:
    case EDIT_COMMENT:
      const stateCopy = state.slice()
      const index = stateCopy.map((comment) => { return comment.id }).indexOf(action.comment.id);
      stateCopy.splice(index,1, action.comment)
      return stateCopy
    case DELETE_COMMENT:
      const newState = state.filter((comment) => comment.id !== action.id  )
      return newState
    default:
      return state;
  }
}
