import React, { Component } from 'react';
import './App.css';

import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import constants from "./Components/constants";

import MainActivity from "./Components/MainActivity";
import Projects from "./Components/Projects";
import Photography from "./Components/Photography";
import About from "./Components/About";
import Project from "./Components/ProjectActivity";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path={constants.routes.main} component={MainActivity}/>
            <Route path={constants.routes.projects} component={Projects}/>
            <Route path={constants.routes.photography} component={Photography}/>
            <Route path={constants.routes.about} component={About}/>
            <Route path={constants.routes.project} component={Project}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
