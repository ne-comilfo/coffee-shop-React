import './App.scss';
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
            <div className="text">We makes every day full of energy and taste
            Want to try our beans?</div>
            <div className="more"><button type="button">More</button></div>
          </div>
          <div className="about-us">
            <div className="title">About Us</div>
            <div className="line"><img src="" alt="line&beans" /></div>
            <div className="text">

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;