import React, { Component } from 'react';
import Api from '../services/api';
import {connect} from 'react-redux'
import {showPost, fetchComments, fetchUser} from '../actions'
import Post from '../components/Post';
// import PostShow from '../components/PostShow'
import CommentsContainer from './CommentsContainer'

class PostShowContainer extends Component {
  fetchPost = (id) =>{
    Api.fetchPost(id)
    .then(post => {
      this.props.showPost(post.posts)
      this.props.fetchComments(post.posts.comments)
    })
  }


  getPost = () => {
    const id =this.props.match.params.id
    if (Number(id)) {
      this.fetchPost(id)
    } else{
      this.props.history.push("/")
    }
  }

  // showFavButton = () =>{
  //   return !this.props.user.post_favorites.find((post)=> post.id === this.props.post.id)  ? <button onClick={this.handleFavorite} className="favorite">Favorite <i className="far fa-heart"></i></button> : <button onClick={this.handleUnfavorite} className="unfavorite">Unfavorite <i className="fas fa-heart"></i></button>
  // }

  componentDidMount(){

    this.getPost()
    window.scrollTo(0, 0)
  }
  // {this.props.user.id ? this.showFavButton() : null}
  // {this.props.post.id ? <PostShow/> : null}
  // {this.props.post.id ? <CommentsContainer /> : null}
  render(){
    return (
      <div className="posts">
      {console.log(this.props.post.comments)}
      {this.props.post.id ? <Post post={this.props.post}/> : null}
      {this.props.post.id ? <CommentsContainer comments={this.props.post.comments}/> : null}

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.post,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {

    fetchComments: (comments) => {
      dispatch(fetchComments(comments))
    },
    fetchUser: (user)=> {
      dispatch(fetchUser(user))
    },
    showPost: (post) => {
      dispatch(showPost(post))
    },
  }
}
// export default PostShowContainer;
export default connect(mapStateToProps, mapDispatchToProps)(PostShowContainer);
