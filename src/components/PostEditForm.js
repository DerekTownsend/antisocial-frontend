import React, { Component } from 'react';
import {connect} from 'react-redux'
import { editPost} from '../actions'
import Api from '../services/api';

class PostEditForm extends Component {
  state = {
    title: this.props.post.title,
    message: this.props.post.message,
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
      }
    }
    Api.editPost(bodyObj, this.props.post.id)
    .then(post => {
      this.props.editPost(post.posts)
      this.props.updateEditState()
    })
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} className="create_comment">
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
    editPost: (post) => {
      dispatch(editPost(post))
    },
  }
}

// export default PostEditForm;
export default connect(mapStateToProps, mapDispatchToProps)(PostEditForm);
