import React from "react";
import Navigation from "../Navigation";

import {Link} from "react-router-dom";

export default class Shift extends React.Component {
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
                            <h1 class="projectTitle">Shift</h1>
                            <div class="projectSpec">type: Operating System Concept | technologies: Adobe XD</div>
                            <div class="projectSpec">time: Sept - Dec 2017</div>
                            
                            <h2>Prompt</h2>
                            <div>ten week design sprints</div>                 
                            <h2>Influences</h2>
                                <div>team dynamics</div>
                            <h2>Design</h2>
                                <h3>Basic information</h3>
                                <div>Environment</div>
                                <div>hardware</div>
                                <h3>Style Guides</h3>
                                <div>color</div>
                                <div>font</div>
                                <div>UX</div>
                                <h3>Screens</h3>
                                
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}