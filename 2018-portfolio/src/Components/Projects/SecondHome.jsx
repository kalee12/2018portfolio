import React from "react";
import Navigation from "../Navigation";

import {Link} from "react-router-dom";

import sh_c from "../../Icons/SH_icon_color.svg";

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
                        <div class="col-12 col-sm-2 fix"  style={{marginTop: "50px"}}>
                            <h2 style={{marginBottom: "20px"}}>projects</h2>
                            <Link to='/projects' style={style2}>back</Link>
                            </div>
                        <div class="col-12 col-sm-7" style={{marginBottom: "100px"}}>
                            <div class="col-4 outer" style={{margin: "auto"}}>
                                <div class="col inner" style={{width: "100%", paddingTop: "100%"}}>
                                    <div style={{position:"absolute", top:"30%", left:"20%", bottom:"0", right: "0"}}>
                                        <img style={{width:"75%"}} src={sh_c}/>
                                    </div>
                                </div>
                            </div>
                            <div style={{textAlign: "center"}}>
                                <h1 class="projectTitle">Second Home</h1>
                                <div class="projectSpec">type: Web Application | technologies: R, Shiny </div>
                                <div class="projectSpec">time: Feb - Mar 2017</div>
                                <div class="projectSpec"><i>(Technical Foundations | INFO 201)</i></div>

                                <div><a href="https://liorlevy.shinyapps.io/info201-final-project-AB4/" target="_blank">application </a>
                            <a href="https://github.com/kalee12/info201-final-project-AB4" target="_blank">github</a></div>
                            </div>
                            <h2>(INFO 201) Technical Foundations</h2>
                            <div>I was tasked in a group of four to do the following</div>
                            <ul>
                                    <li>center on a data set of sufficient complexity to explore</li>
                                    <li>developed as an interactive platform using R</li>
                                    <li>demonstrate a nuanced understanding of the important features of the data set</li>
                                    <li>include visual representation(s) of your data</li>
                                    <li>effectively targeted and tailored to a specific audience</li>
                            </ul>
                            <h2>Concept</h2>
                            <div>We decided to use Medicare's January 2017 dataset on the ratings of nursing homes. We were thinking
                                about people who are looking for quality homes for their parents and what that would mean. With ratings,
                                many things could come into play that do not actually indicate an objective rating of an establishment,
                                so we wanted to utilize specific information, such as penalties,
                                from Medicare that is not so easily found on a basic search
                                engine query. 
                            </div>
                            <h3>Development</h3>
                            <div>I created the base UI and focused on data wrangling for everyone to use. I also worked on logic of the map and
                                plotting the data.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}