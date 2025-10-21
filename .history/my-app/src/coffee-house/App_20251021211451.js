import './App.scss';
import { Component } from 'react';
import TabHeader from '../services/tab-header';
import beansLogo from '../imgs/beans-logo.svg';
import beansLogoBrown from '../imgs/beans-logo-brown.svg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="house-header">
          <TabHeader/>
          <div className="house-header__inner">
            <div className="title">Everything You Love About Coffee</div>
            <div className="line"><img src={beansLogo} alt="line&beans"/></div>
            <div className="text">We makes every day full of energy and taste<br />
            Want to try our beans?</div>
            <div className="more"><button type="button">More</button></div>
          </div>
          <div className="about-us">
            <div className="title">About Us</div>
            <div className="line"><img src={beansLogoBrown} alt="line&beans" /></div>
            <div className="text">
              <p>
              Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
              Afraid at highly months do things on at. Situation recommend objection do intention
              so questions. As greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered followed. At it went
              is song that held help face. 
              </p>

              <p></p>
              Now residence dashwoods she excellent you. Shade being under his bed her, Much
              read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
              horrible but confined day end marriage. Eagerness furniture set preserved far
              recommend. Did even but nor are most gave hope. Secure active living depend son
              repair day ladies now.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;