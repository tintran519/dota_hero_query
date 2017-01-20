import React, { Component } from 'react';
import '../assets/app.css';
import Layout from './Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hero Query</h1>
        <Layout />
      </div>
    );
  }
}

export default App;
