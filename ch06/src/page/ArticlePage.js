import React, { Component } from 'react';
import { connect } from 'react-redux';

import SpotifyAxiosArtist from './../services/SpotifyAxiosArtist';
import Album from '../components/Album';
import { actGoArtist } from '../actions';

class ArticlePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artist: null,
            albums: []
        }
    }


    componentWillMount() {
        let { match } = this.props;
        let id = match.params.id;
        this.getArtist(id);
        this.getAlbums(id);
    }

    getArtist(id) {
        SpotifyAxiosArtist.getSpotifyAxio(id).then((response) => {

            if (response !== undefined && response.data !== null) {
                this.setState({
                    artist: response.data
                });
            }
            
            this.props.changeBreadcrumb(response.data.name, `/artist/${response.data.id}`)
        });
    }

    getAlbums(id) {
        
        SpotifyAxiosArtist.getSpotifyAxioAlbums(id).then((response) => {

            if (response !== undefined && response.data !== null) {
                this.setState({
                    albums: response.data.items
                });                
            }
        });
    }

    render() {
        let artist = { name: '', external_urls: '', genres: [], images: [{ url: '' }] };
        artist = this.state.artist !== null ? this.state.artist : artist;

        let albums  = [{id: '',name: '',images: [{url: ''}]}];
        albums = this.state.albums !== null ? this.state.albums : albums;
        
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Singer</h3>
                </div>
                <div className="panel-body">
                    <div className="panel-body">
                        <div className="col-sm-4 col-md-4">
                            {this.showImage(artist)}
                            <blockquote style={{ marginTop: 20 }}>
                                <p>{artist.name}</p>
                            </blockquote>
                            <p>
                                <i className="glyphicon glyphicon-play-circle" />
                                <a rel="noopener noreferrer" target="_blank" href={artist.external_urls.spotify}> View Spotify</a><br /><br />
                                <i className="glyphicon glyphicon-play-circle" /> Genres:{this.showGenres(artist.genres)}
                            </p>
                        </div>
                        <div className="col-sm-8 col-md-8">
                            <div className="panel panel-danger">
                                <div className="panel-heading">
                                    <h3 className="panel-title">List Albums</h3>
                                </div>
                                <div className="panel-body list-albums">
                                    <div>{this.showAlbums(albums)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    showImage(item) {
        let xhtml = null;
        if (item.images !== null && item.images.length > 1) {
            xhtml = <img src={item.images[0].url} alt={item.name} className="img-rounded img-responsive" />;
        }
        return xhtml;
    }

    showGenres(genres) {
        let xhtml = null;
        if (genres !== null && genres.length > 0) {
            xhtml = genres.map((genre, index) => {
                return (
                    <span key={index} style={{ marginRight: 5 }} className="label label-warning">
                        {genre}
                    </span>
                );
            });
        }
        return xhtml;
    }

    showAlbums(albums) {
        let xhtml = null;
        if (albums !== null && albums.length > 0) {
            xhtml = albums.map((album, index) => {
                return (
                    <Album key={index} index={index} item={album}/>
                );
            });
        }
        return xhtml;
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return({
        changeBreadcrumb: (name, to) => {  
            dispatch(actGoArtist(name, to))
        }
    });
}

export default connect(null, mapDispatchToProps)(ArticlePage);