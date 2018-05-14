import React from "react";
import Navigation from "./Navigation";
import Project from "./Project";
import ProjectList from "./ProjectList";

import firebase from 'firebase/app';
import 'firebase/database';

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
                                <h2 style={{color: this.state.selected ? "black" : "gray"}} onClick={() => this.current()}>current</h2>
                                <h2 style={{color: this.state.selected ? "gray" : "black"}} onClick={() => this.past()}>past</h2>
                            </div>
                            <div class="col-8">
                                {this.state.selected ? 
                                    <div>
                                        <ProjectList projRef={curr} type={"current"}/>
                                    </div> 
                                    :
                                        <ProjectList projRef={past} type={"past"}/>
                                    }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}