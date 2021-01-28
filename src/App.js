// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Landing from './Components/Landing';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Resume from './Components/Resume';

function App() {
  return (
// Self closing tag
<Router>

{/* <Switch> */}
    <Route path='/'>
        <Landing />
    </Route>
    <Route path='/Portfolio-React/Resume'>
        <Resume />
    </Route>
    {/* <Route path='/login'>
        <Login />
    </Route>
    <PrivateRoute exact path='/notes'>
        <Notes />
    </PrivateRoute>

    <PrivateRoute exact path ='/createraffle'>
        <CreateRaffle />
    </PrivateRoute> */}
{/* </Switch> */}


</Router>
  
  );
}

export default App;
