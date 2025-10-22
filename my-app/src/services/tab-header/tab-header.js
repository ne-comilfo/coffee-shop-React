import './tab-header.scss';
import beans from '../../imgs/coffee-beans.svg';

import { Component } from 'react'

class TabHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { onChange } = this.props;
        return (
            <div className='header'>
                <div className="header-options">
                    <button onClick={() => { onChange('home') }}><img src={beans} alt='beans' />Coffee house</button>
                    <button onClick={() => { onChange('ourCoffee') }}>Our coffee</button>
                    <button onClick={() => { onChange('pleasure') }}>For your pleasure</button>
                </div>
            </div>
        );
    }
}

export default TabHeader;