import React from "react";
import Navigation from "../../Navigation";
import {Link} from "react-router-dom";
import Gallery from 'react-grid-gallery';

export default class Break extends React.Component {
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
        
        let tdgbreak = [
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.07.04.break%2Fbreak.png?alt=media&token=606ef938-a335-4533-bd1f-ef9202bf0de7",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.07.04.break%2Fbreak.png?alt=media&token=606ef938-a335-4533-bd1f-ef9202bf0de7",
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
                                                pathname: "/demons",
                                                }}>prev</Link>
                                    </div>
                                    <div class="col-4">
                                        <Link style={style3} 
                                            to={{
                                                pathname: "/clouds",
                                                }}>next</Link>
                                    </div>
                                </div> 
                            </div>
                            <div class="col-12 col-sm-9" style={{marginBottom: "40px"}}>
                                <h2>2018.07.04</h2>
                                <h2>｢ emotion ｣ THREE DAYS GRACE - BREAK</h2>
                                <div>
                                </div>
                                <hr/>
                                <div>This is one of the cases where the creation just takes itself. I did take the album cover as inspiration for the colors,
                                    and the natural theme of this song is a sense of breaking away. Everything else was the product of "yes, and..." I would create
                                    the design towards a certain idea, but then while I was creating, the design would become something else, and I went along with it.
                                </div>
                                <br/>
                                <Gallery images={tdgbreak} enableImageSelection={false} backdropClosesModal={true}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}