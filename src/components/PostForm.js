import React, { Component } from 'react';
import {connect} from 'react-redux'
import { addPost} from '../actions'
import Api from '../services/api';

class PostForm extends Component {
  state = {
    title: "",
    message: "",
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    const bodyObj = {
      post: {
        title: this.state.title,
        message: this.state.message,
        user_id: this.props.user.id,
      }
    }
    Api.createPost(bodyObj)
    .then(post => {
      console.log(post);
      this.props.addPost(post.posts)
      this.setState({
        title: "",
        message: "",
      })
    })
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} className="create_post">
        <input onChange={this.handleChange} id="title" name="title" value={this.state.title} placeholder="Title"/>
        <textarea onChange={this.handleChange} id="message" name="message" value={this.state.message} rows="4" cols="50" placeholder="Post">
        </textarea>
        <input type="submit"/>
      </form>
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
    addPost: (post) => {
      dispatch(addPost(post))
    },
  }
}

// export default PostForm;
export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
