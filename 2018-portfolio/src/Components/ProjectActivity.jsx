import React from "react";
import Navigation from "./Navigation";
import Project from "./Project";
import ProjectList from "./ProjectList";

import firebase from 'firebase/app';
import 'firebase/database';
import {Link} from "react-router-dom";

export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 2,
            selected: true
        }
    }

    current() {
        if (!this.state.selected) {
            this.setState({
                selected: true
            });
        }
    }

    past() {
        if (this.state.selected) {
            this.setState({
                selected: false
            });
        }
    }

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
        
        return(
            <div>
                <Navigation/>
                <div style={style}>
                    <div>
                    </div>
                    <div style={{marginTop: "100px"}}>
                        <div class="row">
                            <div class="col-2" style={{textAlign: "right"}}>
                                <h2 style={{marginBottom: "20px"}}>project</h2>
                                <Link to='/projects' style={style2}>back</Link>
                                </div>
                            <div class="col-8">
                                <div>{this.props.location.state.title}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}