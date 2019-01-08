import React from "react";
import Navigation from "../Navigation";

import {Link} from "react-router-dom";

import shift_c from "../../Icons/shift_icon_color.svg";

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
                        <div class="col-12 col-sm-2 fix"  style={{marginTop: "50px"}}>
                            <h2 style={{marginBottom: "20px"}}>projects</h2>
                            <Link to='/projects' style={style2}>back</Link>
                            </div>
                        <div class="col-12 col-sm-7" style={{marginBottom: "100px"}}>
                            <div class="col-4 outer" style={{margin: "auto"}}>
                                <div class="col inner" style={{width: "100%", paddingTop: "100%"}}>
                                    <div style={{position:"absolute", top:"27%", left:"10%", bottom:"0", right: "0"}}>
                                        <img style={{width:"90%"}} src={shift_c}/>
                                    </div>
                                </div>
                            </div>
                            <div style={{textAlign: "center"}}>
                                <h1 class="projectTitle">Shift</h1>
                                <div class="projectSpec">type: Operating System Concept | technologies: Adobe XD</div>
                                <div class="projectSpec">time: Sept - Dec 2017</div>
                                <div class="projectSpec"><i>(INFO 365 | Mobile App Design)</i></div>
                                <div><a href="https://drive.google.com/file/d/1-cmaf38jxaAbFwuaFGnRtR_OkOOEes7H/view" target="_blank">screens </a>
                                <a href="https://docs.google.com/presentation/d/1ylorLpDZUnmdCqOS1pe-VWpAEfEE1lkUPLRI5fJcXXI/edit?usp=sharing" target="_blank">doc</a></div>
                            </div>
                            
                            <h2>(INFO 365) Mobile App Design</h2>
                            <div>For ten weeks, I was in a 7 person team where we designed an own operating system concerning two
                                week sprints broken down into
                            </div>
                            <ul>
                                <li>Design strategy</li>
                                <li>UX &amp; UI</li>
                                <li>App Design - Communication</li>
                                <li>App Design - Productivity</li>
                                <li>App Design - Information</li>
                                <li>Final Touches</li>
                            </ul>                               
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}