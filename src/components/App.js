import React, {Component} from 'react';
import Random from './Random.js';
import Toggle from './Toggle.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            showResults: false,
            results: ''
        };
        this.showResults = this.showResults.bind(this);
        this.hideResults = this.hideResults.bind(this);
    }

    showResults(results) {
        this.setState({
            results,
            showResults: true
        });
    }

    hideResults() {
        this.setState({
            showResults: false
        });
    }

    render() {
        return (
            <div>
                <Random/>
                <Toggle
                    showResults={this.showResults} 
                    hideResults={this.hideResults}
                />
                {
                    this.state.showResults ?
                    <div>{this.state.results}</div> : 
                    <div>Click icon to search</div>
                }
            </div>
        );
    }
}

export default App;