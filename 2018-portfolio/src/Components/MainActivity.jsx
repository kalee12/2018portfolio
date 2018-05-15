import React from "react";
import Navigation from "./Navigation"


export default class MainActivity extends React.Component {
    render() {
        let border = {
            background: "rgba(255, 255, 255, .5)",
            boxSizing: "border-box",
            padding: "40px 400px 20px 350px",
            textAlign: "center"
        }
        
        return(
            <div>
                <Navigation/>
                <div class="d-flex justify-content-center">
                    <div class="align-self-center">
                        <div id="hello" style={border}>
                            <h1 style={{fontSize: "60px"}}>Karen Lee</h1>
                            <hr style={{color: "white"}}/>
                            <div>
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