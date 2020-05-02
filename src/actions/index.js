import {FETCH_POSTS, ADD_POST, EDIT_POST, DELETE_POST, LIKE_POST, UNLIKE_POST, DISLIKE_POST, UNDISLIKE_POST, SET_PAGE, DECREMENT_PAGE, INCREMENT_PAGE, SET_PAGE_MAX, FIRST_PAGE, LAST_PAGE, SHOW_POST, FETCH_USER, LOGOUT_USER, FETCH_COMMENTS, ADD_COMMENT, LIKE_COMMENT, UNLIKE_COMMENT, DISLIKE_COMMENT, UNDISLIKE_COMMENT, FAVORITE_COMMENT, UNFAVORITE_COMMENT, EDIT_COMMENT, DELETE_COMMENT, FETCH_RATINGS, FAVORITE_POST, UNFAVORITE_POST} from './types'

export function fetchPosts(posts) {
  return {
    type: FETCH_POSTS,
    posts
  }
}
export function addPost(post) {
  return {
    type: ADD_POST,
    post
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
export function favoritePost(post) {
  return {
    type: FAVORITE_POST,
    post
  }
}
export function unfavoritePost(post) {
  return {
    type: UNFAVORITE_POST,
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

export function showPost(post) {
  return {
    type: SHOW_POST,
    post
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

export function likeComment(comment) {
  return {
    type: LIKE_COMMENT,
    comment
  }
}

export function unlikeComment(comment) {
  return {
    type: UNLIKE_COMMENT,
    comment
  }
}

export function dislikeComment(comment) {
  return {
    type: DISLIKE_COMMENT,
    comment
  }
}

export function undislikeComment(comment) {
  return {
    type: UNDISLIKE_COMMENT,
    comment
  }
}
export function favoriteComment(comment) {
  return {
    type: FAVORITE_COMMENT,
    comment
  }
}
export function unfavoriteComment(comment) {
  return {
    type: UNFAVORITE_COMMENT,
    comment
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
