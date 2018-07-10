import React from "react";
import Navigation from "../../Navigation";
import {Link} from "react-router-dom";
import Gallery from 'react-grid-gallery';

export default class Day1 extends React.Component {
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

        
        let signup = [
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Fdailyui%2Fday1_sign_up.jpg?alt=media&token=25be41e9-d963-4f52-848c-98d66c96b178",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Fdailyui%2Fday1_sign_up.jpg?alt=media&token=25be41e9-d963-4f52-848c-98d66c96b178",
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

                                    </div>
                                    <div class="col-4">
                                            <Link style={style3} 
                                                to={{
                                                    pathname: "/day2",
                                                    }}>day 2</Link>
                                        </div>
                                </div>       
                            </div>
                            <div class="col-12 col-sm-9" style={{marginBottom: "40px"}}>
                                <h2>2018.07.03</h2>
                                <h2>｢ daily ui ｣ DAY 1 - SIGN UP</h2>
                                <div>"Luscinia" is the genus consisting of nightingales. 
                                </div>
                                <hr/>
                                
                                <div> 
                                    <h3>User Needs</h3>
                                    <ul>
                                        <li>As a disorganized person, I want a fun way to track my days.</li>
                                        <li>As an unmotivated person, I want to find long term things to do.</li>
                                        <li>As a lost person, I want to see what others are up to.</li>
                                        <li>As a competitive person, I want to track my progress and achieve milestones.</li>
                                    </ul>
                                    <Gallery images={signup} enableImageSelection={false} backdropClosesModal={true}/>
                                    <div style={{float: "left", marginTop: "2%"}}>This may be a daily tasks / goal tracker with a social component. I wouldn't require actual names
                                    because I want people to be open about their goals. Being able to write out a goal and
                                    possibly having other people see it creates the idea of accountability. The social aspects would
                                    be a tagboard where there would be categories of tasks / goals people want to do, and people could
                                    give support through a liking system or somehow indicate "I'm going to do that with you!" The app would
                                    also give small, daily challenges to get the user started. 
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