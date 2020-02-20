import React, {Component} from 'react';
import Random from './Random.js';
import Toggle from './Toggle.js';

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Random/>
                <Toggle initialToggleState={true}/>
                <div>Click icon to search</div>
            </div>
        );
    }
}

export default App;