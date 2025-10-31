import './App.scss';

import TabHeader from '../services/tab-header/tab-header';
import TabFloor from '../services/tab-floor/tab-floor';
import OurCofeee from '../our-coffee/our-coffee';
import ForPleasure from '../pleasure/pleasure';
import AboutCoffee from '../about-coffee/about-coffee';

import beansLogo from '../imgs/house/beans-logo.svg';
import beansLogoBrown from '../imgs/house/beans-logo-brown.svg';
import photo1 from '../imgs/house/coffee1.svg';
import photo2 from '../imgs/house/coffee2.svg';
import photo3 from '../imgs/house/coffee3.svg';
import coffeeImg from '../imgs/our-coffee/preview-product.png';

import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      selectedProduct: null,
      inputValue: '',
      filter: '',
      products: [
        { id: 1, country: 'Brazil', price: '6.99$', description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam, quis  nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.`, img: coffeeImg },
        { id: 2, country: 'Kenya', price: '6.99$', description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam, quis  nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.`, img: coffeeImg },
        { id: 3, country: 'Columbia', price: '6.99$', description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam, quis  nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.`, img: coffeeImg },
        { id: 4, country: 'Brazil', price: '6.99$', description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam, quis  nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.`, img: coffeeImg },
        { id: 5, country: 'Brazil', price: '6.99$', description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam, quis  nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.`, img: coffeeImg },
        { id: 6, country: 'Brazil', price: '6.99$', description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam, quis  nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.`, img: coffeeImg }
      ]
    }
  }

  changeProduct = (productId) => {
    this.setState({ selectedProduct: productId, page: 'about-coffee' });
    window.history.pushState(
      { page: 'about-coffee', product: productId },
      '',
      `/about-coffee?id=${productId}`
    );
  }

  changeInput = (inputValue) => {
    this.setState({ inputValue: inputValue });
  }

  changeFilter = (filterName) => {
    this.setState({ filter: filterName });
  }

  changePage = (pageName) => {
    this.setState({ page: pageName, filter: '', inputValue: '' });
    window.history.pushState({ page: pageName }, '', `/${pageName}`);
  };

  getFilteredProducts = () => {
    const { products, filter, inputValue } = this.state;
    return products.filter(p => {
      const matchesCountryFilter = filter ? p.country.toLowerCase() === filter.toLowerCase() : true;
      const matchesSearch = inputValue ? p.country.toLowerCase().includes(inputValue.toLowerCase()) : true;
      return matchesCountryFilter && matchesSearch;
    });
  }

  componentDidMount() {
    window.addEventListener('popstate', this.handlePopState);

    const path = window.location.pathname.replace('/', '');
    const searchParams = new URLSearchParams(window.location.search);

    let page = path || 'home';
    let id = Number(searchParams.get('id'));

    if (page === 'about-coffee' && !id) {
      id = 1;
      const newUrl = `/about-coffee?id=${id}`;
      window.history.replaceState({ page, id }, '', newUrl);
    }

    this.setState({ page, selectedProduct: id });
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePopState);
  }

  handlePopState = () => {
    const path = window.location.pathname.replace('/', '') || 'home';
    const searchParams = new URLSearchParams(window.location.search);

    let id = null;
    if (path === 'about-coffee') id = Number(searchParams.get('id')) || 1;

    this.setState({ page: path, selectedProduct: id });
  };

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
      <OurCofeee
        onChange={this.changePage}
        changeProduct={this.changeProduct}
        changeFilter={this.changeFilter}
        changeInput={this.changeInput}
        products={this.getFilteredProducts()}
      />
    );
  }

  renderPleasure() {
    return (
      <ForPleasure
        onChange={this.changePage}
        changeProduct={this.changeProduct}
        changeFilter={this.changeFilter}
        changeInput={this.changeInput}
        products={this.getFilteredProducts()} />
    );
  }

  renderAbout() {
    const { selectedProduct } = this.state;
    const product = this.state.products.find(p => p.id === selectedProduct) || this.state.products[0];
    const { price, country, description, img } = product;
    return (
      <AboutCoffee onChange={this.changePage} price={price} coffeeDescription={description} country={country} previewCoffee={img} />
    );
  }

  render() {
    const { page, selectedProduct } = this.state;
    return (
      <>
        {page === 'home' && this.renderHome()}
        {page === 'our-coffee' && this.renderOurCoffee()}
        {page === 'for-your-pleasure' && this.renderPleasure()}
        {page === 'about-coffee' && selectedProduct && this.renderAbout()}
      </>
    );
  }
}

export default App;