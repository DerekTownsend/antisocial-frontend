import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/Form.css';
import { Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux'
// import MoviesContainer from './containers/MoviesContainer'
// import MovieShowContainer from './containers/MovieShowContainer'
// import MovieSearchContainer from './containers/MovieSearchContainer'
import Login from './components/Login'
import Register from './components/Register'
// import Navbar from './components/Navbar'
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
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
      </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (user) => {
      dispatch(fetchUser(user))
    },
  }
}
// export default App;
export default connect(null, mapDispatchToProps)(App);
