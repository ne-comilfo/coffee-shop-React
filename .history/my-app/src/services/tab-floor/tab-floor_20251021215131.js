import './tab-floor.css';

import { Component } from 'react';

class TabFloor extends Component {

    render() {
        return (
            <div className='header'>
                            <div className="header-options">
                                <a href='/'><img src={beans} alt='beans'/>Coffee house</a>
                                <a href="#">Our coffee</a>
                                <a href="#">For your pleasure</a>
                            </div>
                        </div>
        );
    }
}

export default TabFloor;