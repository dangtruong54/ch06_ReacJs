import React, { Component } from 'react';
import Track from '../components/Track';

import SpotifyAxiosArtist from './../services/SpotifyAxiosArtist';

class AlbumPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            album: null,
            tracks: []
        }
    }

    componentWillMount() {
        let { match } = this.props;
        let id = match.params.id;
        this.getTracks(id);
        this.getAnAlbum(id);
    }

    getTracks(id) {
        
        SpotifyAxiosArtist.getSpotifyAxioTracks(id).then((response) => {

            if (response !== undefined && response.data !== null) {
                this.setState({
                    tracks: response.data.items
                });
            }
        });
    }

    getAnAlbum(id) {
        SpotifyAxiosArtist.getSpotifyAxioAnAlbum(id).then((response) => {

            if (response !== undefined && response.data !== null) {
                this.setState({
                    album: response.data
                });
            }           
        });
    }

    render() {
        let tracks = [];        
        tracks = (this.state.tracks.length !== 0) ? this.state.tracks : tracks;

        let album = {name: '', images:[{url: ''}]};
        album = (this.state.album !== null) ? this.state.album : album;

        return (
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3 className="panel-title">{album.name}</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-4">{this.showImageAlbum(album)}</div>
                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <div className="panel panel-warning">
                                <div className="panel-heading">
                                    <h3 className="panel-title">List Tracks</h3>
                                </div>
                                <div className="panel-body">
                                    <div>{this.showTracks(tracks)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    showImageAlbum(album) {
        let xhtml = null;
        if(album !== null && album !== undefined) {
            xhtml = <img className="media-object img-thumbnail" src={album.images[0].url} alt="singer" />
        }
        return xhtml;
    }

    showTracks(tracks) {
        let xhtml = null;
        
        if(tracks !== null && tracks !== undefined) {
            xhtml = tracks.map((track, index) => {
                return <Track key={index} item={track} index={index} />
            })
        }
        return xhtml;
    }
}

export default AlbumPage;