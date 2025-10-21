import './Tab-header.css'

import { Component } from 'react'

class TabHeader extends Component {
    render() {
        return (
            <div className='header'>
                <div className="header-options">
                    <a href='/'><img src='../../'></img>Coffee house</a>
                </div>
            </div>
        );
    }
}