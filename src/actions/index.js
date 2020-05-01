import {FETCH_POSTS, ADD_POST, EDIT_POST, DELETE_POST, LIKE_POST, UNLIKE_POST, DISLIKE_POST, UNDISLIKE_POST, SET_PAGE, DECREMENT_PAGE, INCREMENT_PAGE, SET_PAGE_MAX, FIRST_PAGE, LAST_PAGE, SHOW_MOVIE, FETCH_USER, LOGOUT_USER, FETCH_COMMENTS, ADD_COMMENT, LIKE, UNLIKE, EDIT_COMMENT, DELETE_COMMENT, FETCH_RATINGS} from './types'

export function fetchPosts(posts) {
  return {
    type: FETCH_POSTS,
    posts
  }
}
export function addPost(comment) {
  return {
    type: ADD_POST,
    comment
  }
}

export function likePost(post) {
  return {
    type: LIKE_POST,
    post
  }
}

export function unlikePost(post) {
  return {
    type: UNLIKE_POST,
    post
  }
}

export function dislikePost(post) {
  return {
    type: DISLIKE_POST,
    post
  }
}

export function undislikePost(post) {
  return {
    type: UNDISLIKE_POST,
    post
  }
}

export function editPost(post) {
  return {
    type: EDIT_POST,
    post
  }
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    id
  }
}

export function setPage(pageNumber) {
  return {
    type: SET_PAGE,
    pageNumber
  }
}

export function incrementPage(pageNumber) {
  return {
    type: INCREMENT_PAGE,
    pageNumber
  }
}
export function decrementPage(pageNumber) {
  return {
    type: DECREMENT_PAGE,
    pageNumber
  }
}

export function setPageMax(pageNumber) {
  return {
    type: SET_PAGE_MAX,
    pageNumber
  }
}


export function firstPage(pageNumber) {
  return {
    type: FIRST_PAGE,
    pageNumber
  }
}

export function lastPage(pageNumber) {
  return {
    type: LAST_PAGE,
    pageNumber
  }
}

export function showMovie(movie) {
  return {
    type: SHOW_MOVIE,
    movie
  }
}

export function fetchUser(user) {
  return {
    type: FETCH_USER,
    user
  }
}

export function logoutUser() {
  return {
    type: LOGOUT_USER
  }
}

export function fetchComments(comments) {
  return {
    type: FETCH_COMMENTS,
    comments
  }
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment
  }
}

export function likeComment(like) {
  return {
    type: LIKE,
    like
  }
}

export function unlikeComment(like) {
  return {
    type: UNLIKE,
    like
  }
}

export function editComment(comment) {
  return {
    type: EDIT_COMMENT,
    comment
  }
}

export function deleteComment(id) {
  return {
    type: DELETE_COMMENT,
    id
  }
}

export function fetchRatings(ratings) {
  return {
    type: FETCH_RATINGS,
    ratings
  }
}
