import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormSearch from '../components/FormSearch';
import ArticleList from '../components/ArticleList';
import { actGoHome } from '../actions';

class Homepage extends Component {

    componentDidMount(){
        this.props.changeBreadcrumb();
    }

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

const mapDispatchToProps = (dispatch, ownProps) => {
    return { 
        changeBreadcrumb: () => {
            dispatch(actGoHome());
        }
    }
}

export default connect(null, mapDispatchToProps)(Homepage);