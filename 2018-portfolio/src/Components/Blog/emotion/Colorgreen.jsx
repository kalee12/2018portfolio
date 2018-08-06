import React from "react";
import Navigation from "../../Navigation";
import {Link} from "react-router-dom";
import Gallery from 'react-grid-gallery';

export default class Colorgreen extends React.Component {
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
        
        let color = [
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.06.02.colorgreen%2Fcolorgreen.png?alt=media&token=d284f4e2-149e-4b93-a9ff-3d5ed1c33d1d",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.06.02.colorgreen%2Fcolorgreen.png?alt=media&token=d284f4e2-149e-4b93-a9ff-3d5ed1c33d1d",
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
                                                pathname: "/awas",
                                                }}>prev</Link>
                                    </div>
                                    <div class="col-4">
                                        <Link style={style3} 
                                            to={{
                                                pathname: "/demons",
                                                }}>next</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-9" style={{marginBottom: "40px"}}>
                                <h2>2018.06.02</h2>
                                <h2>｢ emotion ｣ NEW POLITICS - COLOR GREEN</h2>
                                <div>The chorus is pretty fun - it makes me think of fields and life blooming.
                                </div>
                                <hr/>
                                <div>I think my style has always been about simplicity and minimalism. It feels peaceful yet full of impact. Flower arrangement though,
                                    it's definitely harder than it looks.
                                </div>
                                <br/>
                                <Gallery images={color} enableImageSelection={false} backdropClosesModal={true}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}