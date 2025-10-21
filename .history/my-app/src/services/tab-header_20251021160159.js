import './tab-header.css';
import beans from '../imgs/coffee-beans.svg';

import { Component } from 'react'

class TabHeader extends Component {
    render() {
        return (
            <div className='header'>
                <div className="header-options">
                    <a href='/'><img src={beans} alt='beans'/></img>Coffee house</a>
                    <a href="#">Our coffee</a>
                    <a href="#">For your pleasure</a>
                </div>
            </div>
        );
    }
}

export default TabHeader;