import React from "react";
import Navigation from "../Navigation";

import {Link} from "react-router-dom";

export default class Aevus extends React.Component {
    render() {
        let style = {
            height: "100%",
            margin: "auto",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0"
        }

        
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

        return(
            <div>
                <Navigation/>
                <div style={style}>
                    <div class="row">
                        <div class="col-12 col-sm-2 fix"  style={{marginTop: "100px"}}>
                            <h2 style={{marginBottom: "20px"}}>projects</h2>
                            <Link to='/projects' style={style2}>back</Link>
                            </div>
                        <div class="col-12 col-sm-7">
                            <h1 class="projectTitle">[Aevus]</h1>
                            <div class="projectSpec">type: Android Application | time: Current Personal Project | technologies: Java, Adobe Creative Cloud </div>
                            
                            <h2>Impact Of Eczema</h2>
                            <div>Eczema is an umbrella term for dermatitis (skin immflamation). 31.6 million Americans are
                                estimated to suffer anywhere on the body from a combination of symptoms including 
                                    <ul>
                                        <li>itching</li>
                                        <li>redness</li>
                                        <li>blisters</li>
                                        <li>scaling</li>
                                        <li>flaking</li>
                                        <li>cracking</li>
                                    </ul>
                                    The impact extends to mental and physical aspects in the form of constant pain,
                                extreme stress, loss of sleep, low self-esteem, social isolation, anxiety, depression, and suicidal thoughts.   
                            </div>                 
                            <h2>Concept</h2>
                            <h3>Personal Motivation</h3>
                            <div>My sense of normal used to be a constant burn, aching pain, and instense itchiness. Early 
                                2018, I was at my worst. For two months straight, my face and arms constantly flared to the point I was feverish. 
                                I couldn't seek medical help at the time, and my solution to overdose on antihistamines.   
                            </div>
                            <h3>Issues With Seeking Medical Help</h3>
                            <div>
                                My eczema is related to dairy. Once I had focused on a lactose-free diet, I never flared up again, and my
                                skin eventually returned to normal. I went to a dermatologist, and based on my allergy test, it was
                                determined I wasn't allergic to milk.                                
                            </div>
                            <br/>
                            <div>
                                The issue was that eczema acts like an allergy because the immune system is overreacting but not really.
                                In my case, mine a food intolerance, so I would have to hit a threshold to react. However,
                                my reactions are often delayed by at least a day as well. 
                            </div>
                            <h3>When There Is No One Solution</h3>
                            <div>There is no cure as triggers may be a different combination for everyone. A treatment for one person may
                                also be a catalyst for another. Sometimes the same treatment would work one day but not the next.
                            </div>    
                            <h3>The Work Around</h3>
                            <div>
                                Eczema is a condition to live with, not fight against.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}