import React from "react";
import Navigation from "./Navigation"


export default class About extends React.Component {
    render() {
        return(
            <div>
                <Navigation/>
                <div style={{textAlign: "center"}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/about%2FIMG_0218.jpg?alt=media&amp;token=01af5231-97a3-4061-8b1a-bac03da7895d"
                        style={{width: "30%", marginBottom: "20px"}}/>
                    <div>Hello</div>
                </div>
            </div>
        );
    }
}