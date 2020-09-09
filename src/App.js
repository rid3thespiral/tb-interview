import React from 'react';
import './styles/App.css';
import Login from './components/Login'
import Signup from './components/Signup'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path ="/login">
          <Login/>
        </Route>
        <Route path ="/signup">
          <Signup/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
