import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Api from '../services/api';
import {connect} from 'react-redux'
import { fetchPosts, deletePost, likePost, unlikePost, dislikePost, undislikePost, editPost, favoritePost, unfavoritePost } from '../actions'
import PostEditForm from './PostEditForm'


// import no_poster from '../no_poster.png';
// .toFixed(1)
class Post extends Component {
  state = {
    showEditForm: false
  }
  updateEditState = ()=>{
    this.setState({showEditForm: false})
  }
  handleClick = (e) =>{
    if(e.target.className === "edit"){
      this.setState({showEditForm: true})
    }else if(e.target.className === "delete"){
      Api.deletePost(this.props.post.id)
      .then(message => this.props.deletePost(this.props.post.id))
    }
  }
  calculateLikesDislikes= () =>{
    if (this.props.post.post_likes.length > 0 || this.props.post.post_dislikes.length > 0) {
      return this.props.post.post_likes.length - this.props.post.post_dislikes.length
    }else{
      return 0;
    }
  }
  showEditDeleteButtons = () =>{
    return (
      <div>
        <button onClick={this.handleClick} className="edit">Edit</button>
        <button onClick={this.handleClick} className="delete">Delete</button>
      </div>
    )
  }
    handleLike = () => {
      const bodyObj = {
        post_like:{
          user_id: this.props.user.id,
          post_id: this.props.post.id
        }
      }
      Api.likePost(bodyObj)
      .then(post => this.props.likePost(post.posts))
      // .then(console.log)
    }

    handleUnlike = () => {
      const myLike = this.props.post.post_likes.find((like)=> like.user_id === this.props.user.id)
      Api.unlikePost(myLike.id)
      .then(post => this.props.unlikePost(post.posts))
    }
    handleDislike = () => {
      const bodyObj = {
        post_dislike:{
          user_id: this.props.user.id,
          post_id: this.props.post.id
        }
      }
      Api.dislikePost(bodyObj)
      .then(post => this.props.dislikePost(post.posts))
    }

    handleUndislike = () => {
      const myLike = this.props.post.post_dislikes.find((like)=> like.user_id === this.props.user.id)
      Api.undislikePost(myLike.id)
      .then(post => this.props.undislikePost(post.posts))
    }

    handleFavorite = () => {
      const bodyObj = {
        post_favorite:{
          user_id: this.props.user.id,
          post_id: this.props.post.id
        }
      }
      Api.favoritePost(bodyObj)
      .then(post => this.props.favoritePost(post.posts))
    }

    handleUnfavorite = () => {
      const myLike = this.props.post.post_favorites.find((favorite)=> favorite.user_id === this.props.user.id)
      Api.unfavoritePost(myLike.id)
      .then(post => this.props.unfavoritePost(post.posts))
    }

    showLikeButtons = () =>{
      return (
        <div>
        {!this.props.post.post_likes.find((like)=> like.user_id === this.props.user.id)  ? <button onClick={this.handleLike} className="like"><i className="far fa-thumbs-up"></i></button> : <button onClick={this.handleUnlike} className="unlike"><i className="fas fa-thumbs-up"></i></button>}
        <p>{this.calculateLikesDislikes() }</p>

        {!this.props.post.post_dislikes.find((dislike)=> dislike.user_id === this.props.user.id)  ? <button onClick={this.handleDislike} className="dislike"><i className="far fa-thumbs-down"></i></button> : <button onClick={this.handleUndislike} className="undislike"><i className="fas fa-thumbs-down"></i></button>}
        </div>
      )
    }

    showFavButton = () =>{
      console.log(this.props.post.post_favorites);
      return !this.props.post.post_favorites.find((post)=> post.user_id === this.props.user.id)  ? <button onClick={this.handleFavorite} className="favorite">Favorite <i className="far fa-heart"></i></button> : <button onClick={this.handleUnfavorite} className="unfavorite">Unfavorite <i className="fas fa-heart"></i></button>
    }
    showPost = ()=>{
      return (
        <div>
        <Link to={`/users/${this.props.post.user.id}`}>{this.props.post.user.username}</Link>
          <h3>{this.props.post.title}</h3>
          <p>{this.props.post.message}</p>
          {this.props.user.id ? this.showLikeButtons() : null}
          {this.props.user.id ? this.showFavButton() : null}
          {this.props.post.user.id === this.props.user.id ?  this.showEditDeleteButtons(): null}

        </div>
      )
    }
  render(){
    return (
      <div className="post">
      {this.state.showEditForm ? <PostEditForm post={this.props.post} updateEditState={this.updateEditState}/> : this.showPost()}

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: (posts) => {
      dispatch(fetchPosts(posts))
    },
    deletePost: (id) => {
      dispatch(deletePost(id))
    },
    likePost: (post) => {
      dispatch(likePost(post))
    },
    unlikePost: (post) => {
      dispatch(unlikePost(post))
    },
    dislikePost: (post) => {
      dispatch(dislikePost(post))
    },
    undislikePost: (post) => {
      dispatch(undislikePost(post))
    },
    editPost: (post) => {
      dispatch(editPost(post))
    },
    favoritePost: (post) => {
      dispatch(favoritePost(post))
    },
    unfavoritePost: (post) => {
      dispatch(unfavoritePost(post))
    }
  }
}

// export default Post;
export default connect(mapStateToProps, mapDispatchToProps)(Post);
