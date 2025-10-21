import './tab-floor.css';

import { Component } from 'react';
import beans from '../../imgs/beans-brown.svg';

class TabFloor extends Component {

    render() {
        return (
            <div className='floor'>
                <div className="floor-options">
                    <a href='/'><img src={beans} alt='beans'/>Coffee house</a>
                    <a href="#">Our coffee</a>
                    <a href="#">For your pleasure</a>
                </div>
            </div>
        );
    }
}

export default TabFloor;