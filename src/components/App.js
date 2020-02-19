import React, {Component} from 'react';
import Random from './Random.js';
import Toggle from './Toggle.js';

class App extends Component {
    render() {
        return (
            <div>
                <Random/>
                <Toggle/>
                <div>Click icon to search</div>
            </div>
        );
    }
}

export default App;