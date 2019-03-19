import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Lecturer from './managementUser/lecturer/Lecturer.js';
import AddLecturer from './managementUser/lecturer/AddLecturer.js';
import Tutors from './managementUser/tutors/Tutor.js';
import AddTutor from './managementUser/tutors/AddTutor.js';
import Home from './managementUser/lecturer/Home.js';
import Childrens from './managementUser/childrens/Childrens.js';
import AddChildren from './managementUser/childrens/AddChildren.js';
import Course from './courseManagement/Course.js';

class RouterPath extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/lecturer' component={Lecturer}/>
                    <Route exact path='/AddLecturer' component={AddLecturer}/>
                    <Route exact path='/tutors' component={Tutors}/>
                    <Route exact path='/AddTutor' component={AddTutor}/>
                    <Route exact path='/Childrens' component={Childrens}/>
                    <Route exact path='/AddChildren' component={AddChildren}/>
                    <Route exact path='/course' component={Course}/>
                </Switch>
            </main>
        )
    }
}

export default RouterPath