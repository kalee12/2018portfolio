import React from "react";
import Navigation from "../Navigation";

import {Link} from "react-router-dom";

export default class HuskyHotspots extends React.Component {
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
                        <div class="col-12 col-sm-7" style={{marginBottom: "100px"}}>
                            <h1 class="projectTitle">Husky Hotspots</h1>
                            <div class="projectSpec">type: Android Application | technologies: Java, Adobe Creative Cloud </div>
                            <div class="projectSpec">status: Current - Developing Screens / Learning Kotlin</div>
                            
                            <h2>Impact Of Eczema</h2>
                            <div>Eczema is an umbrella term for dermatitis (skin immflamation). 31.6 million Americans are
                                estimated to suffer symptoms anywhere on the body from a combination of
                                    <ul>
                                        <li>itching</li>
                                        <li>redness</li>
                                        <li>blisters</li>
                                        <li>scaling</li>
                                        <li>flaking</li>
                                        <li>cracking</li>
                                    </ul>
                                    Impact to mental and physical states extends to constant pain,
                                extreme stress, lack of sleep, low self-esteem, social isolation, anxiety, depression, and suicidal thoughts.   
                            </div>                 
                            <h2>Motivations</h2>
                            <h3>Personal Experience</h3>
                            <div>For 12 years, my sense of normal used to be a constant burn, aching pain, and instense itchiness. Early 
                                2018, I was at my worst. For two months straight, my face and arms continuously flared to the point I was feverish. 
                                I couldn't seek medical help at the time, and my solution to overdose on antihistamines.   
                            </div>
                            <h3>Issues With Seeking Medical Help</h3>
                            <div>
                                My eczema is related to dairy. Once I aimed to remove lactose from my diet, I never flared up again, and my
                                skin eventually returned to normal. I went to a dermatologist, and based on my allergy test, it was
                                actually determined I wasn't allergic to milk.                                
                            </div>
                            <br/>
                            <div>
                                The issue was that eczema acts like an allergy because the immune system is overreacting but not really.
                                Mine is a food intolerance, so I would have to hit a threshold in order to react. However,
                                my reactions are often delayed by at least a day as well.
                            </div>
                            <h3>When There Is No One Solution</h3>
                            <div>There is no cure as triggers may be a different combination for everyone. A treatment for one person may also be a catalyst for another. 
                                Sometimes the same treatment would work one day but not the next.
                            </div>    
                            <h3>The Work Around</h3>
                            <div>
                                Eczema is to live with, not fight against but coming to terms with such a condition is a battle. There's 
                                a lot of trial and error to go through. That's why I wanted to build [Aevus] to help users track 
                                their condition and understand their skin better.
                            </div>
                            <h2>Concept</h2>
                            <h3>User Motivations</h3>
                                <div>These were possible motivations I considered</div>
                                <h5>Food Triggers</h5>
                                <ul>
                                    <li>As I do not know what my triggers are, I want a way to track my intake so I can notice any trends.</li>
                                    <li>As someone who is starting out a new diet, I want a way to penalize myself so I can keep myself
                                        accountable.
                                    </li>
                                </ul>
                                <h5>Environmental Triggers</h5>
                                <ul>
                                    <li>As someone with sensitive skin, I want a weather forecast with allergen details
                                        so I can prepare my skin and clothes for the week.</li>
                                </ul>
                                <h5>Mental Health</h5>
                                <ul>
                                    <li>As someone who's stressed because of their skin, I want a private place to track my emotions 
                                        so I can better understand my feelings.
                                    </li>
                                    <li>As a long time sufferer, I want a way to remind myself of my progress so I can see positiveness.</li>
                                </ul>
                                <h5>Treatment</h5>
                                <ul>
                                    <li>As someone with multiple types of eczema, I want a bodychart so I can keep track of when and
                                        what gets affected.</li>
                                    <li>As someone who had to go through multiple lotions, I want to keep track of my products to
                                        remember which types work for me.
                                    </li>
                                </ul>
                            <h3>Consolidation</h3>
                                The main aspects came down to
                            <h5>Cycles</h5>
                            <ul>
                                <li>Log tracking flare cycles</li>
                                <li>Alerts to resist food temptations</li>
                                <li>Records of resisting temptations</li>
                            </ul>
                            <h5>Weather</h5>
                            <ul>
                                <li>Forecast with particular metrics (pollen / humidity)</li>
                                <li>Prompts to reinforce preventive skincare</li>
                            </ul>
                            <h5>Daily Log</h5>
                            <h5>Skincare</h5>

                            <h3>Design</h3>
                            <h4>Inspirations</h4>
                            <h5><a href="habitica.com">Habitica</a></h5>
                            <h4>Style</h4>
                            <h2>Current Progress</h2>
                            <h3>Development</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}