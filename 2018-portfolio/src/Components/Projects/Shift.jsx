import React from "react";
import Navigation from "../Navigation";

import {Link} from "react-router-dom";

import shift_c from "../../Icons/shift_icon_color.svg";
import {Carousel} from 'react-bootstrap';

import shift_01 from "../../Shift/browser_main.png";
import shift_02 from "../../Shift/browser_tab.png";
import shift_03 from "../../Shift/browser_web.png";
import shift_04 from "../../Shift/calculator_main.png";
import shift_05 from "../../Shift/calendar_main.png";
import shift_06 from "../../Shift/calendar_day.png";
import shift_07 from "../../Shift/calendar_event.png";

import shift_08 from "../../Shift/clock_alarm.png";
import shift_09 from "../../Shift/clock_lockscreen.png";
import shift_10 from "../../Shift/clock_stopwatch.png";
import shift_11 from "../../Shift/clock_timer.png";
import shift_12 from "../../Shift/clock_world.png";


export default class Shift extends React.Component {
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
                        <div style={{marginBottom: "100px", padding: "2% 5% 0 5%"}}>
                            <div class="col-4 outer" style={{margin: "auto"}}>
                                <div class="col inner" style={{width: "100%", paddingTop: "100%"}}>
                                    <div style={{position:"absolute", top:"27%", left:"10%", bottom:"0", right: "0"}}>
                                        <img style={{width:"90%"}} src={shift_c}/>
                                    </div>
                                </div>
                            </div>
                            <div style={{textAlign: "center"}}>
                                <h1 class="projectTitle">Shift</h1>
                                <div class="projectSpec">type: Operating System Concept | technologies: Adobe XD</div>
                                <div class="projectSpec">time: Sept - Dec 2017</div>
                                <div class="projectSpec"><i>(INFO 365 | Mobile App Design)</i></div>
                                <div><a href="https://drive.google.com/file/d/1-cmaf38jxaAbFwuaFGnRtR_OkOOEes7H/view" target="_blank">screens </a>
                                <a href="https://docs.google.com/presentation/d/1ylorLpDZUnmdCqOS1pe-VWpAEfEE1lkUPLRI5fJcXXI/edit?usp=sharing" target="_blank">doc</a></div>
                            </div>
                            <div class="d-flex justify-content-center" style={{marginTop: "2%"}}>
                                <div style={{display: "inline-block", marginRight:"2%", width: "20%"}}>
                                    <Carousel
                                        interval={null}
                                        >
                                        <Carousel.Item>
                                            <img width={"100%"} height={600} alt="900x500" src={shift_01} />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img width={"100%"} height={600} alt="900x500" src={shift_02} />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img width={"100%"} height={600} alt="900x500" src={shift_03} />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img width={"100%"} height={600} alt="900x500" src={shift_04} />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img width={"100%"} height={600} alt="900x500" src={shift_05} />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img width={"100%"} height={600} alt="900x500" src={shift_06} />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img width={"100%"} height={600} alt="900x500" src={shift_07} />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                    
                                </div>
                                <div style={{display: "inline-block", width: "20%"}}>
                                    <Carousel
                                        interval={null}
                                        >
                                        <Carousel.Item>
                                            <img width={"100%"} height={600} alt="900x500" src={shift_08} />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img width={"100%"} height={600} alt="900x500" src={shift_09} />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img width={"100%"} height={600} alt="900x500" src={shift_10} />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img width={"100%"} height={600} alt="900x500" src={shift_11} />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img width={"100%"} height={600} alt="900x500" src={shift_12} />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                            <h2>(INFO 365) Mobile App Design</h2>
                            <div>For ten weeks, I was in a 7 person team where we designed an own operating system concerning two
                                week sprints broken down into 
                            </div>
                            <ul>
                                <li>Design strategy</li>
                                <li>UX &amp; UI</li>
                                <li>App Design - Communication</li>
                                <li>App Design - Productivity</li>
                                <li>App Design - Information</li>
                                <li>Final Touches</li>
                            </ul>                               
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}