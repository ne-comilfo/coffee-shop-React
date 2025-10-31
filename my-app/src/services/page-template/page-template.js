import './page-template.scss';

import TabFloor from '../tab-floor/tab-floor';
import TabHeader from '../tab-header/tab-header';

import beansLogoBrown from '../../imgs/house/beans-logo-brown.svg';
import line from '../../imgs/our-coffee/line.svg';

import { Component } from 'react';

class PageTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnsClickCount: { 'Brazil': 0, 'Columbia': 0, 'Kenya': 0 }
        }
    }

    getFilteredCards(products) {
        return products.map(product => (
            <button
                data-number={product.id}
                key={product.id}
                className="product-cards-item"
                onClick={() => {
                    this.props.onChange('about-coffee');
                    this.props.changeProduct(product.id);
                }}
            >
                <img src={product.img} alt={product.name} />
                <div className="params">
                    <div className="name">{product.name}</div>
                    <div className="country">{product.country}</div>
                    <div className="price">{product.price}</div>
                </div>
            </button>
        ));
    }

    render() {
        const { onChange, changeFilter, changeInput } = this.props;
        const { headerTitle, previewCoffee, productTitle, productText, pageName, bgImg } = this.props;
        const { btnsClickCount } = this.state;
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
                            <div className="text" style={{ textAlign: pageName === 'about-coffee' ? 'left' : 'center' }}><div dangerouslySetInnerHTML={{ __html: productText }} /></div>
                        </div>
                    </div>
                    <img src={line} alt="line" style={{ display: pageName === 'about-coffee' ? 'none' : 'block' }} />
                </div>

                {pageName !== 'about-coffee' && (<div className="products">
                    {pageName === 'our-coffee' && (
                        <div className="groups">
                            <div className="search-group">
                                <label htmlFor='search'>Looking for</label>
                                <input type="search" onChange={(e) => { changeInput(e.target.value) }} name="search" id="search" placeholder='start typing here...' />
                            </div>
                            <div className="filter-group">
                                <div className="title">Or filter</div>
                                <div className="buttons">
                                    <button type="button" onClick={(e) => {
                                        btnsClickCount[e.target.textContent]++;
                                        if (btnsClickCount[e.target.textContent] % 2 === 1) changeFilter(e.target.textContent);
                                        else changeFilter('');
                                    }}>Brazil</button>
                                    <button type="button" onClick={(e) => {
                                        btnsClickCount[e.target.textContent]++;
                                        if (btnsClickCount[e.target.textContent] % 2 === 1) changeFilter(e.target.textContent);
                                        else changeFilter('');
                                    }}>Kenya</button><button type="button" onClick={(e) => {
                                        btnsClickCount[e.target.textContent]++;
                                        if (btnsClickCount[e.target.textContent] % 2 === 1) changeFilter(e.target.textContent);
                                        else changeFilter('');
                                    }}>Columbia</button>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="product-cards">
                        {this.getFilteredCards(this.props.products)}
                    </div>
                </div>
                )
                }
                <TabFloor onChange={onChange} />
            </div >
        );
    }
}

export default PageTemplate;