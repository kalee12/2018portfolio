import React from "react";
import Navigation from "../Navigation";

import {Link} from "react-router-dom";

import hh_c from "../../Icons/HH_icon_color.svg";

export default class HuskyHotspots extends React.Component {
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
                        <div class="col-12 col-sm-9" style={{marginBottom: "100px"}}>
                            <div class="col-4 outer" style={{margin: "auto"}}>
                                <div class="col inner" style={{width: "100%", paddingTop: "100%"}}>
                                    <div style={{position:"absolute", top:"15%", left:"15%", bottom:"0", right: "0"}}>
                                        <img style={{width:"85%"}} src={hh_c}/>
                                    </div>
                                </div>
                            </div>
                            <div style={{textAlign: "center"}}>
                                <h1 class="projectTitle">Husky Hotspots</h1>
                                <div class="projectSpec">type: Bus Interface Concept | technologies: Adobe XD, Figma </div>
                                <div class="projectSpec">time: Feb - March 2018</div>
                                <div class="projectSpec"><i>(INFO 360 | Design Thinking)</i></div>
                                <div class="projectSpec"><i>Animator</i></div>
                                <div><a href="https://docs.google.com/document/d/1Z64GRsqMW57wetMQOA-X_HZSG_744dIDiszqStqBy8w/edit?usp=sharing" target="_blank">doc </a>
                            <a href="https://drive.google.com/file/d/1gVpoXVEjEm2mVpPDaH2LLSDGeikgMUo8/view" target="_blank">video</a></div>
                            </div>
                            <br/>
                            <div class="row chromaticPreview">
                                <div class="col-4">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/huskyhotspots%2FStarting%20Activity%20Notice.png?alt=media&amp;token=4ed26211-8e4b-4b42-bb98-f0587845e3b3"/>
                                </div>
                                <div class="col-4">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/huskyhotspots%2FPrototype%20Annotation-04.png?alt=media&amp;token=12c550e5-af5b-4b79-84c8-3595dd04abb5"/>
                                </div>
                                <div class="col-4">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/huskyhotspots%2FPrototype%20Annotation-08.png?alt=media&amp;token=5cd50126-fa1c-4083-a56a-fe2521d6fb84"/>
                                </div>
                            </div>
                            <h2>(INFO 360) Design Thinking</h2>
                            <div>Our theme for the class was transportation. "How do we create designs that alleviate transportation problems and congestion in Seattle?"
                            </div>                 
                            <h2>Research</h2>
                            <div>My partner and I conducted interviews and based on the fact that majority of them were commuters,
                                we decided our scope would be the UW campus. One of the problems facing UW students 
                                is not knowing which lesser known bus routes will take them to the same destination. 
                                Based on our research, UW students typically take the bus for only a few stops within 
                                the U district. However, students will tend to look for bus lines that are closest to them 
                                and are the most familiar with. This results in only a few routes that are in the 
                                highest demand in the UW area. 
                            </div>
                            <h2>Concept</h2>
                            <div>To solve this issue, we propose Husky Hotspots, a series of interactive bus stops at highly trafficked 
                            areas within the U District. These will be a series of touch-screen displays that shows a map of these 
                            “hotspots” throughout U-District where any UPASS holder can get a list of routes to other hotspots.
                            </div>
                            <div>
                            We chose to map out “hotspots” instead of bus stops like OneBusAway and Google Maps 
                            because UW students that we interviewed were more familiar with general areas like the UW Medical Center, 
                            the HUB, Red Square, and U Village, rather than specific bus stops. Also, this allows for a less 
                            cluttered overview map of U District when showing hot spots because there are far less major destinations
                            than there are bus stops.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}