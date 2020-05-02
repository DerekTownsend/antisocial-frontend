import React, { Component } from 'react';
import './css/App.css';
import './css/Form.css';
import { Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux'
import PostsTrendingContainer from './containers/PostsTrendingContainer'
import PostShowContainer from './containers/PostShowContainer'
import PostForm from './components/PostForm'
// import MovieShowContainer from './containers/MovieShowContainer'
// import MovieSearchContainer from './containers/MovieSearchContainer'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'
// ===========================================
// import ProfileContainer from './containers/ProfileContainer'
import Api from './services/api';
import { fetchUser} from './actions'

class App extends Component {

  getUser = () =>{
    Api.getUser()
    .then(user => {
      console.log(user);
      this.props.fetchUser(user)
    })
  }
  render(){
    return (
      <div className="container">
      {localStorage.getItem("user") ? this.getUser() : this.props.fetchUser({})}
      <Navbar />
      {localStorage.getItem("user") ? <PostForm/>  : null }
      <Switch>
        <Route exact path='/' component={PostsTrendingContainer}/>
        <Route exact path='/trending' component={PostsTrendingContainer}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/posts/:id' component={PostShowContainer}/>

      </Switch>
      </div>
    )
  }
}
// <Route exact path='/profile' component={ProfileContainer}/>
// <Route exact path='/profile/:type' component={ProfileContainer}/>
// <Route exact path='/users/:id' component={UserProfileContainer}/>

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (user) => {
      dispatch(fetchUser(user))
    },
  }
}
// export default App;
export default connect(null, mapDispatchToProps)(App);
