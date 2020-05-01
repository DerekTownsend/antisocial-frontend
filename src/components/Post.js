import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Api from '../services/api';
import {connect} from 'react-redux'
import { fetchPosts, deletePost, likePost, unlikePost, dislikePost, undislikePost, editPost } from '../actions'
// import CommentEditForm from './CommentEditForm'


// import no_poster from '../no_poster.png';
// .toFixed(1)
class Post extends Component {
  calculateLikesDislikes= () =>{
    if (this.props.post.post_likes.length > 0 || this.props.post.post_dislikes.length > 0) {
      return this.props.post.post_likes.length - this.props.post.post_dislikes.length
    }else{
      return 0;
    }
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

    showLikeButtons = () =>{
      return (
        <div>
        {!this.props.post.post_likes.find((like)=> like.user_id === this.props.user.id)  ? <button onClick={this.handleLike} className="like"><i className="far fa-thumbs-up"></i></button> : <button onClick={this.handleUnlike} className="unlike"><i className="fas fa-thumbs-up"></i></button>}
        <p>{this.calculateLikesDislikes() }</p>

        {!this.props.post.post_dislikes.find((dislike)=> dislike.user_id === this.props.user.id)  ? <button onClick={this.handleDislike} className="dislike"><i className="far fa-thumbs-down"></i></button> : <button onClick={this.handleUndislike} className="undislike"><i className="fas fa-thumbs-down"></i></button>}

        </div>
      )
    }

    showPost = ()=>{
      return (
        <div>
        <Link to={`/users/${this.props.post.user.id}`}>{this.props.post.user.username}</Link>
          <h3>{this.props.post.title}</h3>
          <p>{this.props.post.message}</p>
          {this.props.user.id ? this.showLikeButtons() : null}

        </div>
      )
    }
    //           {this.props.comment.user.id === this.props.user.id ?  this.showEditDeleteButtons(): null}

    // <Link to={`/users/${this.props.post.user.id}`}>{this.props.post.user.username}</Link>
    // <h3>{this.props.post.title}</h3>
    // <p>{this.props.post.message}</p>
    // <p>{this.calculateLikesDislikes() }</p>
    // <Link to={`/posts/${this.props.post.id}`}>See Comments</Link>

  render(){
    return (
      <div className="post">
      {this.showPost()}
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
    }
  }
}

// export default Post;
export default connect(mapStateToProps, mapDispatchToProps)(Post);
