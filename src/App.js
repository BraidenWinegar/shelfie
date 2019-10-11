import React from 'react';
import './App.css';
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

  render(){
    return (
      <div className="App">
        <Header />
        <Form />
        <Dashboard />
      </div>
    );
  }
}

export default App;
