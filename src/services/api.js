const API_LINK = "http://localhost:3000/"
// const API_LINK = "https://prmovies-backend.herokuapp.com/"
export default {

  fetchPosts: (pageNumber) => {
    return fetch(`${API_LINK}posts?page=${pageNumber}`)
    .then(resp => resp.json())
  },
  fetchMovie: (id) => {
    return fetch(`${API_LINK}movies/${id}`)
    .then(resp => resp.json())
  },
  searchMovies: (term) =>{
    let reqObj = {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
          'Accept':'application/json'
        },
        body: JSON.stringify(term)
      }
    return fetch(`${API_LINK}search`,reqObj)
    .then(resp => resp.json())
  },
  fetchUser: (bodyObj) =>{
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(bodyObj)
    }

    return fetch(`${API_LINK}api/v1/login`, reqObj)
      .then(resp => resp.json())
  },
  createUser: (bodyObj) =>{
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(bodyObj)
    }
    return fetch(`${API_LINK}api/v1/users`, reqObj)
      .then(resp => resp.json())
  },
  getUser: () =>{
    // console.log(localStorage.getItem("user"));
    const reqObj = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("user")}`
      }
    }

    return fetch(`${API_LINK}api/v1/profile`, reqObj)
      .then(resp => resp.json())
  },
  createComment: (bodyObj) =>{
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("user")}`
      },
      body: JSON.stringify(bodyObj)
    }
    return fetch(`${API_LINK}comments`, reqObj)
      .then(resp => resp.json())
  },
  likeComment: (bodyObj) =>{
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("user")}`

      },
      body: JSON.stringify(bodyObj)
    }
    return fetch(`${API_LINK}comment_likes`, reqObj)
      .then(resp => resp.json())
  },
  unlikeComment: (id) =>{
    const reqObj = {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("user")}`
      },
    }
    return fetch(`${API_LINK}comment_likes/${id}`, reqObj)
      .then(resp => resp.json())
  },
  dislikeComment: (bodyObj) =>{
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("user")}`

      },
      body: JSON.stringify(bodyObj)
    }
    return fetch(`${API_LINK}comment_dislikes`, reqObj)
      .then(resp => resp.json())
  },
  undislikeComment: (id) =>{
    const reqObj = {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("user")}`
      },
    }
    return fetch(`${API_LINK}comment_dislikes/${id}`, reqObj)
      .then(resp => resp.json())
  },
  createPost: (bodyObj) =>{
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("user")}`
      },
      body: JSON.stringify(bodyObj)
    }
    return fetch(`${API_LINK}posts`, reqObj)
      .then(resp => resp.json())
  },
  likePost: (bodyObj) =>{
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("user")}`
      },
      body: JSON.stringify(bodyObj)
    }
    return fetch(`${API_LINK}post_likes`, reqObj)
      .then(resp => resp.json())
  },
  unlikePost: (id) =>{
    const reqObj = {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("user")}`
      },
    }
    return fetch(`${API_LINK}post_likes/${id}`, reqObj)
      .then(resp => resp.json())
  },
  dislikePost: (bodyObj) =>{
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("user")}`

      },
      body: JSON.stringify(bodyObj)
    }
    return fetch(`${API_LINK}post_dislikes`, reqObj)
      .then(resp => resp.json())
  },
  undislikePost: (id) =>{
    const reqObj = {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("user")}`
      },
    }
    return fetch(`${API_LINK}post_dislikes/${id}`, reqObj)
      .then(resp => resp.json())
  },
  favoriteMovie: (bodyObj) =>{
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("user")}`
      },
      body: JSON.stringify(bodyObj)
    }
    return fetch(`${API_LINK}favorites`, reqObj)
      .then(resp => resp.json())
  },
  unfavoriteMovie: (id) =>{
    const reqObj = {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("user")}`
      },
    }
    return fetch(`${API_LINK}favorites/${id}`, reqObj)
      .then(resp => resp.json())
  },
  editComment: (bodyObj, id) =>{
    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("user")}`

      },
      body: JSON.stringify(bodyObj)
    }
    return fetch(`${API_LINK}comments/${id}`, reqObj)
      .then(resp => resp.json())
  },
  deleteComment: (id) =>{
    const reqObj = {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("user")}`
      },
    }
    return fetch(`${API_LINK}comments/${id}`, reqObj)
      .then(resp => resp.json())
  },
  rateMovie: (bodyObj) =>{
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("user")}`

      },
      body: JSON.stringify(bodyObj)
    }
    return fetch(`${API_LINK}ratings`, reqObj)
      .then(resp => resp.json())
  },
  editMovieRating: (bodyObj, id) =>{
    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("user")}`

      },
      body: JSON.stringify(bodyObj)
    }
    return fetch(`${API_LINK}ratings/${id}`, reqObj)
      .then(resp => resp.json())
  },
  deleteRating: (id) =>{
    const reqObj = {
      method: 'DELETE'
    }
    return fetch(`${API_LINK}ratings/${id}`, reqObj)
      .then(resp => resp.json())
  },
  fetchUserMovies: (pageNumber) => {
    const reqObj = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("user")}`
      }
    }
    return fetch(`${API_LINK}api/v1/favorites?page=${pageNumber}`, reqObj)
      .then(resp => resp.json())
  },
  fetchUserComments: (pageNumber) => {
    const reqObj = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("user")}`
      }
    }
    return fetch(`${API_LINK}api/v1/comments?page=${pageNumber}`, reqObj)
      .then(resp => resp.json())
  },
  fetchUserRatings: (pageNumber) => {
    const reqObj = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("user")}`
      }
    }
    return fetch(`${API_LINK}api/v1/ratings?page=${pageNumber}`, reqObj)
      .then(resp => resp.json())
  },
}
