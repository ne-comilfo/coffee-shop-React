import PageTemplate from '../services/page-template/page-template';

import previewCoffee from '../imgs/pleasure/preview-pleasure.png';
import coffeeImg from '../imgs/our-coffee/coffee-card-img.svg';
import bgImg from '../imgs/pleasure/pleasure-bg.svg';

import { Component } from 'react';

class ForPleasure extends Component {
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
                {...{ onChange, products, changeFilter, changeInput, changeProduct, headerTitle: 'For your pleasure', previewCoffee, productTitle: 'About our goods', productText: text, pageName: 'for-your-pleasure', coffeeImg, bgImg }}
            />
        );
    }
}

export default ForPleasure;