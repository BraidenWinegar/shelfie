import React from 'react';
import './App.css';
import axios from 'axios'
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import Dashboard from './Components/Dashboard/Dashboard'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      inventory: []
    }
  }

  componentDidMount(){
    this.grabInventory();
  }

  grabInventory = () => {
    axios.get('/api/inventory')
    .then(res =>{
        this.setState({
            inventory: res.data
        })
    })
    .catch(err => alert(err, 'grabInventory'))
  }
  
  render(){
    return (
      <div className="App">
        <Header />
        <Form grabInventory={this.grabInventory}/>
        <Dashboard inventory={this.state.inventory} grabInventory={this.grabInventory}/>
      </div>
    );
  }
}

export default App;
