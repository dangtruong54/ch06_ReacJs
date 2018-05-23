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
                    <Switch>                        
                        {this.showRouter(routes)}
                    </Switch>
                    </div>
                </div>
            </Router>
        );
    }

    showRouter(routes) {
        let xhtml = null;
        if(routes.length > 0) {
            xhtml = routes.map((route, index) => {  
                return <Route key={index} exact={route.exact} path={route.path} component={route.main} />
            })
        }
        return xhtml;
    }
}

export default App;
