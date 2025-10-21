import './Tab-header.css'

import { Component } from 'react'

class TabHeader extends Component {
    render() {
        return (
            <div className='header'>
                <div className="header-options">
                    <a href='/'><img src='../../imgs/coffee-beans.svg'></img>Coffee house</a>
                    <a href="#"></a>
                </div>
            </div>
        );
    }
}