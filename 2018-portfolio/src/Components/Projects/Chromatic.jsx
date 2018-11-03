import React from "react";
import Navigation from "../Navigation";

import {Link} from "react-router-dom";

export default class Chromatic extends React.Component {
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
                            <h1 class="projectTitle">Chromatic</h1>
                            <div class="projectSpec">type: Android Application | technologies: Java, Adobe XD</div>
                            <div class="projectSpec">time frame: Nov 2017 - Dec 2017</div>
                            <div class="projectSpec"><i>(Android Development | INFO 448)</i></div>
                            <div class="projectSpec"><i>Palette Interaction Dev</i></div>

                            <h2>Prompt</h2>
                            <div>something about group 
                            </div>                 
                            <h2>Inspiration</h2>
                            <div>something</div>
                            <h2>Concept</h2>
                            <h3>User Motivations</h3>
                            <div>Something</div>
                            <h3>Design Flow</h3>
                            <div></div>
                            <h4>Style</h4>
                            <h2>Development</h2>
                            <div>just talk about your role</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}