import React from "react";
import {Link} from "react-router-dom";

export default class Project extends React.Component {
    render() {     
        let project = this.props.projSnapshot.val();
        return(
            <div class="col-sm-12 col-md-4">
                <div class="col container">
                    {project.img != "tbd" ? 
                        <img class="logo image" src={project.img} alt={project.title}/>
                        :
                        <h3>{project.title}</h3>
                    }
                    <div class="middle">
                        <div class="text">
                            <Link to={{
                                pathname: project.title,
                                state: {project: project}
                            }}>{project.title}</Link>
                            <div>
                            {project.link ?
                                <a href={project.link[0]} target="_blank">{project.link[1]}</a>
                            :
                            <div></div>}
                            {project.seclink ?
                                <a href={project.seclink[0]} target="_blank"> | {project.seclink[1]}</a>
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