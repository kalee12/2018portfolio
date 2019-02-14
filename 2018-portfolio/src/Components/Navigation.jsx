import React from "react";
import constants from "./constants"
import NavButton from "./NavButton";

export default class Navigation extends React.Component{
    render() {
        return(
            <div class="row" style={{margin: "2% 0 0 2%"}}>
                <NavButton value="Karen Lee" mode={this.props.mode} push={constants.routes.main}/>
                <NavButton value="work" mode={this.props.mode} push={constants.routes.projects}/>
                <NavButton value="photography" mode={this.props.mode} push={constants.routes.photography}/>
                <NavButton value="blog" mode={this.props.mode} push={constants.routes.blog}/>
                <NavButton value="about" mode={this.props.mode} push={constants.routes.about}/>
            </div>
        );
    }
}