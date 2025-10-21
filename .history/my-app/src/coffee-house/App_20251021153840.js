import './App.css';
import { Component } from 'react';
import TabHeader from '../services/tab-header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TabHeader/>
      </div>
    );
  }
}

export default App;