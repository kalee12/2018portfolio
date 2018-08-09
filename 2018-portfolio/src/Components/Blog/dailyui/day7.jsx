import React from "react";
import Navigation from "../../Navigation";
import {Link} from "react-router-dom";
import Gallery from 'react-photo-gallery';

export default class Day7 extends React.Component {
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
        
        let settings = [
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Fdailyui%2Fday7_settings.png?alt=media&token=c0f6c44c-40b5-4b4b-92be-0de5c796c39e",
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
                                                pathname: "/day6",
                                                }}>day 6</Link>
                                    </div>
                                    <div class="col-4">
                                        <Link style={style3} 
                                            to={{
                                                pathname: "/day8",
                                                }}>day 8</Link>
                                    </div>
                                </div>        
                            </div>
                            <div class="col-12 col-sm-8" style={{marginBottom: "40px"}}>
                                <h2>2018.07.12</h2>
                                <h2>｢ daily ui ｣ DAY 7 - SETTINGS</h2>
                                <div>
                                </div>
                                <hr/>
                                
                                <div> 
                                    <Gallery photos={settings}/>

                                    <div style={{float: "left", marginTop: "2%"}}>
                                    This would be an interface for a DSLR camera. I never really liked how cluttered their
                                    settings felt. Although I would understand how it's normally done because you would want to look at all your settings at once. Even
                                    if you wouldn't touch them that much, you would want them to be there so you have the chance to notice a setting is abnormal. With this one 
                                    though, this UI may be more suited with touch capabilities because it's not showing a lot of the information you'd normally get.
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