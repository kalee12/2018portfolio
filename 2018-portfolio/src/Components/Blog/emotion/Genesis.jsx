import React from "react";
import Navigation from "../../Navigation";
import {Link} from "react-router-dom";
import Gallery from 'react-photo-gallery';

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
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Femotion%2Fjjlin%2Fgenesis%2Fgenesis_00.png?alt=media&token=df33d71e-2b34-4f54-b6f6-c18919aa45af",
                width: 3,
                height: 2
            }
        ];

        let flashback = [
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Femotion%2Fjjlin%2Fgenesis%2Fgenesis_01.png?alt=media&token=b75aba92-4912-4550-bdbf-83441c727309",
                width: 3,
                height: 2
            }
        ];

        let brave = [
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Femotion%2Fjjlin%2Fgenesis%2Fgenesis_02.png?alt=media&token=fee3ba86-47ae-4b2c-aa56-dd21df2f4b1b",
                width: 3,
                height: 2
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
                                <div style={{marginTop: "20px"}}>
                                    <div>Tracklist</div>
                                    <Gallery photos={tracklist} direction={"column"} columns={1}/>
                                </div>
                                <div style={{marginTop: "20px"}}>I anticipate the tracklist design will change as I go through these tracks. I'm not yet satisfied with this one.</div>
                                <hr/>
                                <div style={{marginTop: "20px"}}>
                                    <div>1. 迴 Flashback</div>
                                    <Gallery photos={flashback} direction={"column"} columns={1}/>
                                </div>
                                <div style={{marginTop: "20px"}}>This one was interesting because there are no lyrics.
                                    Listening to it, there are a lot of little things I wanted to draw as inspiration. Softness, a quiet sense of calm, hope,
                                    and a bit of sadness and darkness. I really like how this one turned out.
                                </div>
                                <hr/>
                                <div style={{marginTop: "20px"}}>
                                    <div>2. 新地球 Brave New World</div>
                                    <Gallery photos={brave} direction={"column"} columns={1}/>
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