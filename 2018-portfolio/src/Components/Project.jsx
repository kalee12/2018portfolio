import React from "react";
import {Link} from "react-router-dom";

export default class Project extends React.Component {
    render() {     
        let project = this.props.projSnapshot.val();
        return(
            <div class="col-sm-12 col-md-4">
                <div style={{padding:"5px", border: "1px solid rgba(0, 0, 0, .3)", marginBottom: "10px",
                                                backgroundColor: "rgb(250, 250, 250)"}}>
                    <div class="col container" style={{padding: "10px", height: "fit-content", border: "1px solid rgba(0, 0, 0, .1)",
                                                        backgroundColor: "rgb(255, 255, 255)"}}>
                        {project.img !== "tbd" ? 
                            <img class="image" src={project.img} alt={project.title}/>
                            :
                            <h3>{project.title}</h3>
                        }
                        <div class="text">
                            <Link to={{
                                pathname: "p:" + project.title,
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