import React, { Component } from 'react';
import './App.css';
import Dashboard from './Dashboard';

class App extends Component {
  state = {
    // fishes: {},
    // order: {}
  };

  // static propTypes = {
  //   match: PropTypes.object
  // };

  render() {
    return (
      <div className="lazyApp">
        <Dashboard/>
      </div>    
    );
  }
}

export default App;
