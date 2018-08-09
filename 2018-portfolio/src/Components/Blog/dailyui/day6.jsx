import React from "react";
import Navigation from "../../Navigation";
import {Link} from "react-router-dom";
import Gallery from 'react-photo-gallery';

export default class Day6 extends React.Component {
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
        
        let user = [
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Fdailyui%2Fday6_user_profile.png?alt=media&token=91ae91df-ea78-4842-ada9-5fed6d59e349",
                width: 1,
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
                                <Link style={style2} 
                                    to={{
                                        pathname: "/blog",
                                        state: {selected: 2}
                                        }}>back</Link>
                                <div class="row justify-content-sm-end">
                                    <div class="col-4">
                                        <Link style={style3} 
                                            to={{
                                                pathname: "/day5",
                                                }}>day 5</Link>
                                    </div>
                                    <div class="col-4">
                                        <Link style={style3} 
                                            to={{
                                                pathname: "/day7",
                                                }}>day 7</Link>
                                    </div>
                                </div>        
                            </div>
                            <div class="col-12 col-sm-8" style={{marginBottom: "40px"}}>
                                <h2>2018.07.12</h2>
                                <h2>｢ daily ui ｣ DAY 6 - USER PROFILE</h2>
                                <div>
                                </div>
                                <hr/>
                                
                                <div> 
                                    <Gallery photos={user}/>

                                    <div style={{float: "left", marginTop: "2%"}}>The type of platform I was going for was a multi-media platform, such as Tumblr, 
                                    where you would have text posts, images, quotes, etc. That's why there is a lack of a grid view. It may be difficult
                                    to find a pleasing way to display text posts next to image posts. Especially in a way the user would find aesthetically pleasing
                                    if they're the type to really control their content feed.
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