import React from "react";
import Navigation from "../Navigation";
import {Link} from "react-router-dom";
import Gallery from 'react-grid-gallery';

export default class Clouds extends React.Component {
    render() {
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

        let style3 = {
            boxSizing: "border-box",
            color: "black",
            padding: "10px",
            textDecoration: "none",
            display: "block",
            fontSize: "1.5em",
            marginLeft: "0",
            marginRight: "0",
            textAlign: "right"
        }
        
        let clouds = [
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.07.15%2Fclouds.png?alt=media&token=dfb47117-a8cc-49e5-8924-4dc5df48b74e",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.07.15%2Fclouds.png?alt=media&token=dfb47117-a8cc-49e5-8924-4dc5df48b74e",
                thumbnailWidth: 648,
                thumbnailHeight: 432
            }
        ];    

        return(    
            <div>
                <Navigation/>
                <div>
                    <div style={{marginTop: "100px"}}>
                        <div class="row">
                            <div class="col-12 col-sm-2 fix">
                                <h2 style={{marginBottom: "20px"}}>單純</h2>
                                <h3>daan<sup>1</sup> seon<sup>4</sup></h3>
                                <div>simply; purely; merely</div>
                                <Link style={style2} to="/blog">back</Link>
                                <div class="row justify-content-sm-end">
                                    <div class="col-4">
                                        <Link style={style3} 
                                            to={{
                                                pathname: "/break",
                                                }}>prev</Link>
                                    </div>
                                    <div class="col-4">

                                    </div>
                                </div> 
                            </div>
                            <div class="col-12 col-sm-9" style={{marginBottom: "40px"}}>
                                <h2>2018.07.15</h2>
                                <h2>｢ emotion ｣ NEW POLITICS - CLOUDS</h2>
                                <div>
                                </div>
                                <hr/>
                                <div>There's a mixture of elements. I wanted to express how things may not look as they seem. A little bit of "silver lining,"
                                    water reflections, galaxies, and lotus flowers disguised as a cloud.
                                </div>
                                <br/>
                                <Gallery images={clouds} enableImageSelection={false} backdropClosesModal={true}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}