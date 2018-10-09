import React from "react";
import Navigation from "../../Navigation";
import {Link} from "react-router-dom";
import Gallery from 'react-photo-gallery';

export default class Day4 extends React.Component {
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
        
        let calculator = [
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Fdailyui%2Fday4_calculator.jpg?alt=media&token=bdbaf0ee-6aea-4ea2-ae65-dad9b1d19539",
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
                                <Link style={style2} 
                                    to={{
                                        pathname: "/blog",
                                        state: {selected: 2}
                                        }}>back</Link>
                                <div class="row justify-content-sm-end">
                                    <div class="col-4">
                                        <Link style={style3} 
                                            to={{
                                                pathname: "/day3",
                                                }}>day 3</Link>
                                    </div>
                                    <div class="col-4">
                                        <Link style={style3} 
                                            to={{
                                                pathname: "/day5",
                                                }}>day 5</Link>
                                    </div>
                                </div>         
                            </div>
                            <div class="col-12 col-sm-8" style={{marginBottom: "40px"}}>
                                <h2>2018.07.08</h2>
                                <h2>｢ daily ui ｣ DAY 4 - CALCULATOR</h2>
                                <div>
                                </div>
                                <hr/>
                                
                                <div> 
                                    <Gallery photos={calculator} direction={"column"} columns={1}/>
                                    <div style={{float: "left", marginTop: "2%"}}>I based this design off of my Sony Xperia X Compact but tweaked the UI
                                    so that it has the top row. On Sony's UI, they had no button to make a number negative. 
                                    They force people to use their parentheses, but I guess if you are doing calculations that require negatives, using parentheses wouldn't 
                                    be outside of one's knowledge.
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