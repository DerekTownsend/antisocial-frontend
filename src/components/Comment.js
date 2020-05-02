import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import Api from '../services/api';
import { fetchComments, deleteComment, likeComment, unlikeComment, dislikeComment, undislikeComment, editComment, favoriteComment, unfavoriteComment } from '../actions'
import CommentEditForm from './CommentEditForm'

class Comment extends Component {
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
      Api.deleteComment(this.props.comment.id)
      .then(message => this.props.deleteComment(this.props.comment.id))
    }
  }
  calculateLikesDislikes= () =>{
    if (this.props.comment.comment_likes.length > 0 || this.props.comment.comment_dislikes.length > 0) {
      return this.props.comment.comment_likes.length - this.props.comment.comment_dislikes.length
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
        comment_like:{
          user_id: this.props.user.id,
          comment_id: this.props.comment.id
        }
      }
      Api.likeComment(bodyObj)
      .then(comment => this.props.likeComment(comment))
      // .then(console.log)
    }

    handleUnlike = () => {
      const myLike = this.props.comment.comment_likes.find((like)=> like.user_id === this.props.user.id)
      Api.unlikeComment(myLike.id)
      .then(comment => this.props.unlikeComment(comment))
    }
    handleDislike = () => {
      const bodyObj = {
        comment_dislike:{
          user_id: this.props.user.id,
          comment_id: this.props.comment.id
        }
      }
      Api.dislikeComment(bodyObj)
      .then(comment => this.props.dislikeComment(comment))
    }

    handleUndislike = () => {
      const myLike = this.props.comment.comment_dislikes.find((like)=> like.user_id === this.props.user.id)
      Api.undislikeComment(myLike.id)
      .then(comment => this.props.undislikeComment(comment))
    }

    handleFavorite = () => {
      const bodyObj = {
        comment_favorite:{
          user_id: this.props.user.id,
          comment_id: this.props.comment.id
        }
      }
      Api.favoriteComment(bodyObj)
      .then(comment => this.props.favoriteComment(comment))
    }

    handleUnfavorite = () => {
      const myLike = this.props.comment.comment_favorites.find((favorite)=> favorite.user_id === this.props.user.id)
      Api.unfavoriteComment(myLike.id)
      .then(comment => this.props.unfavoriteComment(comment))
    }

    showLikeButtons = () =>{
      return (
        <div>
        {!this.props.comment.comment_likes.find((like)=> like.user_id === this.props.user.id)  ? <button onClick={this.handleLike} className="like"><i className="far fa-thumbs-up"></i></button> : <button onClick={this.handleUnlike} className="unlike"><i className="fas fa-thumbs-up"></i></button>}
        <p>{this.calculateLikesDislikes() }</p>

        {!this.props.comment.comment_dislikes.find((dislike)=> dislike.user_id === this.props.user.id)  ? <button onClick={this.handleDislike} className="dislike"><i className="far fa-thumbs-down"></i></button> : <button onClick={this.handleUndislike} className="undislike"><i className="fas fa-thumbs-down"></i></button>}
        </div>
      )
    }

    showFavButton = () =>{
      return !this.props.comment.comment_favorites.find((comment)=> comment.user_id === this.props.user.id)  ? <button onClick={this.handleFavorite} className="favorite">Favorite <i className="far fa-heart"></i></button> : <button onClick={this.handleUnfavorite} className="unfavorite">Unfavorite <i className="fas fa-heart"></i></button>
    }
    showComment = ()=>{
      return (
        <div>
        <Link to={`/users/${this.props.comment.user.id}`}>{this.props.comment.user.username}</Link>
          <p>{this.props.comment.message}</p>
          {this.props.user.id ? this.showLikeButtons() : null}
          {this.props.user.id ? this.showFavButton() : null}
          {this.props.comment.user.id === this.props.user.id ?  this.showEditDeleteButtons(): null}
          <Link to={`/comments/${this.props.comment.id}`}>See Comments</Link>

        </div>
      )
    }
  showComment = ()=>{
    console.log(this.props.comment);
    return (
      <div>
      <Link to={`/users/${this.props.comment.user.id}`}>{this.props.comment.user.username}</Link>
        <p>{this.props.comment.message}</p>
        {this.props.user.id ? this.showLikeButtons() : null}
        {this.props.user.id ? this.showFavButton() : null}
        {this.props.comment.user.id === this.props.user.id ?  this.showEditDeleteButtons(): null}
        <Link to={`/comments/${this.props.comment.id}`}>See Replies</Link>


      </div>
    )
  }
  render(){
    return (
      <div className="comment">
        {this.state.showEditForm ? <CommentEditForm comment={this.props.comment} updateEditState={this.updateEditState}/> : this.showComment()}

      </div>
    )
  }
}
// {this.props.user.id ===  ?  : null}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    post: state.post
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: (comments) => {
      dispatch(fetchComments(comments))
    },
    deleteComment: (id) => {
      dispatch(deleteComment(id))
    },
    likeComment: (comment) => {
      dispatch(likeComment(comment))
    },
    unlikeComment: (comment) => {
      dispatch(unlikeComment(comment))
    },
    dislikeComment: (comment) => {
      dispatch(dislikeComment(comment))
    },
    undislikeComment: (comment) => {
      dispatch(undislikeComment(comment))
    },
    editComment: (comment) => {
      dispatch(editComment(comment))
    },
    favoriteComment: (comment) => {
      dispatch(favoriteComment(comment))
    },
    unfavoriteComment: (comment) => {
      dispatch(unfavoriteComment(comment))
    }
  }
}

// export default Comment;
export default connect(mapStateToProps, mapDispatchToProps)(Comment);
