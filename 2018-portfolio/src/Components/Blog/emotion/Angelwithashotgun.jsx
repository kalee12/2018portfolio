import React from "react";
import Navigation from "../../Navigation";
import {Link} from "react-router-dom";
import Gallery from 'react-photo-gallery';

export default class Angelwithashotgun extends React.Component {
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

        
        let angel = [
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Femotion%2Fthecab%2Fangelwithashotgun.png?alt=media&token=6fcb76c7-159b-4fb6-97b8-ca5874177763",
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
                                <Link style={style2} to="/blog">back</Link>
                                <div class="row justify-content-sm-end">
                                    <div class="col-4">
                                        <Link style={style3} 
                                            to={{
                                                pathname: "/iflid",
                                                }}>prev</Link>
                                    </div>
                                    <div class="col-4">
                                        <Link style={style3} 
                                            to={{
                                                pathname: "/colorgreen",
                                                }}>next</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-9" style={{marginBottom: "40px"}}>
                                <h2>2018.06.01</h2>
                                <h2>｢ emotion ｣ THE CAB - ANGEL WITH A SHOTGUN</h2>
                                <div>I would consider myself tone deaf, but I always want to sing this one aha.
                                </div>
                                <hr/>
                                <div>While making the pattern for the wings, I thought about making a subtle wing pattern that was a hybrid with a flower,
                                    so now I have bit of an urge for flower designs. I also want to get better at utilizing white space.
                                </div>
                                <br/>
                                <Gallery photos={angel}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}