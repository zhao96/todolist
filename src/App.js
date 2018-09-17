import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import TODO from './TODO';

import { CssBaseline } from '@material-ui/core'

class App extends Component {
  render() {
    return (
      <CssBaseline>
      <div className="App">
        <NavBar></NavBar>
        <TODO />
      </div>
      </CssBaseline>
    );
  }
}

export default App;
