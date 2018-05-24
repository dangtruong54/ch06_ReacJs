import React, { Component } from 'react';
import { connect } from 'react-redux';

import Article from './Article';

class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            isExist: false
        }
    }

    render() {     
        let {query} = this.props.query;
   
        let xhtml = <h3>Enter Article name 's to start</h3>
        if(1 < 2){
            xhtml = <div><Article /><Article /><Article /></div>
        }

        return(
            <div className="row">
                {xhtml}
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        query: state.query
    }
}

export default connect(mapStateToProps, null)(ArticleList);