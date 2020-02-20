import React, {Component} from 'react';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            toggleState: this.props.initialToggleState
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleKeydown(event) {
        if(event.key === 'Enter') {
            this.setState({
                input: ''
            });
        }
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    handleClick() {
        this.setState((state) => {
            return {toggleState: !state.toggleState};
        });
    }

    handleSubmit() {
        this.setState({
            input: ''
        });
    }

    render() {
        return this.state.toggleState ? (
            <img
                alt="Hello"
                onClick={this.handleClick}
                src="./search-24px.svg"
            />
        ) : (
            <div>
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