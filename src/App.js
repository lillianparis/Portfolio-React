import React from 'react';
import './App.css';
import Landing from './Components/Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Resume from './Components/Resume';
import Project from './Components/Project';
import NavB from './Components/NavB';
import Contact from './Components/Contact';

// First, we'll look at your App.js file. In this file, we'll want to first reorder our routes so that our resume will get loaded first and our index last. This way, we can use the index as a catch-all for the other routes (I am using this guide as a reference). Additionally, we'll want to update the resume route to have the path set to /resume, as that is where the user will be redirected (and what will appear in our browser address bar) when they click on the link. 
function App() {
    return (
    
        <Router>
        <NavB/>
            <Switch>
                <Route exact path='/' component={Landing}/>
                <Route exact path='/Project' component={Project}/>
                <Route exact path='/Resume' component={Resume}/>
                <Route exact path='/Contact' component={Contact}/>
                <Route path='*' component={Landing}/>
            </Switch>
        </Router >

    );
}

export default App;
