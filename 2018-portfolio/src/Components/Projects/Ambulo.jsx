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
                            <h3>Features</h3>
                                <div>The main aspects came down to</div>
                            <h3>Design</h3>
                            <h4>Inspirations</h4>
                            <h5><a href="www.airbnb.com">Airbnb</a></h5>
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