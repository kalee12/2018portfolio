import React from "react";
import Navigation from "./Navigation"


export default class About extends React.Component {
    render() {
        return(
            <div>
                <Navigation/>
                <div class="hello" style={{textAlign: "center", width: "60%", margin: "auto"}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/about%2FIMG_0218.jpg?alt=media&amp;token=01af5231-97a3-4061-8b1a-bac03da7895d"
                        class="about"/>
                    
                    <div>My name is Karen Lee. I am an aspiring Android developer, a hobbyist photographer, and a bird lover.</div>
                    <br/>
                    <div style={{textAlign: "left"}}>
                        <div>I am currently an undergraduate at the University of Washington, studying Philosophy and Informatics.
                        You can find me contemplating life, what it means to have knowledge,
                         or most likely with a camera, looking up at the clouds.</div>
                        <br/>
                        <div>In whatever I've come across, context and perspectives matters to me. I've been a yearbook editor, gathering memories
                            and immortalizing them. I realized in the process of making a such product - any criticism is valid
                            if I want to reach out to various types of people. If I am able to justify my side, then I've
                            strengthened the vision. If I can't, then there is room for improvement. I came out with the humbling thought
                             - it doesn't matter what I particularly intent, the product could
                            be taken in any other way. I see it as endless posibilities and potentials.
                        </div>
                        <br/>
                        <div>Nowadays I design, code, and somehow I end up hand-drawing animations. 
                        </div>
                        <br/>
                        <div>On my own time, I enjoy photography. If I'm hiking at the same time, that's a bonus. 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}