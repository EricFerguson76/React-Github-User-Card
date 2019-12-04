import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';

class App extends React.Component {
  state = {
      user: {},
      followers: []
    }
  
  

 componentDidMount(){
   axios.get('https://api.github.com/users/EricFerguson76')
   .then(response => {
     console.log(response)
     this.setState({user: response.data})
   });
   axios.get('https://api.github.com/users/EricFerguson76/followers')
   .then(response => {
     console.log(response)
     this.setState({followers: response.data})
   })
 };



  render(){
  return (
    <div className="App">
      <h1>GitHub User Cards</h1>
      <UserCard user ={this.state.user} />
      
    </div>
  );
  }
}

export default App;
