import React from 'react';
import Project from "./Project";

export default class ProjectList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projSnapshot: undefined,
            dev: undefined,
            design: undefined
        }
    }

    componentDidMount() {
        if (this.props.type === "current") {
            this.props.projRef.on("value",
            snapshot => {
                this.setState({projSnapshot: snapshot});
            });
        } else {
            this.props.projRef.on("value",
            snapshot => {
                this.setState({dev: snapshot.child("development"),
                                design: snapshot.child("design")});
            });
        }
    }

    componentWillUnmount() {
        this.props.projRef.off("value");
    }

    render() {
        if (!this.state.projSnapshot && !this.state.dev) {
            return <div>Loading....</div>
        }
        let projects = [];
        let dev = [];
        let design = [];
        if (this.props.type === "current") {
            this.state.projSnapshot.forEach(project => {
                projects.push(<Project projSnapshot={project} />)
            });
        } else {
            this.state.dev.forEach(project => {
                dev.push(<Project projSnapshot={project} />)});
            this.state.design.forEach(project => {
                if(!project.val().hide) {
                    design.push(<Project projSnapshot={project} />)
                }});
        }

        let extend = {
            width: "100%"
        }

        return(
            <div class="row" style={{paddingLeft: "50px"}}>
                {this.props.type === "current" ?
                    <div class="row">
                        {projects}
                    </div>
                :
                    <div style={extend}>
                        <h3 class="logo">development</h3>
                        <div class="row">{dev}</div>
                        <h3>design</h3>
                        <div class="row">{design}</div>
                    </div>
                }
            </div>
        );
    }
}