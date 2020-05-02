import React, { Component } from 'react';
import {connect} from 'react-redux'
import Api from '../services/api';
import PageButtons from '../components/PageButtons';
import {fetchPosts, setPageMax} from '../actions'
import PostIntermediary from '../components/PostIntermediary';

class PostsContainer extends Component {

  fetchPosts = () => {
    Api.fetchPosts(this.props.page)
    .then(posts => {
      this.props.setPageMax(Math.ceil(posts.total/24))
      this.props.fetchPosts(posts.posts)
    })
  }
  render(){
    return (
      <div>
        {this.fetchPosts()}
        <PageButtons/>
        <PostIntermediary/>
        <PageButtons/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: (posts) => {
      dispatch(fetchPosts(posts))
    },
    setPageMax: (pageNumber) => {
      dispatch(setPageMax(pageNumber))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);

// <button onClick={this.handleClick}>{this.props.page}</button>
// connect(mapStateToProps, mapDispatchToProps)()
