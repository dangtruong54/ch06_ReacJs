import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as configs from './../constant/Configs';
import Article from './Article';

class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            isExist: false
        }
    }

    searchQuery = (query) => {
        if (query !== '') {
            let nameQuery = encodeURI(query);
            let url = configs.BASE_URL + 'search?q=' + nameQuery + '&type=artist&market=VN&limit=10&offset=0';
            let config = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + configs.API_KEY
                }
            }
            fetch(url, config).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => {
                    console.log(response.artists.items);
                    this.setState({
                        articles: response.artists.items
                    })
                });
        }
    }

    componentWillReceiveProps(nextProps) {
        this.searchQuery(nextProps.query);
    }

    render() {
        let { articles } = this.state.articles;
        
        let xhtml = <h3>Enter Article name 's to start</h3>
        if (1 < 2) {
            xhtml = <div><Article /><Article /><Article /></div>
        }

        return (
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