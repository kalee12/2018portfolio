import React, { Component } from 'react';
import './App.css';

import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import constants from "./Components/constants";

import MainActivity from "./Components/MainActivity";
import Projects from "./Components/Projects";
import Photography from "./Components/Photography";
import About from "./Components/About";
import Project from "./Components/ProjectActivity";
import Blog from "./Components/BlogActivity";
import Genesis from "./Components/Blog/Genesis";
import Backbone from "./Components/Blog/Backbone";
import Dirtyneon from "./Components/Blog/Dirtyneon";
import Iflid from "./Components/Blog/Ifeellikeimdrowning";

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
            <Route path={constants.routes.blog} component={Blog}/>
            <Route path={constants.routes.genesis} component={Genesis}/>
            <Route path={constants.routes.backbone} component={Backbone}/>
            <Route path={constants.routes.dirtyneon} component={Dirtyneon}/>
            <Route path={constants.routes.iflid} component={Iflid}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
