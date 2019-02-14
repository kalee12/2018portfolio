import React from "react";
import Navigation from "../Navigation";

import {Link} from "react-router-dom";

import ambulo_c from "../../Icons/ambulo_icon_color.svg";

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
                        {/* <div class="col-12 col-sm-2 fix"  style={{marginTop: "50px"}}>
                            <h2 style={{marginBottom: "20px"}}>projects</h2>
                            <Link to='/projects' style={style2}>back</Link>
                        </div> */}
                        <div style={{marginBottom: "100px", padding: "2% 5% 0 5%"}}>
                            <div class="col-4 outer" style={{margin: "auto"}}>
                                <div class="col inner" style={{width: "100%", paddingTop: "100%"}}>
                                    <div style={{position:"absolute", top:"25%", left:"25%", bottom:"0", right: "0"}}>
                                        <img style={{width:"70%"}} src={ambulo_c}/>
                                    </div>
                                </div>
                            </div>
                            <div style={{textAlign: "center"}}>
                                <h1 class="projectTitle">Ambulo</h1>
                                <div class="projectSpec">type: React Application | technologies: React.js, Adobe XD</div>
                                <div class="projectSpec">time: 2 weeks (Nov 2017 - Dec 2017)</div>
                                <div class="projectSpec"><i>(INFO 343 | Client-side Development)</i></div>
                                <div class="projectSpec"><i>Dev Lead - Backend Focused</i></div>
                                
                                <div><a href="https://info343-aut17.github.io/Ambulo/#/" target="_blank">application </a>
                                <a href="https://github.com/INFO343-aut17/Ambulo" target="_blank">github</a></div>
                            </div>
                            <h1>Discover trails and capture natural scenery</h1>
                            <div>Ambulo is a hiking web-based application that uses Trail API for locations and Flickr API for images of trails. 
                                Users will be able to search by city and view local trails. When a user clicks on a trail name, 
                                they can get instant information such as location and information about activities provided by the 
                                Trail API. The flickr images will help hikers decide which trails they might want to checkout in the future.</div>
                            <h3>(INFO 343) Client-side Development</h3>
                            <div>I worked on a team of four, and we were allowed to create anything as long as it was feasible
                                within the 2 weeks.
                            </div>
                            <h3>Design</h3>
                            <div>We looked towards 
                            <a href="https://airbnb.com" target="_blank"> Airbnb </a>
                            as something that was made photos pop out by being simple and clean. We also knew our format had the potential
                            to 
                            </div>
                            <h3>Development</h3>
                            <div>I created the skeleton base version for everyone to grasp the flow. I mainly worked with the dataflow with the APIs
                                and working out the kinks in my teammates' bugs. We had to take the information from the user, which was restricted thanks to Google's Places API, 
                                into Trail API. With the results, the site goes into Flickr API, and what Ambulo users see are the 
                                best places to go for photos.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}