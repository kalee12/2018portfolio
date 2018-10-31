import React from "react";
import Navigation from "./Navigation";
import ProjectList from "./ProjectList";
import {Link} from "react-router-dom";

import firebase from 'firebase/app';
import 'firebase/database';

export default class Projects extends React.Component {
    render() {
        let curr = firebase.database().ref("current");
        let past = firebase.database().ref("past");
            
        return(
            <div>
                <Navigation/>
                <div>
                    <div style={{marginTop: "100px"}}>
                        <div class="row">
                            <div class="col-12 col-sm-2 fix">
                                <h2 style={{marginBottom: "20px"}}>projects</h2>
                            </div>
                            <div class="col-12 col-sm-9">
                                <h2>current</h2>
                                <div class="row">
                                    <div class="col-4 outer">
                                        <div class="col container inner">
                                            <img alt="hello" />
                                            <div class="text">
                                                <Link to={{
                                                    pathname: "aevus"
                                                }}>[Aevus]</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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