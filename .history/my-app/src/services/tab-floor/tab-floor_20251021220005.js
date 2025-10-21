import './tab-floor.css';

import { Component } from 'react';
import beansLogo from '../../imgs/beans-logo-brown.svg';
import beans from '../../imgs/coffee-beans-black.svg';

class TabFloor extends Component {

    render() {
        return (
            <div className='floor'>
                <div className="floor-options">
                    <a href='/'><img src={beans} alt='beans'/>Coffee house</a>
                    <a href="#">Our coffee</a>
                    <a href="#">For your pleasure</a>
                </div>
                <img src={} alt="" />
            </div>
        );
    }
}

export default TabFloor;