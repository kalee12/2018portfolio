import React from "react";
import Navigation from "./Navigation"

export default class About extends React.Component {
    render() {
        return(
            <div>
                <Navigation/>
                <div class="row" style={{padding: "5% 15% 0 15%"}}>
                    <div class="col-12 col-md-7" style={{fontSize: "14pt"}}>
                        <h2>Hi there!</h2>
                        <p>I'm a senior studying at the University of Washington
                            majoring in Philosophy and minoring in Informatics.</p>
                        <p>I'm a web &amp; mobile developer with a curiosity in design.</p>
                        <p>The not-so-simple? I'm a thinking being (or am I?). My studies have led me to
                            an interdisciplinary focus between the humanities and technology. I hope to bring
                            mindful designs and structures to support people in their own ends.
                        </p>
                        <br/>
                        <a href="https://www.dropbox.com/s/jzrx6h4426mng9y/2019_Resume%20v4.pdf?dl=0" target="_blank"> Resume</a>
                    </div>
                    <div class="col-12 col-md-5" style={{textAlign: "right"}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/about%2F2018.jpg?alt=media&amp;token=f02b27d5-791e-49e3-bb82-d11e519d82a5"
                        alt="Karen Lee" class="about"/>
                    </div>
                </div>
            </div>
        );
    }
}