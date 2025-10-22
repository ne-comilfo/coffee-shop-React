import './tab-floor.scss';

import { Component } from 'react';
import beansLogo from '../../imgs/beans-logo-brown.svg';
import beans from '../../imgs/coffee-beans-black.svg';

class TabFloor extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { onChange } = this.props;
        return (
            <div className='floor'>
                <div className="floor-options">
                    <button onClick={() => {onChange('home')}}><img src={beans} alt='beans' className='link-img' />Coffee house</button>
                    <button onClick={() => {onChange('ourCoffee')}}>Our coffee</button>
                    <button onClick={() => {onChange('pleasure')}}>For your pleasure</button>
                </div>
                <img src={beansLogo} alt='coffee&lines' className='beans-logo' />
            </div>
        );
    }
}

export default TabFloor;