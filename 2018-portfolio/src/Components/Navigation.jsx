import React from "react";
import constants from "./constants"
import NavButton from "./NavButton";

export default class Navigation extends React.Component{
    render() {
        let style = {
            marginTop: "10px"
        };

        return(
            <div class="fixed-top navbar" style={style}>
                <NavButton value="home" push={constants.routes.main}/>
                <NavButton value="projects" push={constants.routes.projects}/>
                <NavButton value="photography" push={constants.routes.photography}/>
                <NavButton value="blog" push={constants.routes.blog}/>
                <NavButton value="about" push={constants.routes.about}/>
            </div>
        );
    }
}