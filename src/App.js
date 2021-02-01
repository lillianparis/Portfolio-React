// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Landing from './Components/Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Resume from './Components/Resume';
import Contact from './Components/Contact';

// First, we'll look at your App.js file. In this file, we'll want to first reorder our routes so that our resume will get loaded first and our index last. This way, we can use the index as a catch-all for the other routes (I am using this guide as a reference). Additionally, we'll want to update the resume route to have the path set to /resume, as that is where the user will be redirected (and what will appear in our browser address bar) when they click on the link. 
function App() {
    return (
        // Self closing tag
        <Router>
            <Landing></Landing>
            <Switch>
                <Route exact path='/resume'>
                    <Resume />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                {/* <Route path='/login'>
                    <Login />
                </Route> */}

           
            </Switch>
        </Router>

    );
}

export default App;
