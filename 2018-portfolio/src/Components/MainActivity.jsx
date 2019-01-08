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
            position: "absolute",
            top: "50%"
        }

        if (this.state.content == "default") {
            spacing = <div style={{visibility: "hidden"}}>spacing</div>
        } else if (this.state.content == "dev") {
            content = <div class="col" style={contentStyle}>I'm currently striving to create an Android application to fight eczema.</div>
            spacing = <div style={{visibility: "hidden"}}>spacing</div>
        } else {
            content = <div class="col" style={contentStyle}>I love taking landscapes and occasionaly do events.</div>
            spacing = <div></div>
        }
        
        let fix = {
            paddingLeft: "5%"
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
                                    <div class="cl-effect-16-t" 
                                        onMouseEnter={() => this.handleDev()} 
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
                                    <svg class="icon iconDev" xmlns="http://www.w3.org/2000/svg" 
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
                                    <svg class="icon iconPhoto" aria-labelledby="simpleicons-instagram-icon" role="img" 
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
                </div>
            </div>
        );
    }
}