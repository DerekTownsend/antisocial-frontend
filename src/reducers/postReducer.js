import {SHOW_POST} from '../actions/types'

export default function postReducer(state = {}, action) {
  switch (action.type) {
    case SHOW_POST:
      return action.post
    default:
      return state;
  }
}
