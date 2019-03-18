import React, {Component} from 'react';
import {Route, Switch,BrowserRouter as Router, Link} from 'react-router-dom';
import lecturer from "./lecturer/lecturer.js";
import { render } from 'react-dom';

class masterUser extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    // <Route exact path='/' component={Home}/>
                    <Route exact path='/' component={lecturer}/>
                    // <Route exact path='/product' component={Product}/>
                    // <Route exact path='/topic' component={Topic}/>
                </Switch>
            </Router>
        )
    }
}

export default masterUser