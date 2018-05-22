import React, { Component } from 'react';

class Track extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 track">
                <h4>Yêu Trên Đầu Môi</h4>
                <audio src="https://p.scdn.co/mp3-preview/9a7c48323c4009138401b8f00bf95b2179eee5dd?cid=f53ff2c796004331a1da75e4b95a83a9" controls>Your browser does not support the audio element.</audio>
            </div>
        );
    }
}