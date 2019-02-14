import React from "react";
import Navigation from "./Navigation";
import ProjectList from "./ProjectList";
import {Link} from "react-router-dom";

import aevus from "../Icons/aevus_icon_w.svg";
import chromatic from "../Icons/chromatic_icon_w.svg";
import ambulo from "../Icons/ambulo_icon_w.svg";
import sh from "../Icons/SH_icon_w.svg";
import hh from "../Icons/HH_icon_w.svg";
import shift from "../Icons/shift_icon_w.svg";

export default class Projects extends React.Component {
    render() {
            
        return(
            <div>
                <Navigation/>
                <div>
                    <div style={{padding: "5%"}}>
                        <div>
                            <div>
                                <div class="row">
                                    <div class="col-6 col-md-3 outer">
                                        <Link to={{pathname: "aevus"}}>
                                        <div class="col container inner" style={{width: "100%", paddingTop: "100%", backgroundColor: "#90DAB9"}}>
                                            <div style={{position:"absolute", top:"30%", left:"20%", bottom:"0", right: "0"}}>
                                                <img style={{width:"80%"}} src={aevus}/>
                                            </div>
                                            <div class="overlay">
                                                <div class="text">
                                                    <h2>AEVUS</h2>
                                                    <div>Android Application</div>
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                    </div>
                                    <div class="col-6 col-md-3 outer">
                                        <Link to={{pathname: "chromatic"}}>
                                            <div class="col container inner" style={{width: "100%", paddingTop: "100%", backgroundColor: "#668FBF"}}>
                                                <div style={{position:"absolute", top:"40%", left:"20%", bottom:"0", right: "0"}}>
                                                    <img style={{width:"80%"}} src={chromatic}/>
                                                </div>
                                                <div class="overlay">
                                                    <div class="text">
                                                        <h2>CHROMATIC</h2>
                                                        <div>Android Application</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6 col-md-3 outer">
                                        <Link to={{pathname: "ambulo"}}>
                                            <div class="col container inner" style={{width: "100%", paddingTop: "100%", backgroundColor: "#90DAB9"}}>
                                                <div style={{position:"absolute", top:"25%", left:"25%", bottom:"0", right: "0"}}>
                                                    <img style={{width:"70%"}} src={ambulo}/>
                                                </div>
                                                <div class="overlay">
                                                    <div class="text">
                                                        <h2>AMBULO</h2>
                                                        <div>Web Application</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6 col-md-3 outer">
                                        <Link to={{pathname: "secondhome"}}>
                                            <div class="col container inner" style={{width: "100%", paddingTop: "100%", backgroundColor: "#43B5E6"}}>
                                                <div style={{position:"absolute", top:"30%", left:"20%", bottom:"0", right: "0"}}>
                                                    <img style={{width:"75%"}} src={sh}/>
                                                </div>
                                                <div class="overlay">
                                                    <div class="text">
                                                        <h2>SECOND HOME</h2>
                                                        <div>Web Application</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6 col-md-3 outer">
                                        <Link to={{pathname: "huskyhotspots"}}>
                                            <div class="col container inner" style={{width: "100%", paddingTop: "100%", backgroundColor: "#1FB3A9"}}>
                                                <div style={{position:"absolute", top:"15%", left:"15%", bottom:"0", right: "0"}}>
                                                    <img style={{width:"85%"}} src={hh}/>
                                                </div>
                                                <div class="overlay">
                                                    <div class="text">
                                                        <h2>HUSKY HOTSPOTS</h2>
                                                        <div>Bus Stop Design</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col-6 col-md-3 outer">
                                        <Link to={{pathname: "shift"}}>
                                            <div class="col container inner" style={{width: "100%", paddingTop: "100%", backgroundColor: "#8D89B1"}}>
                                                <div style={{position:"absolute", top:"27%", left:"10%", bottom:"0", right: "0"}}>
                                                    <img style={{width:"90%"}} src={shift}/>
                                                </div>
                                                <div class="overlay">
                                                    <div class="text">
                                                        <h2>SHIFT</h2>
                                                        <div>OS Design</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}