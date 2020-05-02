import React, { Component } from 'react';
import Api from '../services/api';
import {connect} from 'react-redux'
import {showPost, fetchComments, fetchUser} from '../actions'
// import PostShow from '../components/PostShow'
import CommentsContainer from './CommentsContainer'

class PostShowContainer extends Component {
  fetchPost = (id) =>{
    Api.fetchPost(id)
    .then(movie => {
      this.props.showPost(movie.movies)
      this.props.fetchComments(movie.movies.comments)
    })
  }


  getPost = () => {
    const id =this.props.match.params.id
    if (Number(id)) {
      this.fetchPost(id)
    } else{
      this.props.history.push("/movies/all")
    }
  }

  handleUnfavorite = ()=>{
    const myFavorite = this.props.user.favorites.find((favorite)=> favorite.movie_id === this.props.movie.id)
    Api.unfavoritePost(myFavorite.id)
    .then(user => this.props.fetchUser(user))
  }

  handleFavorite = () => {
    const bodyObj = {
      favorite:{
        user_id: this.props.user.id,
        movie_id: this.props.movie.id
      }
    }
    Api.favoritePost(bodyObj)
    .then(user => this.props.fetchUser(user))
  }

  showFavButton = () =>{
    return !this.props.user.movie_favorites.find((movie)=> movie.id === this.props.movie.id)  ? <button onClick={this.handleFavorite} className="favorite">Favorite <i className="far fa-heart"></i></button> : <button onClick={this.handleUnfavorite} className="unfavorite">Unfavorite <i className="fas fa-heart"></i></button>
  }

  componentDidMount(){
    this.getPost()
    window.scrollTo(0, 0)
  }
  // {this.props.user.id ? this.showFavButton() : null}
  // {this.props.movie.id ? <PostShow/> : null}
  // {this.props.movie.id ? <CommentsContainer /> : null}
  render(){
    return (
      <div className="movie_show">

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    movie: state.movie,
    user: state.user
  }
}
// showPost: (movie) => {
//   dispatch(showPost(movie))
// },
const mapDispatchToProps = dispatch => {
  return {

    fetchComments: (comments) => {
      dispatch(fetchComments(comments))
    },
    fetchUser: (user)=> {
      dispatch(fetchUser(user))
    },
  }
}
// export default PostShowContainer;
export default connect(mapStateToProps, mapDispatchToProps)(PostShowContainer);
