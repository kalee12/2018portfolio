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
import Awas from "./Components/Blog/Angelwithashotgun";
import Color from "./Components/Blog/Colorgreen";
import Demons from "./Components/Blog/Demons";
import Day1 from "./Components/Blog/dailyui/day1";
import Tdgbreak from "./Components/Blog/Break";
import Day2 from "./Components/Blog/dailyui/day2";
import Day3 from "./Components/Blog/dailyui/day3";
import Day4 from "./Components/Blog/dailyui/day4";
import Sunmoon from "./Components/Blog/logo/sunmoon";
import Day5 from "./Components/Blog/dailyui/day5";

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
            <Route path={constants.routes.awas} component={Awas}/>
            <Route path={constants.routes.colorgreen} component={Color}/>
            <Route path={constants.routes.demons} component={Demons}/>
            <Route path={constants.routes.day1} component={Day1}/>
            <Route path={constants.routes.tdgbreak} component={Tdgbreak}/>
            <Route path={constants.routes.day2} component={Day2}/>
            <Route path={constants.routes.day3} component={Day3}/>
            <Route path={constants.routes.day4} component={Day4}/>
            <Route path={constants.routes.sunmoon} component={Sunmoon}/>
            <Route path={constants.routes.day5} component={Day5}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
