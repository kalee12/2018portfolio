import React from "react";
import Navigation from "./Navigation";


import {Link} from "react-router-dom";

import Gallery from 'react-grid-gallery';

export default class Projects extends React.Component {
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

        let style2 = {
            boxSizing: "border-box",
            color: "black",
            padding: "10px",
            textDecoration: "none",
            display: "block",
            fontSize: "1.5em",
            marginTop: "0.83em",
            marginBottom: "0.83em",
            marginLeft: "0",
            marginRight: "0"
        }
        
        let data = this.props.location.state.project;
        let technology = "";
        data.dialog.technology.forEach(element => {
            technology += element + ", "
        });
        console.log(technology.substring(0, technology.length - 1))

        let photos = data.dialog.img;
        let photo = [];

        if (photos !== "tbd") {
            if (data.dialog.orientation === "vertical") {
                photos.forEach(element => {
                    photo.push({
                        src: element[0],
                        thumbnail: element[0],
                        thumbnailWidth: 400,
                        thumbnailHeight: 600,
                        alt: element[1]

                    })
                });    
            } else {
                photos.forEach(element => {
                    photo.push({
                        src: element[0],
                        thumbnail: element[0],
                        thumbnailWidth: 600,
                        thumbnailHeight: 400,
                        alt: element[1]
                    })
                });    
            }
        }

        return(
            <div>
                <Navigation/>
                <div style={style}>
                    <div>
                    </div>
                    <div style={{marginTop: "100px"}}>
                        <div class="row">
                            <div class="col-12 col-sm-2 fix">
                                <h2 style={{marginBottom: "20px"}}>projects</h2>
                                <Link to='/projects' style={style2}>back</Link>
                                </div>
                            <div class="col-12 col-sm-9">
                                <div>{data.title}</div>
                                <div>
                                {data.link ?
                                    <a href={data.link[0]} target="_blank">{data.link[1]}</a>
                                :
                                <div></div>}
                                {data.seclink ?
                                    <a href={data.seclink[0]} target="_blank"> | {data.seclink[1]}</a>
                                :
                                <div></div>}
                                </div>
                                {data.dialog.status ?
                                    <div>{data.dialog.start} - {data.dialog.end} | Status: {data.dialog.status}</div>
                                :
                                    <div style={{display: "inline"}}>{data.dialog.start} - {data.dialog.end}</div>

                                } 
                                {data.dialog.role ?
                                    <div style={{display: "inline"}}> | {data.dialog.role}</div>
                                    :
                                    <div></div>                                 
                                }                
                                <div>
                                    {data.type} | {technology.substring(0, technology.length - 2)}
                                </div>
                                <div>
                                    {data.dialog.desc_long}
                                </div>
                                {data.dialog.orientation === "vertical" ?
                                    <Gallery images={photo} enableImageSelection={false} backdropClosesModal={true} 
                                    lightboxWidth={300} showLightboxThumbnails={true}/>
                                    :
                                    <Gallery images={photo} enableImageSelection={false} backdropClosesModal={true}
                                    showLightboxThumbnails={true}/>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}