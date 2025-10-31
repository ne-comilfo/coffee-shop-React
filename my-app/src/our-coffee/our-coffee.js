import PageTemplate from '../services/page-template/page-template';

import previewCoffee from '../imgs/our-coffee/preview.png';
import coffeeImg from '../imgs/our-coffee/coffee-card-img.svg';
import bgImg from '../imgs/our-coffee/our-coffee-bg.svg';

import { Component } from 'react';

class OurCofeee extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { onChange, changeProduct, changeFilter, changeInput, products } = this.props;
        const text = `<p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                                <p>Afraid at highly months do things on at. Situation recommend objection do intention <br/> so questions. <br/>
                                As greatly removed calling pleased improve an. <br/>
                                Last ask him cold feel <br/> met spot shy want. Children me laughing we prospect answered followed. At it went <br/> is song that held help face. </p>
        `;
        return (
            <PageTemplate
                {...{ onChange, products, changeFilter, changeInput, changeProduct, headerTitle: 'Our coffee', previewCoffee, productTitle: 'About our beans', productText: text, pageName: 'our-coffee', coffeeImg, bgImg }}
            />
        );
    }
}

export default OurCofeee;