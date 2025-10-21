import './App.css';
import { Component } from 'react';
import TabHeader from '../services/tab-header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TabHeader/>
        <div className="main-bg"></div>
      </div>
    );
  }
}

export default App;