import React, { Component } from 'react';
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

export default ArticleList;