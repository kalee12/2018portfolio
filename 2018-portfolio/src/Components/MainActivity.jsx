import React from "react";
import Navigation from "./Navigation";

import backgroundimg from "../IMG_4315_v2.jpg";


export default class MainActivity extends React.Component {
    render() {
        let border = {
            background: "rgba(255, 255, 255, .5)",
            boxSizing: "border-box",
            padding: "40px 400px 20px 350px",
            width: "100%",
            textAlign: "center"
        }
        
        let fix = {
            backgroundImage: "url('"+backgroundimg+"')", 
            backgroundSize: "cover",
            height: "100%", 
            position: "absolute", 
            margin: "auto", 
            top: "0px", 
            right: "0px", 
            bottom: "0px", 
            left: "0px",

        }

        return(
            <div>
                <Navigation/>
                <div class="d-flex justify-content-center" style={fix}>
                    <div class="align-self-center">
                        <div id="hello" style={border}>
                            <h1 style={{fontSize: "60px", fontFamily: "rift"}}>Karen Lee</h1>
                            <hr style={{color: "white"}}/>
                            <div style={{fontFamily: "proxima-nova"}}>
                                <h3>web. android.</h3>
                                <h3>photography.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}