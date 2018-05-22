import React from "react";
import Navigation from "./Navigation";


export default class MainActivity extends React.Component {
    render() {
        let border = {
            background: "rgba(255, 255, 255, .5)",
            boxSizing: "border-box",
            width: "100%",
            textAlign: "center"
        }
        
        let image = "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/about%2FIMG_4315_v2.jpg?alt=media&token=a78a32ca-def0-4bfd-bff6-1f434b326cab";
        let fix = {
            backgroundImage: "url('"+image+"')", 
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
                                <a href="https://drive.google.com/open?id=1ttol-LOzvigXNB9KQr-uF52d_ydRm6CK" target="_blank">
                                <img 
                                class="resume"
                                src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/about%2Fif_resume_2795761.svg?alt=media&amp;token=0a6add43-f896-48a8-9620-d838e9de8d210"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}