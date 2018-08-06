import React from "react";
import Navigation from "../../Navigation";
import {Link} from "react-router-dom";
import Gallery from 'react-grid-gallery';

export default class Ifeellikeimdrowning extends React.Component {
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
        
        let iflid = [
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.05.31.iflid%2Fifeellikeimdrowning.png?alt=media&token=6a1addf5-e1dd-4ae7-a1d7-98585fef28af",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.05.31.iflid%2Fifeellikeimdrowning.png?alt=media&token=6a1addf5-e1dd-4ae7-a1d7-98585fef28af",
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
                                <Link style={style2} to="/blog">back</Link>
                                <div class="row justify-content-sm-end">
                                    <div class="col-4">
                                        <Link style={style3} 
                                            to={{
                                                pathname: "/dirtyneon",
                                                }}>prev</Link>
                                    </div>
                                    <div class="col-4">
                                        <Link style={style3} 
                                            to={{
                                                pathname: "/awas",
                                                }}>next</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-9" style={{marginBottom: "40px"}}>
                                <h2>2018.05.31</h2>
                                <h2>｢ emotion ｣ TWO FEET - I FEEL LIKE I'M DROWNING</h2>
                                <div>The mood in this song is so distinct I really felt like I had to make something.
                                </div>
                                <hr/>
                                <div>A song like this is very personal. It's about needing to cut off someone. I wanted the feeling of having such an open world,
                                    but feeling trapped anyways. I also wanted to depict light at the bottom
                                    because even if things are feeling so bad, it may be a blessing in disguise. Even if there is a sense of drowning,
                                    sometimes you might need that pull down to bring you over the edge and take action. 
                                </div>
                                <br/>
                                <Gallery images={iflid} enableImageSelection={false} backdropClosesModal={true}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}