import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    //Component State
    constructor(props) {
        super(props);
        this.state = { term: ''};
        //Overriding this to bind correct context
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        // Fetching weather data
        this.props.fetchWeather(this.state.term);
        // Clearing the input value
        this.setState({ term: '' });
    }

    render () {
        return (
            // In form tag enter or click on btn = post request
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Sprawdź pogodę dla wybranych miast"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Szukaj</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);