import React from "react";
import Navigation from "../Navigation";

import {Link} from "react-router-dom";

import chromatic_c from "../../Icons/chromatic_icon_color.svg";

import {Carousel} from 'react-bootstrap';

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
                        <div class="col-12 col-sm-2 fix"  style={{marginTop: "50px"}}>
                            <h2 style={{marginBottom: "20px"}}>projects</h2>
                            <Link to='/projects' style={style2}>back</Link>
                            </div>
                        <div class="col-12 col-sm-7" style={{marginBottom: "100px"}}>
                            <div class="col-4 outer" style={{margin: "auto"}}>
                                <div class="col inner" style={{width: "100%", paddingTop: "100%"}}>
                                    <div style={{position:"absolute", top:"40%", left:"20%", bottom:"0", right: "0"}}>
                                        <img style={{width:"80%"}} src={chromatic_c}/>
                                    </div>
                                </div>
                            </div>
                            <div style={{textAlign: "center"}}>
                                <h1 class="projectTitle">Chromatic</h1>
                                <div class="projectSpec">type: Android Application | technologies: Java, Firebase, Adobe XD</div>
                                <div class="projectSpec">time frame: Nov 2017 - Dec 2017</div>
                                <div class="projectSpec"><i>(INFO 448 | Android Development)</i></div>
                                <div class="projectSpec"><i>Palette Interaction Dev</i></div>
                                <a href="https://github.com/kalee12/chromatic">github</a>
                            </div>
                            <br/>
                            <div class="row chromaticPreview">
                                <div class="col-3">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/chromatic%2Fchromatic-1.png?alt=media&amp;token=06e80eb4-88b1-48f2-8b46-1a25f7edaff6"/>
                                </div>
                                <div class="col-3">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/chromatic%2Fchromatic-2.png?alt=media&amp;token=56c50495-d389-48be-8e20-10ae64cdbb6e"/>
                                </div>
                                <div class="col-3">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/chromatic%2Fchromatic-3.png?alt=media&amp;token=8034dae6-2eb3-40a0-bb82-75437f72f0e4"/>
                                </div>
                                <div class="col-3">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/chromatic%2Fchromatic-4.png?alt=media&amp;token=ae10a663-a008-41d0-a77d-a595ccea8aef"/>
                                </div>
                            </div>

                            <h1>Color Inspiration with a Snap</h1>
                            <div>Chromatic is a tool that lets inspiration takes place. Snap on the go or import a photo - and build colors
                                into palettes and moodboards as references.
                            </div>


                            <h2>(INFO 448) Android Development</h2>
                            <div>I was part of a 4-person team for about four weeks. We were tasked with the following
                                <ul>
                                    <li>primarily using the Android SDK</li>
                                    <li>one major activity per person</li>
                                    <li>application must make significant use of some kind of mobile sensor or capability</li>
                                    <li>usable across multiple configurations</li>
                                    <li>user experience should be well-designed</li>
                                </ul>
                            The main thing was that we were supposed to explore components not yet taught in class.   

                            </div>                 
                            <h2>Inspiration</h2>
                            <div>At the time I was also working on a project for (INFO 365) Mobile App Design where my team designed an operating system
                                focusing on color and another for (INFO 343) Client-side Development focusing on photography. I pitched the idea of building
                                a tool that would allow users to draw color inspiration from real world occurrences, particular those found in nature. We decided
                                to focus on camera capabilities.
                            </div>
                            <h2>Development</h2>
                            <div>I was tasked with interactions with photos and palette creation. I made it so that in choosing colors, a user can drag
                                their finger around along the photos, and values would update accordingly so screen and photo sizes wouldn't
                                become a major hinderance.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}