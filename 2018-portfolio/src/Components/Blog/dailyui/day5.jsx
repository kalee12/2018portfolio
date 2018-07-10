import React from "react";
import Navigation from "../../Navigation";
import {Link} from "react-router-dom";
import Gallery from 'react-grid-gallery';

export default class Day5 extends React.Component {
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
            marginRight: "0"
        }
        
        let appicon = [
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Fdailyui%2Fday5_app_icon.png?alt=media&token=bbe75299-6539-4ecb-9331-e98dcb5b5d58",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Fdailyui%2Fday5_app_icon.png?alt=media&token=bbe75299-6539-4ecb-9331-e98dcb5b5d58",
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
                                <Link style={style2} 
                                    to={{
                                        pathname: "/blog",
                                        state: {selected: 2}
                                        }}>back</Link>
                                <div class="row justify-content-sm-end">
                                    <div class="col-4">
                                        <Link style={style3} 
                                            to={{
                                                pathname: "/day4",
                                                }}>day 4</Link>
                                    </div>
                                    <div class="col-4">

                                    </div>
                                </div>        
                            </div>
                            <div class="col-12 col-sm-9" style={{marginBottom: "40px"}}>
                                <h2>2018.07.09</h2>
                                <h2>｢ daily ui ｣ DAY 5 - APP ICON</h2>
                                <div><Link style={{}} 
                                            to={{
                                                pathname: "/sunmoon",
                                                }}>Logo Iterations</Link>
                                </div>
                                <hr/>
                                
                                <div> 
                                    <Gallery images={appicon} enableImageSelection={false} backdropClosesModal={true}/>

                                    <div style={{float: "left", marginTop: "2%"}}>I thought this one would be harder for me because of needing to create a logo, but it was
                                    really fun to experiment with Illustrator. I even found out that you can drag Illustrator files directly into InDesign. Mind blown.
                                    </div>
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}