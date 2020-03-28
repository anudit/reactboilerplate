import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

import Nav from './pages/components/Nav';

import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
