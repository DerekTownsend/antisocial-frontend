import React, { Component } from 'react';
import {connect} from 'react-redux'
import { addComment} from '../actions'
import Api from '../services/api';

class CommentForm extends Component {
  state = {
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
      comment: {
        message: this.state.message,
        user_id: this.props.user.id,
        post_id: this.props.post.id
      }
    }
    Api.createComment(bodyObj)
    .then(comment => {
      this.props.addComment(comment)
      this.setState({
        message: "",
      })
    })
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} className="create_comment">
        <textarea onChange={this.handleChange} id="message" name="message" value={this.state.message} rows="4" cols="50" placeholder="Comment">
        </textarea>
        <input type="submit"/>
      </form>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    post: state.post
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addComment: (comment) => {
      dispatch(addComment(comment))
    },
  }
}

// export default CommentForm;
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
