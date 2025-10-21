import './App.css';
import { Component } from 'react';
import TabHeader from '../services/tab-header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="house-header">
          <TabHeader/>
          <div className="house-header__inner">
            <div className="title">
              Everything You Love About Coffee
            </div>
            <div className="line">

            </div>
            <div className="text">

            </div>
            <div className="more">

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;