import React from "react";
import Navigation from "./Navigation"

import reactLogo from "../react.svg"


export default class About extends React.Component {
    render() {
        return(
            <div>
                <Navigation/>
                <div class="hello" style={{textAlign: "center", width: "60%", margin: "auto"}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/about%2FIMG_0218.jpg?alt=media&amp;token=01af5231-97a3-4061-8b1a-bac03da7895d"
                        alt="Karen Lee" class="about"/>
                    <hr/>
                    <br/>
                    <div>
                        <div class="row">
                            <div class="col" style={{textAlign: "left"}}>
                                <b>I love to seeing different perspectives come together.</b>
                                <br/>
                                I am studying Philosophy and Informatics at the University of Washington.
                                As technology is increasingly a dominant aspect in life, I find value
                                in the humanities to better equip us with reasoning, guidance, and insight
                                to create effective solutions that would last.
                            </div>

                            <div class="col" style={{textAlign: "left"}}>
                                <b>I am many things but all together I strive to create and build solutions.</b>
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
                        <div>Built using react</div>
                        {/* <a href="https://drive.google.com/open?id=1ttol-LOzvigXNB9KQr-uF52d_ydRm6CK" target="_blank">
                                <img 
                                class="resume"
                                src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/about%2Fif_resume_2795761.svg?alt=media&amp;token=0a6add43-f896-48a8-9620-d838e9de8d210"/></a> */}
                        <div>contact: leekaren888@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}