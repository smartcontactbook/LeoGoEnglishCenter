import React, {Component} from 'react';
import {Route, Switch,BrowserRouter as Router, Link, render} from 'react-router-dom';
import Home from "./pages/Home.js";;
import Lecturer from "./pages/Lecturer.js";

class Master extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/lecturer' component={Lecturer}/>
                    // <Route exact path='/product' component={Product}/>
                    // <Route exact path='/topic' component={Topic}/>
                </Switch>
            </main>
        )
    }
}

export default Master

