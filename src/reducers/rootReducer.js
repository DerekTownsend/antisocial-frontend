import { combineReducers } from "redux";
// import { createStore, applyMiddleware, compose } from 'redux';
import { createStore } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
import pagesReducer from './pagesReducer';
import maxPagesReducer from './maxPagesReducer';
import movieReducer from './movieReducer';
import commentsReducer from './commentsReducer';
import ratingsReducer from './ratingsReducer';

// import thunk from 'redux-thunk'


const rootReducer = combineReducers({
  posts: postsReducer,
  user: usersReducer,
  page: pagesReducer,
  maxPages: maxPagesReducer,
  movie: movieReducer,
  comments: commentsReducer,
  ratings: ratingsReducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// applyMiddleware(thunk)
