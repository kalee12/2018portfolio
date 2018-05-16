import React from "react";
import Navigation from "./Navigation";

import backgroundimg from "../IMG_4315_v2.jpg";


export default class MainActivity extends React.Component {
    render() {
        let border = {
            background: "rgba(255, 255, 255, .5)",
            boxSizing: "border-box",
            width: "100%",
            textAlign: "center"
        }
        
        let fix = {
            backgroundImage: "url('"+backgroundimg+"')", 
            backgroundSize: "cover",
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
                        <div id="hello" class="padding" style={border}>
                            <h1 style={{fontSize: "60px", fontFamily: "rift"}}>Karen Lee</h1>
                            <hr style={{color: "white"}}/>
                            <div style={{fontFamily: "proxima-nova"}}>
                                <h3>developer.</h3>
                                <h3>photographer.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}