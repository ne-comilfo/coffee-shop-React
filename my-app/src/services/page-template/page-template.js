import './page-template.scss';

import TabFloor from '../tab-floor/tab-floor';
import TabHeader from '../tab-header/tab-header';

import beansLogoBrown from '../../imgs/house/beans-logo-brown.svg';
import line from '../../imgs/our-coffee/line.svg';

import { Component } from 'react';

class PageTemplate extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onChange, changeProduct } = this.props;
        const { headerTitle, previewCoffee, productTitle, productText, pageName, coffeeImg, bgImg } = this.props;
        return (
            <div className="app">
                <div className="app-header" style={{ backgroundImage: `url(${bgImg})` }}>
                    <TabHeader onChange={onChange} />
                    <div className="title">{headerTitle}</div>
                </div>
                <div className="wrapper">
                    <div className="about-product">
                        <img src={previewCoffee} alt="coffee" />
                        <div className="title-text">
                            <div className="title">{productTitle}</div>
                            <img src={beansLogoBrown} alt="line" />
                            <div className="text" style={{textAlign: pageName === 'about-coffee' ? 'left' : 'center'}}><div dangerouslySetInnerHTML={{ __html: productText }} /></div>
                        </div>
                    </div>
                    <img src={line} alt="line" style={{ display: pageName === 'about-coffee' ? 'none' : 'block' }} />
                </div>

                {pageName !== 'about-coffee' && (<div className="products">
                    {pageName === 'our-coffee' && (
                        <div className="groups">
                            <div className="search-group">
                                <label htmlFor='search'>Looking for</label>
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
                    )}

                    <div className="product-cards">
                        <button className="product-cards-item" data-number='1' onClick={() => {
                            onChange('about-coffee');
                            changeProduct(1);
                        }}>
                            <img src={coffeeImg} alt="coffee" />
                            <div className="params">
                                <div className="name">AROMISTICO Coffee 1 kg</div>
                                <div className="country">Brazil</div>
                                <div className="price">6.99$</div>
                            </div>
                        </button>

                        <button className="product-cards-item" data-number='2' onClick={() => {
                            onChange('about-coffee');
                            changeProduct(2);
                        }}>
                            <img src={coffeeImg} alt="coffee" />
                            <div className="params">
                                <div className="name">AROMISTICO Coffee 1 kg</div>
                                <div className="country">Kenya</div>
                                <div className="price">6.99$</div>
                            </div>
                        </button>

                        <button className="product-cards-item" data-number='3' onClick={() => {
                            onChange('about-coffee');
                            changeProduct(3);
                        }}>
                            <img src={coffeeImg} alt="coffee" />
                            <div className="params">
                                <div className="name">AROMISTICO Coffee 1 kg</div>
                                <div className="country">Columbia</div>
                                <div className="price">6.99$</div>
                            </div>
                        </button>

                        <button className="product-cards-item" data-number='4' onClick={() => {
                            onChange('about-coffee');
                            changeProduct(4);
                        }}>
                            <img src={coffeeImg} alt="coffee" />
                            <div className="params">
                                <div className="name">AROMISTICO Coffee 1 kg</div>
                                <div className="country">Brazil</div>
                                <div className="price">6.99$</div>
                            </div>
                        </button>

                        <button className="product-cards-item" data-number='5' onClick={() => {
                            onChange('about-coffee');
                            changeProduct(5);
                        }}>
                            <img src={coffeeImg} alt="coffee" />
                            <div className="params">
                                <div className="name">AROMISTICO Coffee 1 kg</div>
                                <div className="country">Brazil</div>
                                <div className="price">6.99$</div>
                            </div>
                        </button>

                        <button className="product-cards-item" data-number='6' onClick={() => {
                            onChange('about-coffee');
                            changeProduct(6);
                        }}>
                            <img src={coffeeImg} alt="coffee" />
                            <div className="params">
                                <div className="name">AROMISTICO Coffee 1 kg</div>
                                <div className="country">Brazil</div>
                                <div className="price">6.99$</div>
                            </div>
                        </button>

                    </div>
                </div>
                )}
                <TabFloor onChange={onChange} />
            </div>
        );
    }
}

export default PageTemplate;