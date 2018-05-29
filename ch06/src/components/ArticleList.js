import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spotify from './../services/SpotifyApi'
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
                Spotify.getSpotifyApiArtist(query).catch(error => console.error('Error:', error))
                .then(response => {          
                    this.setState({
                        articles: response.artists.items
                    })
                });
        }else {
            this.setState({
                articles: ''
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        this.searchQuery(nextProps.query);
    }

    render() {
        let { articles } = this.state;        
        let { query } = this.props;

        let xhtml = <h3>Enter Article name 's to start</h3>
        if (articles !== null && articles.length > 0) {
            xhtml = null;
            xhtml = articles.map((article, index) => {
                return <Article key={index} item={article} index={index} />
            })
        }else if(query !== '') {
            xhtml = <h3>Khong co du lieu cho <strong>{query}</strong></h3>
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