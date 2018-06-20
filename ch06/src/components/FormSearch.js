import React, { Component } from 'react';

import { connect } from 'react-redux';
import { actChangeQuery } from '../actions';

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
        let query = this.state.query;
        this.props.changeQuery(query);        
        event.preventDefault();
    }

    handleClear = (event) => {
        this.setState({
            query: ''
        })       
        
        this.props.changeQuery('');
        event.preventDefault();
    }

    handleEnter = (event) => {
        if(event.key === 'Enter') {
            this.handleSearch(event);
        }
    }

    render() {
        let query = (this.state.query !== '') ? this.state.query : this.props.query;       
        
        return (
            <form className="form-inline">
                <div className="form-group">
                    <input type="text" name='query' value={query} onKeyPress={this.handleEnter} onChange={this.handleChange} className="form-control" placeholder="Enter artist name ..." />                                
                    <button type="button" className="btn btn-danger" onClick={this.handleSearch} >Search</button>
                    <button type="button" className="btn btn-warning" onClick={this.handleClear}>Clear</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
        query: state.query
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeQuery: (query) => {
            dispatch(actChangeQuery(query));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSearch);