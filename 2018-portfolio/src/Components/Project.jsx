import React from "react";
import {Link} from "react-router-dom";

export default class Project extends React.Component {
    render() {     
        let project = this.props.projSnapshot.val();
        return(
            <div class="col-4">
                <div class="col container">
                    {project.img != "tbd" ? 
                        <img class="logo image" src={project.img} alt={project.title}/>
                        :
                        <h3>{project.title}</h3>
                    }
                    <div class="middle">
                        <div class="text">
                            {project.title}
                            <div>
                            {project.link ?
                                <a href={project.link[0]}>{project.link[1]}</a>
                            :
                            <div></div>}
                            {project.seclink ?
                                <a href={project.seclink[0]}> | {project.seclink[1]}</a>
                            :
                            <div></div>}
                            </div>
                            <div>{project.desc_short}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}