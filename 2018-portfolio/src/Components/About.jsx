import React from "react";
import Navigation from "./Navigation"


export default class About extends React.Component {
    render() {
        return(
            <div>
                <Navigation/>
                <div class="hello" style={{textAlign: "center", width: "60%", margin: "auto"}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/about%2FIMG_0218.jpg?alt=media&amp;token=01af5231-97a3-4061-8b1a-bac03da7895d"
                        alt="Karen Lee" class="about"/>
                    
                    <div>My name is Karen Lee. I am an aspiring Android developer, hobbyist photographer, and bird lover.</div>
                    <br/>
                    <div style={{textAlign: "left"}}>
                        <div>I am currently an undergraduate at the University of Washington, studying Philosophy and Informatics.
                        You can find me contemplating life, what it means to have knowledge,
                         or most likely with a camera looking up at the clouds.</div>
                        <br/>
                        <div>In whatever I've come across, context and perspectives matters to me. I've been a yearbook editor, gathering memories
                            and immortalizing them. I realized in the process of making a such product - any criticism is valid
                            if I want to reach out to various types of people. I came out with the humbling thought
                             - it doesn't matter what I particularly intent, the product could
                            be taken in any other way.
                        </div>
                        <br/>
                        <div>Nowadays I design, code, and sometimes I end up hand-drawing animations. I wish to intersect the teachings of Philosophy
                            with the technology I am involved with. I take it as acknowledging people have their own ends, and I want to provide the 
                            means for them to do so.
                        </div>
                        <hr />
                        <div style={{textAlign: "center", marginBottom: "20px"}}>
                        <div>This has been coded using React. </div>
                        <a href="https://drive.google.com/open?id=1ttol-LOzvigXNB9KQr-uF52d_ydRm6CK" target="_blank">
                                <img 
                                class="resume"
                                src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/about%2Fif_resume_2795761.svg?alt=media&amp;token=0a6add43-f896-48a8-9620-d838e9de8d210"/></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}