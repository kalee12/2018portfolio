import React from "react";
import Navigation from "../Navigation";

import {Link} from "react-router-dom";

export default class SecondHome extends React.Component {
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
                            <h1 class="projectTitle">Second Home</h1>
                            <div class="projectSpec">type: Web Application | technologies: R, Shiny </div>
                            <div class="projectSpec">time: Feb - Mar 2017</div>
                            <div class="projectSpec"><i>(Technical Foundations | INFO 201)</i></div>
                            
                            <h2>Prompt</h2>
                            <div>dssd</div>                 
                            <h2>Motivations</h2>
                            <h3>something</h3>
                            <h2>Concept</h2>
                            <h3>Design</h3>
                            <h3>Development</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}