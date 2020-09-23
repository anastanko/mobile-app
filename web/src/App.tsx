import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component{

  state = {
    display: false
  };
  click =() =>{
    this.setState({display: !this.state.display});
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
          {this.state.display &&
          <div>BUTTON HAS BEEN CLICKED </div>
          }
          <button type="button" onClick={this.click}>Click Me!</button>
          </div>
        </header>



      </div>
    );
  }
}


