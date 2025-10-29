import './pleasure.scss';

import TabFloor from '../services/tab-floor/tab-floor';
import TabHeader from '../services/tab-header/tab-header';

import { Component } from 'react';

class ForPleasure extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onChange } = this.props;
        return (
            <div className="App">
                <div className="App-header">
                    <TabHeader onChange={onChange} />
                    <div className="title"></div>

                    <TabFloor onChange={onChange} />
                </div>
            </div>
        );
    }
}

export default ForPleasure;