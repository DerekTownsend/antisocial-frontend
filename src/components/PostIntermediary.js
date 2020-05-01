import React, { Component } from 'react';
import {connect} from 'react-redux'
import Post from '../components/Post';

class PostsIntermediary extends Component {
  displayPosts = () => {
    // console.log(this.props);
    return this.props.posts.map((post) => {
      return <Post post={post} key={post.id}/>
    })
  }
  // {console.log(this.props)}
  render(){
    return (
      <div>
        <div className="posts">
          {this.props.posts && this.props.posts.length !==0 ? this.displayPosts() : <h2>No Posts Found</h2>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
}
  export default connect(mapStateToProps)(PostsIntermediary);

  // <button onClick={this.handleClick}>{this.props.page}</button>
  // connect(mapStateToProps, mapDispatchToProps)()
