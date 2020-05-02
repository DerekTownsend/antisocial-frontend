import React, { Component } from 'react';
import {connect} from 'react-redux'
import { editComment} from '../actions'
import Api from '../services/api';

class CommentEditForm extends Component {
  state = {
    message: this.props.comment.message,
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
      }
    }
    Api.editComment(bodyObj, this.props.comment.id)
    .then(comment => {
      this.props.editComment(comment)
      this.props.updateEditState()
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
    editComment: (comment) => {
      dispatch(editComment(comment))
    },
  }
}

// export default CommentEditForm;
export default connect(mapStateToProps, mapDispatchToProps)(CommentEditForm);
