import React from "react";
import {Link} from "react-router-dom";

export default class NavButton extends React.Component{
    render() {
        let style = {
            boxSizing: "border-box",
            color: "black",
            padding: "10px",
            textDecoration: "none"
        }

        return(
            <Link to={this.props.push} style={style}>{this.props.value}</Link>
        );
    }
}