import React from "react";
import Navigation from "./Navigation"

import reactLogo from "../react.svg"


export default class About extends React.Component {
    render() {
        return(
            <div>
                <Navigation/>
                <div class="hello" style={{textAlign: "center", width: "45%", margin: "auto"}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/about%2F2018.jpg?alt=media&amp;token=f02b27d5-791e-49e3-bb82-d11e519d82a5"
                        alt="Karen Lee" class="about"/>
                    <hr/>
                    <br/>
                    <div>
                        <div class="row">
                            <div class="col" style={{textAlign: "left"}}>
                                <b>I love seeing different perspectives come together.</b>
                                <br/>
                                I study Philosophy and Informatics at the University of Washington.
                                As technology is becoming increasingly dominant in life, I find value
                                in the humanities to better equip us with a foundation to understand people
                                and create solutions that last.
                            </div>

                            <div class="col" style={{textAlign: "left"}}>
                                <b>I am many things, but all together I strive to create and build solutions.</b>
                                <br/>
                                An aspiring Android developer, nature photographer, and bird lover. I design and code. I try to use all
                                my Adobe tools. Sometimes I do event photography, and sometimes I end up hand-drawing animations.
                            </div>

                            <div class="col" style={{textAlign: "left"}}>
                                <b>I am always aiming to develop myself further.</b>
                                <br/>
                                Currently, I am building an Android application to aid me and many others battling eczema.
                                I am going over everything from research, UI/UX design, and development. As side projects, I am creating
                                and honing myself with Adobe tools.

                            </div>
                        </div>
                        <hr />
                        <div style={{textAlign: "center", marginBottom: "20px"}}>
                        <img class="resume" src={reactLogo}/>
                        <div>contact: leekaren888@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}