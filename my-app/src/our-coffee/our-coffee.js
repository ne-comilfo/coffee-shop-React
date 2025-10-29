import './our-coffee.scss';

import TabFloor from '../services/tab-floor/tab-floor';
import TabHeader from '../services/tab-header/tab-header';

import previewCoffee from '../imgs/our-coffee/preview.png';
import beansLogoBrown from '../imgs/beans-logo-brown.svg';
import line from '../imgs/our-coffee/line.svg';
import coffeeImg from '../imgs/our-coffee/coffee-card-img.svg';

import { Component } from 'react';

class OurCofeee extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { onChange } = this.props;
        return (
            <div className="app">
                <div className="app-header">
                    <TabHeader onChange={onChange} />
                    <div className="title">Our coffee</div>
                </div>
                <div className="wrapper">
                    <div className="about-product">
                        <img src={previewCoffee} alt="coffee" />
                        <div className="title-text">
                            <div className="title">About our beans</div>
                            <img src={beansLogoBrown} alt="line" />
                            <div className="text">
                                <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                                <p>Afraid at highly months do things on at. Situation recommend objection do intention <br/> so questions. <br/>
                                As greatly removed calling pleased improve an. <br/>
                                Last ask him cold feel <br/> met spot shy want. Children me laughing we prospect answered followed. At it went <br/> is song that held help face. </p>
                            </div>
                        </div>
                    </div>
                    <img class='between-content' src={line} alt="line" />
                </div>

                <div className="products">
                    <div className="groups">
                        <div className="search-group">
                            <label for='search'>Looking for</label>
                            <input type="search" name="search" id="search" placeholder='start typing here...' />
                        </div>
                        <div className="filter-group">
                            <div className="title">Or filter</div>
                            <div className="buttons">
                                <button type="button">Brazil</button>
                                <button type="button">Kenya</button>
                                <button type="button">Columbia</button>
                            </div>

                        </div>
                    </div>

                    <div className="product-cards">
                        <div className="product-cards-item">
                            <img src={coffeeImg} alt="coffee" />
                            <div className="params">
                                <div className="name">AROMISTICO Coffee 1 kg</div>
                                <div className="country">Brazil</div>
                                <div className="price">6.99$</div>
                            </div>
                        </div>

                        <div className="product-cards-item">
                            <img src={coffeeImg} alt="coffee" />
                            <div className="params">
                                <div className="name">AROMISTICO Coffee 1 kg</div>
                                <div className="country">Brazil</div>
                                <div className="price">6.99$</div>
                            </div>
                        </div>

                        <div className="product-cards-item">
                            <img src={coffeeImg} alt="coffee" />
                            <div className="params">
                                <div className="name">AROMISTICO Coffee 1 kg</div>
                                <div className="country">Brazil</div>
                                <div className="price">6.99$</div>
                            </div>
                        </div>

                        <div className="product-cards-item">
                            <img src={coffeeImg} alt="coffee" />
                            <div className="params">
                                <div className="name">AROMISTICO Coffee 1 kg</div>
                                <div className="country">Brazil</div>
                                <div className="price">6.99$</div>
                            </div>
                        </div>

                        <div className="product-cards-item">
                            <img src={coffeeImg} alt="coffee" />
                            <div className="params">
                                <div className="name">AROMISTICO Coffee 1 kg</div>
                                <div className="country">Brazil</div>
                                <div className="price">6.99$</div>
                            </div>
                        </div>

                        <div className="product-cards-item">
                            <img src={coffeeImg} alt="coffee" />
                            <div className="params">
                                <div className="name">AROMISTICO Coffee 1 kg</div>
                                <div className="country">Brazil</div>
                                <div className="price">6.99$</div>
                            </div>
                        </div>

                    </div>
                </div>

                <TabFloor onChange={onChange} />
            </div>
        );
    }
}

export default OurCofeee;