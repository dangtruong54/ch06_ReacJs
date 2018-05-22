import React, { Component } from 'react';

class FormSearch extends Component {
    render() {
        return (
            <form className="form-inline">
                <div className="form-group">
                    <input name="username" type="text" className="form-control" placeholder="Enter artist name ..." />
                    <button type="button" className="btn btn-danger">Search</button>
                </div>
            </form>
        )
    }
}

export default FormSearch;