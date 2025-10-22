import './App.scss';

import TabHeader from '../services/tab-header/tab-header';
import TabFloor from '../services/tab-floor/tab-floor';

import beansLogo from '../imgs/beans-logo.svg';
import beansLogoBrown from '../imgs/beans-logo-brown.svg';
import photo1 from '../imgs/coffee1.svg';
import photo2 from '../imgs/coffee2.svg';
import photo3 from '../imgs/coffee3.svg';

import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
    }
  }

  changePage = (pageName) => {
    this.setState({ page: pageName });
  }

  renderHome() {
    return (
      <div className="App">
        <div className="house-header">
          <TabHeader onChange={this.changePage} />
          <div className="house-header__inner">
            <div className="title">Everything You Love About Coffee</div>
            <div className="line"><img src={beansLogo} alt="line&beans" /></div>
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

              <p>
                Now residence dashwoods she excellent you. Shade being under his bed her, Much
                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                horrible but confined day end marriage. Eagerness furniture set preserved far
                recommend. Did even but nor are most gave hope. Secure active living depend son
                repair day ladies now.
              </p>
            </div>
          </div>

          <div className="our-best">
            <div className="title">Our best</div>
            <div className="card-group">
              <div className="card-group__item">
                <div className="photo"><img src={photo1} alt="coffee" /></div>
                <div className="name">Solimo Coffee Beans 2 kg</div>
                <div className="price">10.73$</div>
              </div>
              <div className="card-group__item">
                <div className="photo"><img src={photo2} alt="coffee" /></div>
                <div className="name">Presto Coffee Beans 1 kg</div>
                <div className="price">15.99$</div>
              </div>
              <div className="card-group__item">
                <div className="photo"><img src={photo3} alt="coffee" /></div>
                <div className="name">AROMISTICO Coffee 1 kg</div>
                <div className="price">6.99$</div>
              </div>
            </div>

          </div>

          <TabFloor onChange={this.changePage} />
        </div>
      </div>
    );
  }

  renderOurCoffee() {
    return (
      <></>
    );
  }

  renderPleasure() {
    return (
      <></>
    );
  }

  render() {
    const { page } = this.state;
    return (
      <>
        {page === 'home' && this.renderHome()}
        {page === 'ourCoffee' && this.renderOurCoffee()}
        {page === 'pleasure' && this.renderPleasure()}
      </>
    );
  }
}

export default App;