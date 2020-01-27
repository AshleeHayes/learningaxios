import React from 'react';
import './App.css'
import UserForm from './components/UserForm'
import Axios from 'axios';


class App extends React.Component {
state = {
  repos: null
}

  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
if (user) {
  Axios.get(`https://api.github.com/users/${user}`)
  .then((res) => {
    const repos = res.data.public_repos;
    this.setState({ repos })
  })
} else return;
  }

  render() {
    return (
      <div className="App">
     <h1>HTTP calls in React</h1>
     <UserForm getUser={this.getUser} />
    
  { this.state.repos ? <p>Number of repos: {this.state.repos} </p> : <p>Please enter a username</p> }

      </div>
    );
  } 
}

export default App;
