import React, { Component } from 'react';

import FormSearch from '../components/FormSearch';
import ArticleList from '../components/ArticleList';

class Homepage extends Component {
    render() {
        return(
            <div className="panel panel-info">
                <div className="panel-heading">
                    <FormSearch />
                </div>
                <div className="panel-body">
                    <ArticleList />
                </div>
            </div>
        );
    }    
}

export default Homepage;