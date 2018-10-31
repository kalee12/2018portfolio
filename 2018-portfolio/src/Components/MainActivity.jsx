import React from "react";
import Navigation from "./Navigation";

import resume from "../resume.svg";
import gitHub from "../github.svg";


export default class MainActivity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "default",
            color: "#000000",
            color2: "#000000"
        }
    }

    contentDev() {
        this.setState({
            content: "dev"
        });
    }

    contentPhoto() {
        this.setState({
            content: "photo"
        });
    }

    handleName() {
        this.setState({color: "#000000",
        color2: "#000000"});
    }

    handleDev() {
        this.setState({color: "#007FC0",
        color2: "#000000"});
    }

    handlePhotographer() {
        this.setState({color2: "#33BEB7",
        color1: "#000000"});
    }

    render() {
        let content;
        let spacing;

        let contentStyle = {
            // border: "5px solid red",
            position: "absolute",
            top: "50%"
        }

        if (this.state.content == "default") {
            spacing = <div style={{visibility: "hidden"}}>spacing</div>
        } else if (this.state.content == "dev") {
            content = <div class="col" style={contentStyle}>dev</div>
            spacing = <div style={{visibility: "hidden"}}>spacing</div>
        } else {
            content = <div class="col" style={contentStyle}>photo</div>
            spacing = <div></div>
        }
        
        let fix = {
            margin: "auto", 
            top: "0px", 
            right: "0px", 
            bottom: "0px", 
            left: "0px"
        }

        return(
            <div>
                <Navigation/>
                <div style={fix}>
                    <div class="padding align-self-center">
                        <div class="logo row">
                            <h1 id="name" style={{fontSize: "100px", fontFamily: "rift"}}>
                                        <span style={{color: this.state.content == "dev" ? "#007FC0" : this.state.color}} class="color">K</span>
                                        <span style={{color: this.state.content == "photo" ? "#33BEB7" : this.state.color2}} class="color">a</span>
                                        <span style={{color: this.state.content == "dev" ? "#007FC0" : this.state.color}} class="color">r</span>
                                        <span style={{color: this.state.content == "photo" ? "#33BEB7" : this.state.color2}} class="color">e</span>
                                        <span style={{color: this.state.content == "dev" ? "#007FC0" : this.state.color}} class="color">n </span> 

                                        <span style={{color: this.state.content == "photo" ? "#33BEB7" : this.state.color2}} class="color">L</span>
                                        <span style={{color: this.state.content == "dev" ? "#007FC0" : this.state.color}} class="color">e</span>
                                        <span style={{color: this.state.content == "photo" ? "#33BEB7" : this.state.color2}} class="color">e</span>
                                        </h1>
                        </div>

                        <div class="row" style={{position: "relative", fontSize: "25px"}}>
                            <div class="col-sm-12 col-md-3 iam">
                                <div style= {{visibility: "hidden"}}>spacing</div>
                                I am a                                     
                            </div>
                            <div class="col-sm-12 col-md-6" style={{fontFamily: "proxima-nova", minHeight: "250px"}}>
                                {spacing}
                                <div>
                                    <div onMouseEnter={() => this.handleDev()} 
                                        onMouseLeave={() => this.handleName()}
                                        onClick={() => this.contentDev()}
                                            id="dev" style={{color: this.state.content == "dev" ? "#007FC0" : "gray"}}>web &amp; mobile developer. </div>
                                    <div onMouseEnter={() => this.handlePhotographer()} 
                                    onMouseLeave={() => this.handleName()}
                                    onClick={() => this.contentPhoto()}
                                        id="photographer" style={{color: this.state.content == "photo" ? "#33BEB7" : "gray"}}> photographer.</div>
                                </div>
                                
                            {content}
                            </div>
                        </div>
                        
                        <div>
                                    <a href="https://github.com/kalee12" target="_blank">
                                    <svg class="resume" xmlns="http://www.w3.org/2000/svg" 
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}