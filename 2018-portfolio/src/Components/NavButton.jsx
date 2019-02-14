import React from "react";
import {Link} from "react-router-dom";

export default class NavButton extends React.Component{
    render() {
        let style;
        let logo;
        if (this.props.value == 'Karen Lee') {
            style = {
                color: "black",
                textDecoration: "none"
            }
        } else {
            style = {
                color: "black",
                textDecoration: "none"
            }
        }

        return(
            <div class={this.props.value == "Karen Lee" ? "col-4" : "cl-effect-1 col-12 col-md-2"}>
                <Link to={this.props.push} style={this.props.value == "Karen Lee" ? 
                    {
                        color: "black",
                        fontSize: "20pt",
                        textDecoration: "none"
                    } : 
                    {
                        color: "black",
                        textDecoration: "none"
                    }}>{this.props.value}</Link>
            </div>
        );
    }
}