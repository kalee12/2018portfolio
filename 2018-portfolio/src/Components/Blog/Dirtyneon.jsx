import React from "react";
import Navigation from "../Navigation";
import {Link} from "react-router-dom";
import Gallery from 'react-grid-gallery';

export default class Dirtyneon extends React.Component {
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

        
        let dirtyneon = [
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.05.31.dirtyneon%2Fdirtyneon.png?alt=media&token=923b5f76-eeec-438a-9792-501b1153415b",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.05.31.dirtyneon%2Fdirtyneon.png?alt=media&token=923b5f76-eeec-438a-9792-501b1153415b",
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
                            </div>
                            <div class="col-12 col-sm-9" style={{marginBottom: "40px"}}>
                                <h2>2018.05.31</h2>
                                <h2>｢ emotion ｣ 3LAU - Dirty Neon</h2>
                                <div>I go through musical phases on rotation. EDM seems to be making a little comeback.
                                </div>
                                <hr/>
                                <div>I really like the process of geometric designs. As I'm playing with forms, sometimes I can just see where the design
                                    is taking itself. Feel was a bit harder for me to go off of because with EDM or techno sounds, I don't seem to get a certain
                                    pull as I do with other genres. I tried to focus on perspectives instead. The idea was using distance, creating a far kind of 
                                    feel would give a dreamy type effect.
                                </div>
                                <br/>
                                <Gallery images={dirtyneon} enableImageSelection={false} backdropClosesModal={true}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}