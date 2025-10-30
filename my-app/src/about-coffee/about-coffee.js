import PageTemplate from '../services/page-template/page-template';

import bgImg from '../imgs/our-coffee/our-coffee-bg.svg';

import { Component } from 'react';

class AboutCoffee extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onChange } = this.props;
        const { country, price, coffeeDescription, previewCoffee } = this.props;
        const text = `<p>Counrty: ${country}</p> <p>Description: ${coffeeDescription}</p> <p>Price: ${price}</p>`;
        return (
            <PageTemplate
                {...{onChange, productText: text, pageName: 'about-coffee', headerTitle: 'Our coffee', previewCoffee, productTitle: 'About it', bgImg}}
            />
        );
    }
};

export default AboutCoffee;