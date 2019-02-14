import React from "react";
import constants from "./constants"

import {Link} from "react-router-dom";

import resume from "../resume.svg";
import gitHub from "../github.svg";

import {Helmet} from "react-helmet";

import aevus from "../Icons/aevus_icon_w.svg";
import chromatic from "../Icons/chromatic_icon_w.svg";
import ambulo from "../Icons/ambulo_icon_w.svg";
import sh from "../Icons/SH_icon_w.svg";
import hh from "../Icons/HH_icon_w.svg";
import shift from "../Icons/shift_icon_w.svg";

import TextLoop from "react-text-loop";

export default class MainActivity extends React.Component { 

    render() {
        let style = {
            color: "black", fontSize: "75pt", textDecoration: "none"
        }

        let style2 = {
            color: "black", fontSize: "15pt", textDecoration: "none"
        }

        return(
            <div class="row" style={{margin: "2% 0 0 2%"}}>
                
                <div class="col-md-4 d-flex flex-column">
                    <Link to={constants.routes.main} class="name">KAREN LEE</Link>
                    <div class="cl-effect-1"><Link to={constants.routes.projects} style={style2}>work</Link></div>
                    <div class="cl-effect-1"><Link to={constants.routes.photography} style={style2}>photography</Link></div>
                    <div class="cl-effect-1"><Link to={constants.routes.blog} style={style2}>blog</Link></div>
                    <div class="cl-effect-1"><Link to={constants.routes.about} style={style2}>about</Link></div>

                    <div class="d-flex">
                        <a href="https://www.linkedin.com/in/kalee12/" target="_blank">
                        <svg class="icon iconLinked" role="img" viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title>
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 
                        1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 
                        4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 
                        2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 
                        0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 
                        0 22.222 0h.003z"/></svg></a>

                        <a href="https://github.com/kalee12" target="_blank">
                            <svg class="icon iconDev" 
                            xmlns="http://www.w3.org/2000/svg" 
                            role="img" aria-labelledby="simpleicons-github-icon" 
                            viewBox="0 0 24 24"><title id="simpleicons-github-icon">GitHub icon</title>
                            <path d="M 12 0.297 c -6.63 0 -12 5.373 -12 12 c 0 5.303 3.438 9.8 8.205 11.385 
                            c 0.6 0.113 0.82 -0.258 0.82 -0.577 c 0 -0.285 -0.01 -1.04 -0.015 -2.04 c -3.338 
                            0.724 -4.042 -1.61 -4.042 -1.61 C 4.422 18.07 3.633 17.7 3.633 17.7 c -1.087 -0.744 
                            0.084 -0.729 0.084 -0.729 c 1.205 0.084 1.838 1.236 1.838 1.236 c 1.07 1.835 2.809 
                            1.305 3.495 0.998 c 0.108 -0.776 0.417 -1.305 0.76 -1.605 c -2.665 -0.3 -5.466 -1.332 
                            -5.466 -5.93 c 0 -1.31 0.465 -2.38 1.235 -3.22 c -0.135 -0.303 -0.54 -1.523 0.105 -3.176 
                            c 0 0 1.005 -0.322 3.3 1.23 c 0.96 -0.267 1.98 -0.399 3 -0.405 c 1.02 0.006 2.04 0.138 3 
                            0.405 c 2.28 -1.552 3.285 -1.23 3.285 -1.23 c 0.645 1.653 0.24 2.873 0.12 3.176 c 0.765 0.84 
                            1.23 1.91 1.23 3.22 c 0 4.61 -2.805 5.625 -5.475 5.92 c 0.42 0.36 0.81 1.096 0.81 2.22 c 0 1.606 
                            -0.015 2.896 -0.015 3.286 c 0 0.315 0.21 0.69 0.825 0.57 C 20.565 22.092 24 17.592 24 12.297 c 0 
                            -6.627 -5.373 -12 -12 -12" /></svg></a>

                        <a href="https://instagram.com/sidobelee" target="_blank">
                            <svg class="icon iconPhoto"
                            aria-labelledby="simpleicons-instagram-icon" role="img" 
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title id="simpleicons-instagram-icon">Instagram icon</title>
                            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 
                            1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 
                            4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 
                            1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 
                            2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 
                            1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 
                            1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 
                            0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 
                            1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 
                            1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 
                            0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 
                            0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 
                            0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 
                            .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg></a>

                    </div>                    
                </div>
                    <div class="col" style={{marginTop: "2%"}}>
                    <h2>I'm a web &amp; mobile developer</h2>
                    <h3>I'm also <TextLoop interval={1000} 
                                    children={["a design enthusiast", "a photographer", "a library technician", "a husky",
                                                "disciplined in the humanities and social sciences",
                                                "passionate about people, knowledge, and technology",
                                                "interested in brand identity and logo design",
                                                "a low-key balcony hairdresser",
                                                "learning how to cook", "still listening to pop punk",
                                                "trying to use all my Adobe products",
                                                "an occasional traditional artist and animator", "lover of all birds",
                                                "a minimalist", "a walking contradiction", "a stuffed animal sewer",
                                                "an eczema warrior", "a serial Spotify playlist creator"]}>
                    </TextLoop></h3>

                    <div class="row" style={{marginTop: "5%"}}>
                        <div class="col-3 outer">
                            <Link to={{pathname: "aevus"}}>
                            <div id="pAevus" class="col container inner" style={{width: "100%", paddingTop: "100%", backgroundColor: "#90DAB9"}}>
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
                        <div class="col-3 outer">
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
                        <div class="col-3 outer">
                            <Link to={{pathname: "shift"}}>
                                <div class="col container inner" style={{width: "100%", paddingTop: "100%", backgroundColor: "#8D89B1"}}>
                                    <div style={{position:"absolute", top:"27%", left:"10%", bottom:"0", right: "0"}}>
                                        <img style={{width:"90%"}} src={shift}/>
                                    </div>
                                    <div class="overlay">
                                        <div class="text">
                                            <h2>SHIFT</h2>
                                            <div>OS DESIGN</div>
                                        </div>
                                    </div>
                                </div>
                                
                            </Link>
                        </div>
                    </div>                        
                </div>
            </div>
        );
    }
}