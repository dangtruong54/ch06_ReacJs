import React, { Component } from 'react';

class Album extends Component {
    render() {
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="thumbnail">
                    <img src="https://i.scdn.co/image/757378d73eedc6a53cff69b49eca173fccc9ad02" alt="Giác Quan Thứ, Vol. 6" className="img-responsive" />
                    <div className="caption">
                        <h5><a href="/album/6GzEDxxX5HJBdR6iohvrPc">Giác Quan Thứ, Vol. 6</a></h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Album;