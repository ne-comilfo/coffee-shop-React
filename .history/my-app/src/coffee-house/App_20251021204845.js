import './App.css';
import { Component } from 'react';
import TabHeader from '../services/tab-header';
import beansLogo from '../imgs/beans-logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="house-header">
          <TabHeader/>
          <div className="house-header__inner">
            <div className="title">Everything You Love About Coffee</div>
            <div className="line"><img src={beansLogo} alt="line&beans"/></div>
            <div className="text-first-line">We makes every day full of energy and taste</div>
            <div className="text-second-line">Want to try our beans?</div>
            <div className="more"><button type="button"></button></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;