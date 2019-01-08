import React, { Component } from 'react';
import './App.css';
import './component.css';

import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import constants from "./Components/constants";

import MainActivity from "./Components/MainActivity";
import Projects from "./Components/Projects";
import Photography from "./Components/Photography";
import About from "./Components/About";
import Project from "./Components/ProjectActivity";

import Blog from "./Components/BlogActivity";
import Genesis from "./Components/Blog/emotion/Genesis";
import Backbone from "./Components/Blog/emotion/Backbone";
import Dirtyneon from "./Components/Blog/emotion/Dirtyneon";
import Iflid from "./Components/Blog/emotion/Ifeellikeimdrowning";
import Awas from "./Components/Blog/emotion/Angelwithashotgun";
import Color from "./Components/Blog/emotion/Colorgreen";
import Demons from "./Components/Blog/emotion/Demons";
import Tdgbreak from "./Components/Blog/emotion/Break";

import Sunmoon from "./Components/Blog/logo/sunmoon";
import Clouds from "./Components/Blog/emotion/Clouds";
import Lotus from "./Components/Blog/logo/lotus";
import Sun from "./Components/Blog/logo/sun";
import Cloud from "./Components/Blog/logo/cloud";


import Day1 from "./Components/Blog/dailyui/day1";
import Day2 from "./Components/Blog/dailyui/day2";
import Day3 from "./Components/Blog/dailyui/day3";
import Day4 from "./Components/Blog/dailyui/day4";
import Day5 from "./Components/Blog/dailyui/day5";
import Day6 from "./Components/Blog/dailyui/day6";
import Day7 from "./Components/Blog/dailyui/day7";
import Day8 from "./Components/Blog/dailyui/day8";
import Day9 from "./Components/Blog/dailyui/day9";
import Day10 from "./Components/Blog/dailyui/day10";
import Day11 from "./Components/Blog/dailyui/day11";
import Day12 from "./Components/Blog/dailyui/day12";
import Day13 from "./Components/Blog/dailyui/day13";
import Day14 from "./Components/Blog/dailyui/day14";
import Day15 from "./Components/Blog/dailyui/day15";
import Day16 from "./Components/Blog/dailyui/day16";

import Aevus from "./Components/Projects/Aevus";
import Chromatic from "./Components/Projects/Chromatic";
import Ambulo from "./Components/Projects/Ambulo";
import SecondHome from "./Components/Projects/SecondHome";
import HuskyHotspots from "./Components/Projects/HuskyHotspots";
import Shift from "./Components/Projects/Shift";


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
            <Route path={constants.routes.tdgbreak} component={Tdgbreak}/>
            <Route path={constants.routes.clouds} component={Clouds}/>
            
            <Route path={constants.routes.sunmoon} component={Sunmoon}/>
            <Route path={constants.routes.lotus} component={Lotus}/>
            <Route path={constants.routes.sun} component={Sun}/>
            <Route path={constants.routes.cloud} component={Cloud}/>

            <Route path={constants.routes.day1} component={Day1}/>           
            <Route path={constants.routes.day2} component={Day2}/>
            <Route path={constants.routes.day3} component={Day3}/>
            <Route path={constants.routes.day4} component={Day4}/>
            <Route path={constants.routes.day5} component={Day5}/>
            <Route path={constants.routes.day6} component={Day6}/>
            <Route path={constants.routes.day7} component={Day7}/>
            <Route path={constants.routes.day8} component={Day8}/>
            <Route path={constants.routes.day9} component={Day9}/>
            <Route path={constants.routes.day10} component={Day10}/>
            <Route path={constants.routes.day11} component={Day11}/>
            <Route path={constants.routes.day12} component={Day12}/>
            <Route path={constants.routes.day13} component={Day13}/>
            <Route path={constants.routes.day14} component={Day14}/>
            <Route path={constants.routes.day15} component={Day15}/>
            <Route path={constants.routes.day16} component={Day16}/>
            
            <Route path={constants.routes.aevus} component={Aevus}/>
            <Route path={constants.routes.chromatic} component={Chromatic}/>
            <Route path={constants.routes.ambulo} component={Ambulo}/>
            <Route path={constants.routes.secondhome} component={SecondHome}/>
            <Route path={constants.routes.huskyhotspots} component={HuskyHotspots}/>
            <Route path={constants.routes.shift} component={Shift}/>

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
