import React from "react";
import Navigation from "./Navigation";
import ProjectList from "./ProjectList";

import firebase from 'firebase/app';
import 'firebase/database';

export default class Projects extends React.Component {
    render() {
        let style = {
            height: "100%",
            position: "absolute",
            margin: "auto",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0"
        }

        let curr = firebase.database().ref("current");
        let past = firebase.database().ref("past");
            
        return(
            <div>
                <Navigation/>
                <div style={style}>
                    <div>
                    </div>
                    <div style={{marginTop: "100px"}}>
                        <div class="row">
                            <div class="col-12 col-sm-2 fix">
                                <h2 style={{marginBottom: "20px"}}>projects</h2>
                            </div>
                            <div class="col-12 col-sm-9">
                                <h2 class="logo">current</h2>
                                <ProjectList projRef={curr} type={"current"}/>
                                <h2>past</h2>
                                <ProjectList projRef={past} type={"past"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}