import React from "react";
import Navigation from "../Navigation";
import {Link} from "react-router-dom";
import Gallery from 'react-grid-gallery';

export default class BlogActivity extends React.Component {
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

        let images = [
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.05.22.genesis%2Fpreview.jpg?alt=media&token=7571118d-269c-4ab8-9a12-3704a4660ee8",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.05.22.genesis%2Fpreview.jpg?alt=media&token=7571118d-269c-4ab8-9a12-3704a4660ee8",
                thumbnailWidth: 648,
                thumbnailHeight: 432
            }
        ]

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
                            </div>
                            <div class="col-12 col-sm-9">
                                <h2>2018.05.22</h2>
                                <h2>JJ LIN 林俊杰 GENESIS 新地球</h2>
                                <div>This will be the first in a series I've yet to name. Using Adobe InDesign, the goal is to have typography
                                    interact with emotion.
                                </div>
                                <hr/>
                                <div>I've came across JJ Lin's music in 2016. His sound is a blend of traditional and modern elements, one of which I
                                    really enjoy. JJ is versatile and very skilled, from his vocals, melodies, lyrics, and him playing instruments. I've come to respect
                                    his drive in the way that he is experimental yet authentic most of all. It felt suiting to start this series with an album of his.</div>
                                <div style={{marginTop: "20px"}}>Preview of current progress:</div>
                                <Gallery images={images} enableImageSelection={false} backdropClosesModal={true}
                                    showLightboxThumbnails={true}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}