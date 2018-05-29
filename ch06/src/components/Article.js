import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Article extends Component {
    render() {

        let item = {          
            genres : [],
            href : "",          
            images : [{url: ''}, {url:''}],
            name : "",         
            type : "",
        }

        item = (this.props.item !== null) ? this.props.item : item;
       
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="thumbnail">
                    {this.showImage(item)}
                    <div className="caption">                      
                        <h3><Link to={`artist/${item.id}`}>{item.name}</Link></h3>
                        <p>{this.showgGenres(item)}</p>
                    </div>
                </div>
            </div>
        )
    }

    showImage(item) {        
        let xhtml = null;
        
        if(item !== null && item.images.length > 1) {            
            xhtml = <img src={item.images[1].url} alt={item.name} />;            
        }

        return xhtml;
    }
    
    showgGenres(item) {
        let xhtml = null;

        if(item !== null && item.genres.length > 0) {
            xhtml = item.genres.map((genre, index) => {
                return <span key={index} className="label label-warning" style={{ marginRight: 5 }}>{genre}</span>;
            })
        }
        return xhtml;
    }

}

export default Article;