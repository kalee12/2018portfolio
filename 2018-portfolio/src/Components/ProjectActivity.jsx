import React from "react";
import Navigation from "./Navigation";
import Project from "./Project";
import ProjectList from "./ProjectList";

import firebase from 'firebase/app';
import 'firebase/database';
import {Link} from "react-router-dom";

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

        let style2 = {
            boxSizing: "border-box",
            color: "black",
            padding: "10px",
            textDecoration: "none",
            display: "block",
            fontSize: "1.5em",
            marginTop: "0.83em",
            marginBottom: "0.83em",
            marginLeft: "0",
            marginRight: "0"
        }
        
        let data = this.props.location.state.project;
        let technology = "";
        data.dialog.technology.forEach(element => {
            technology += element + ", "
        });
        console.log(technology.substring(0, technology.length - 1))

        return(
            <div>
                <Navigation/>
                <div style={style}>
                    <div>
                    </div>
                    <div style={{marginTop: "100px"}}>
                        <div class="row">
                            <div class="col-2" style={{textAlign: "right"}}>
                                <h2 style={{marginBottom: "20px"}}>projects</h2>
                                <Link to='/projects' style={style2}>back</Link>
                                </div>
                            <div class="col-8">
                                <div>{data.title}</div>
                                {data.status ?
                                    <div>{data.dialog.start} - {data.dialog.end} | Status: {data.dialog.status}</div>
                                :
                                    <div>{data.dialog.start} - {data.dialog.end}</div>
                                }                 
                                <div>
                                    {data.type} | {technology.substring(0, technology.length - 2)}
                                </div>
                                <div>
                                    {data.dialog.desc_long}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}