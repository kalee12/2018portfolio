import React from "react";
import {Link} from "react-router-dom";

import icon from "../Icons/default_icon_b.svg";

export default class NavButton extends React.Component{
    render() {
        let style = {
            boxSizing: "border-box",
            color: "black",
            padding: "10px",
            textDecoration: "none"
        }

        return(
            <div class="cl-effect-1"><Link to={this.props.push} style={style}>{this.props.value == "home" ? <img id="favicon" src={icon}/> : this.props.value}</Link></div>
        );
    }
}