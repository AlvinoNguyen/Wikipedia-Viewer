import React, {Component} from 'react';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            toggleState: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    handleClick() {
        this.setState((state) => {
            return {
                input: '',
                toggleState: !state.toggleState
            };
        });
        this.props.hideResults();
    }

    handleKeydown(event) {
        if(event.key === 'Enter') {
            this.props.showResults(this.state.input);
            this.setState({
                input: ''
            });
        }
    }

    render() {
        return this.state.toggleState ? (
            <img
                alt="Search Icon"
                onClick={this.handleClick}
                src="./search-24px.svg"
                className="toggle"
            />
        ) : (
            <div className="toggle">
                <input
                    type="text"
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeydown}
                    value={this.state.input}
                />
                <button onClick={this.handleClick}> X </button>
            </div>
        );
    }
}

export default Toggle;