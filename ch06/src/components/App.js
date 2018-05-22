import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './../route-config';
import Title from './../components/Title';
import Breadcrumb from './../components/BreadCrumb';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App container">
                    <Title />
                    <Breadcrumb />
                    <div className="row">                        
                        {this.showRouter(routes)}                        
                    </div>
                </div>
            </Router>
        );
    }

    showRouter(routes) {
        console.log(routes);
        let xhtml = null;
        if(routes.length > 0) {
            xhtml = routes.map((route, index) => {                
                console.log(route.patch + 'aa');
                
                return <Route key={index} exact={route.exact} patch={route.patch} component={route.main} />
            })
        }
        return <Switch>{xhtml}</Switch>;
    }
}

export default App;
