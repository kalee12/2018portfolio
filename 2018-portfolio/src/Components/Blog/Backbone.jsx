import React from "react";
import Navigation from "../Navigation";
import {Link} from "react-router-dom";
import Gallery from 'react-grid-gallery';

export default class BlogActivity extends React.Component {
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

        
        let backbone = [
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.05.29.backbone%2Fbackbone.png?alt=media&token=d8cb5a55-b4bd-4ccb-a485-6d5e9b1fd845",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.05.29.backbone%2Fbackbone.png?alt=media&token=d8cb5a55-b4bd-4ccb-a485-6d5e9b1fd845",
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
                            </div>
                            <div class="col-12 col-sm-9" style={{marginBottom: "40px"}}>
                                <h2>2018.05.29</h2>
                                <h2>｢ emotion ｣ DAUGHTRY - BACKBONE</h2>
                                <div>A little break from working on JJ's Genesis. I'm really into Daughtry's "It's Not Over" back from 2006. It doesn't feel that long ago aha.
                                </div>
                                <hr/>
                                <div>Working on this one really makes me think about my expectations of this series. I'll get an idea of what I want to do, but I'm not
                                    at the point where I can break down the images in my head as components of the program I am using. The point is though, I'm not trying
                                    to force myself to one expectation while doing this. This is really meant as just seeing where creation goes. I'm trying not to block
                                    creativity. There's a little magic in having the end product go nowhere towards the initial reaction I had to go with.
                                </div>
                                <br/>
                                <Gallery images={backbone} enableImageSelection={false} backdropClosesModal={true}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}