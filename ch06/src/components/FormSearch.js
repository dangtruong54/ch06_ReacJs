import React, { Component } from 'react';

class FormSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }
   
    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSearch = (event) => {

        event.preventDefault();
    }

    handleClear = (event) => {

        event.preventDefault();
    }

    handleEnter = (event) => {

        this.handleSearch(event);
        event.preventDefault();
    }

    render() {
        let query = (this.state.query !== '') ? this.state.query : this.props.query;
        return (
            <form className="form-inline">
                <div className="form-group">
                    <input type="text" name={query} value={query} onChange={this.handleChange} className="form-control" onKeyPress={this.handleEnter} placeholder="Enter artist name ..." />
                    <button type="button" className="btn btn-danger" onClick={this.handleSearch}>Search</button>
                    <button type="button" className="btn btn-warning" onClick={this.handleClear}>Clear</button>
                </div>
            </form>
        )
    }
}

export default FormSearch;