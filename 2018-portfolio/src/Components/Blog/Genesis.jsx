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

        let tracklist = [
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.05.22.genesis%2Fgenesis_00.png?alt=media&token=66b099d9-4f9e-48be-8bfd-93ec04f82993",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.05.22.genesis%2Fgenesis_00.png?alt=media&token=66b099d9-4f9e-48be-8bfd-93ec04f82993",
                thumbnailWidth: 648,
                thumbnailHeight: 432
            }
        ];

        let flashback = [
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.05.22.genesis%2Fgenesis_01.png?alt=media&token=d60a885c-484b-4e43-bd5f-968f4a6a4809",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.05.22.genesis%2Fgenesis_01.png?alt=media&token=d60a885c-484b-4e43-bd5f-968f4a6a4809",
                thumbnailWidth: 648,
                thumbnailHeight: 432
            }
        ];

        let brave = [
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.05.22.genesis%2Fgenesis_02.png?alt=media&token=9072f3d2-0057-4564-8f63-02c85d6ce87c",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.05.22.genesis%2Fgenesis_02.png?alt=media&token=9072f3d2-0057-4564-8f63-02c85d6ce87c",
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
                                    </div>
                                    <div class="col-4">
                                        <Link style={style3} 
                                            to={{
                                                pathname: "/backbone",
                                                }}>next</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-9" style={{marginBottom: "40px"}}>
                                <h2>2018.05.22</h2>
                                <h2>｢ emotion ｣ JJ LIN 林俊杰 - GENESIS 新地球</h2>
                                <div>This will be the first in a series I've decided to do in my spare time. Using Adobe InDesign, the goal is to draw out emotions
                                    and see what becomes of it.
                                </div>
                                <hr/>
                                <div>I've came across JJ Lin's music in 2016. His sound is a blend of traditional and modern elements, one of which I
                                    really enjoy. JJ is versatile and very skilled, from his vocals, melodies, lyrics, and him playing instruments. I've come to respect
                                    his drive in the way that he is experimental yet authentic most of all. It felt suiting to start this series with an album of his.</div>
                                <br/>
                                <div style={{marginTop: "20px", overflow: "auto"}}>
                                    <div>Tracklist</div>
                                    <Gallery images={tracklist} enableImageSelection={false} backdropClosesModal={true}/>
                                </div>
                                <div style={{marginTop: "20px"}}>I anticipate the tracklist design will change as I go through these tracks. I'm not yet satisfied with this one.</div>
                                <hr/>
                                <div style={{marginTop: "20px", overflow: "auto"}}>
                                    <div>1. 迴 Flashback</div>
                                    <Gallery images={flashback} enableImageSelection={false} backdropClosesModal={true}/>
                                </div>
                                <div style={{marginTop: "20px"}}>This one was interesting because there are no lyrics.
                                    Listening to it, there are a lot of little things I wanted to draw as inspiration. Softness, a quiet sense of calm, hope,
                                    and a bit of sadness and darkness. I really like how this one turned out.
                                </div>
                                <hr/>
                                <div style={{marginTop: "20px", overflow: "auto"}}>
                                    <div>2. 新地球 Brave New World</div>
                                    <Gallery images={brave} enableImageSelection={false} backdropClosesModal={true}/>
                                </div>
                                <div style={{marginTop: "20px"}}>There's something a bit painful about this song. It's not an outright kind of pain. It's dull and because it sits,
                                    it eats away at you, not letting you fully get it out. It feels like agony.                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}