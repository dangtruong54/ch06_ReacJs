import React, { Component } from 'react';
import Album from '../components/Album';

class AlbumPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            album: null,
            tracks: []
        }
    }

    render() {
        return (
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3 className="panel-title">Album 1</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-4"><img className="media-object img-thumbnail" src="https://i.scdn.co/image/757378d73eedc6a53cff69b49eca173fccc9ad02" alt="singer" /></div>
                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <div className="panel panel-warning">
                                <div className="panel-heading">
                                    <h3 className="panel-title">List Tracks</h3>
                                </div>
                                <div className="panel-body">
                                    <div><Album /><Album /><Album /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default AlbumPage;