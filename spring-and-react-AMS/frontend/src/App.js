import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from 'react-bootstrap';

class App extends Component {

  state = {};

  componentDidMount() {
    setInterval(this.hello, 250);
  }

  // hello = () => {
  //   fetch('/api/hello')
  //       .then(response => response.text())
  //       .then(message => {
  //         this.setState({message: message});
  //       });
  // };

  render() {
    return (
      <div className="App">
        {/* <header className="App-header"> */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">AMS</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Dashboard <span class="sr-only">(current)</span></a>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li> */}
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Account
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">View Accounts</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Add Account</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>
          <h1 className="App-title">{this.state.message}</h1>
        {/* </header> */}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
