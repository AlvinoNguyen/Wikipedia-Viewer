import React, {Component} from 'react';
import Random from './Random.js';
import Result from './Result.js';
import Toggle from './Toggle.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            results: ''
        };
        this.results = [];
        this.showResults = this.showResults.bind(this);
        this.hideResults = this.hideResults.bind(this);
    }

    showResults(results) {
        const api=`https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${results.replace(' ', '%20')}`;
        fetch(api)
        .then(response => response.json())
        .then(data => {
            this.results = [];
            const curids = Object.keys(data.query.pages);
            const information = Object.values(data.query.pages);
            for(let i = 0; i < curids.length; i++) {
                const curid = curids[i];
                const info = information[i];
                this.results.push(
                    <Result
                        curid={curid}
                        title={info.title}
                        extract={info.extract}
                        key={info.pageid}
                    />
                );
            }
            this.setState({
                showResults: true
            });
        })
        .catch(error => console.log(error));
    }

    hideResults() {
        this.results = [];
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
                    <div>{this.results}</div> : 
                    <div>Click icon to search</div>
                }
            </div>
        );
    }
}

export default App;