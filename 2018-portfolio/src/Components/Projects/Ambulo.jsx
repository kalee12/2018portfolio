import React from "react";
import Navigation from "../Navigation";

import {Link} from "react-router-dom";

export default class Ambulo extends React.Component {
    render() {
        let style = {
            height: "100%",
            margin: "auto",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0"
        }

        
        let style2 = {
            boxSizing: "border-box",
            color: "black",
            padding: "10px",
            textDecoration: "none",
            display: "block",
            fontSize: "1.5em",
            marginTop: "0.83em",
            marginBottom: "0.83em",
            marginLeft: "0",
            marginRight: "0"
        }

        return(
            <div>
                <Navigation/>
                <div style={style}>
                    <div class="row">
                        <div class="col-12 col-sm-2 fix"  style={{marginTop: "100px"}}>
                            <h2 style={{marginBottom: "20px"}}>projects</h2>
                            <Link to='/projects' style={style2}>back</Link>
                            </div>
                        <div class="col-12 col-sm-7" style={{marginBottom: "100px"}}>
                            <h1 class="projectTitle">Ambulo</h1>
                            <div class="projectSpec">type: Web Application | technologies: React.js, Adobe XD</div>
                            <div class="projectSpec">time: 2 weeks (Nov 2017 - Dec 2017)</div>
                            <div class="projectSpec"><i>(Client-side Web Development | INFO 343)</i></div>
                            <div class="projectSpec"><i>Dev Lead - Backend Focused</i></div>
                            
                            <div>links: project &amp; github</div>

                            <h2>Prompt</h2>
                            <div>something</div>
                            <h2>Concept</h2>
                            <h3>User Motivations</h3>
                                <div>These were possible motivations I considered</div>
                                <h5>Food Triggers</h5>
                                <ul>
                                    <li>As I do not know what my triggers are, I want a way to track my intake so I can notice any trends.</li>
                                    <li>As someone who is starting out a new diet, I want a way to penalize myself so I can keep myself
                                        accountable.
                                    </li>
                                </ul>
                                <h5>Environmental Triggers</h5>
                                <ul>
                                    <li>As someone with sensitive skin, I want a weather forecast with allergen details
                                        so I can prepare my skin and clothes for the week.</li>
                                </ul>
                                <h5>Mental Health</h5>
                                <ul>
                                    <li>As someone who's stressed because of their skin, I want a private place to track my emotions 
                                        so I can better understand my feelings.
                                    </li>
                                    <li>As a long time sufferer, I want a way to remind myself of my progress so I can see positiveness.</li>
                                </ul>
                                <h5>Treatment</h5>
                                <ul>
                                    <li>As someone with multiple types of eczema, I want a bodychart so I can keep track of when and
                                        what gets affected.</li>
                                    <li>As someone who had to go through multiple lotions, I want to keep track of my products to
                                        remember which types work for me.
                                    </li>
                                </ul>
                            <h3>Consolidation</h3>
                                The main aspects came down to
                            <h5>Cycles</h5>
                            <ul>
                                <li>Log tracking flare cycles</li>
                                <li>Alerts to resist food temptations</li>
                                <li>Records of resisting temptations</li>
                            </ul>
                            <h5>Weather</h5>
                            <ul>
                                <li>Forecast with particular metrics (pollen / humidity)</li>
                                <li>Prompts to reinforce preventive skincare</li>
                            </ul>
                            <h5>Daily Log</h5>
                            <h5>Skincare</h5>

                            <h3>Design</h3>
                            <h4>Inspirations</h4>
                            <h5><a href="habitica.com">Habitica</a></h5>
                            <h4>Style</h4>
                            <h2>Current Progress</h2>
                            <h3>Development</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}