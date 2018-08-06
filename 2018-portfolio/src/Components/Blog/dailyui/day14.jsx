import React from "react";
import Navigation from "../../Navigation";
import {Link} from "react-router-dom";
import Gallery from 'react-grid-gallery';

export default class Day14 extends React.Component {
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
        
        let countdown = [
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Fdailyui%2Fday14_countdown_timer.png?alt=media&token=c29a0759-25ab-4222-9fba-3966274f3f2f",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Fdailyui%2Fday14_countdown_timer.png?alt=media&token=c29a0759-25ab-4222-9fba-3966274f3f2f",
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
                                                pathname: "/day13",
                                                }}>day 13</Link>
                                    </div>
                                    <div class="col-4">
                                        <Link style={style3} 
                                            to={{
                                                pathname: "/day15",
                                                }}>day 15</Link>
                                    </div>
                                </div>        
                            </div>
                            <div class="col-12 col-sm-9" style={{marginBottom: "40px"}}>
                                <h2>2018.07.25</h2>
                                <h2>｢ daily ui ｣ DAY 14 - COUNTDOWN TIMER</h2>
                                <div>
                                </div>
                                <hr/>
                                
                                <div> 
                                    <Gallery images={countdown} enableImageSelection={false} backdropClosesModal={true}/>

                                    <div style={{float: "left", marginTop: "2%"}}>
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