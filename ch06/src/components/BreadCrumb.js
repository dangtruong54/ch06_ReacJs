import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';

const MenuLink = ({menu}) => {
    return(
        <Route
            path={menu.to}
            exact={menu.exact}
            children=
                {
                    ({ match }) => {
                        if(match !== null && match.exact === true) {
                            return <li className='active'>{menu.name}</li>
                        }else {
                            return <li><Link to={menu.to} >{menu.name}</Link></li>
                        }
                    }
                }
        />
    );    
}

class BreadCrumbs extends Component {
    render() {
        let menus = this.props.breadcrumb;

        let xhtml = null;
        if(menus.length > 0) {
            xhtml = menus.map((menu, index) => {
                return <MenuLink key={index} menu={menu} index={index} />
            }) 
        }
        return <ol className="breadcrumb">{xhtml}</ol>;
    }
}

const mapStateToProps = state => {
    return ({
        breadcrumb: state.breadcrumb
    })
}

export default connect(mapStateToProps,null )(BreadCrumbs);