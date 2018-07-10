import React from "react";
import Navigation from "../../Navigation";
import {Link} from "react-router-dom";
import Gallery from 'react-grid-gallery';

export default class Sunmoon extends React.Component {
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

        
        let images = [
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fsunmoon%2Fsun_moon-01.png?alt=media&token=7c917949-096c-407f-b939-89797af66cd9",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fsunmoon%2Fsun_moon-01.png?alt=media&token=7c917949-096c-407f-b939-89797af66cd9",
                thumbnailWidth: 300,
                thumbnailHeight: 95
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fsunmoon%2Fsun_moon-02.png?alt=media&token=a712160c-8863-4632-ac99-da24df284883",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fsunmoon%2Fsun_moon-02.png?alt=media&token=a712160c-8863-4632-ac99-da24df284883",
                thumbnailWidth: 300,
                thumbnailHeight: 95
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fsunmoon%2Fsun_moon-03.png?alt=media&token=5b4056cd-6a0a-4305-9b14-55f7deadc6cc",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fsunmoon%2Fsun_moon-03.png?alt=media&token=5b4056cd-6a0a-4305-9b14-55f7deadc6cc",
                thumbnailWidth: 300,
                thumbnailHeight: 95
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fsunmoon%2Fsun_moon-04.png?alt=media&token=08c5671d-3a50-474f-abe8-f1e1060f8c2c",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fsunmoon%2Fsun_moon-04.png?alt=media&token=08c5671d-3a50-474f-abe8-f1e1060f8c2c",
                thumbnailWidth: 300,
                thumbnailHeight: 95
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fsunmoon%2Fsun_moon-05.png?alt=media&token=f8ff665b-86c5-46eb-8776-43ca7bddfccd",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fsunmoon%2Fsun_moon-05.png?alt=media&token=f8ff665b-86c5-46eb-8776-43ca7bddfccd",
                thumbnailWidth: 300,
                thumbnailHeight: 95
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fsunmoon%2Fsun_moon-06.png?alt=media&token=9d1e8f85-be0f-48d7-a743-f5f4ba56faf6",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fsunmoon%2Fsun_moon-06.png?alt=media&token=9d1e8f85-be0f-48d7-a743-f5f4ba56faf6",
                thumbnailWidth: 300,
                thumbnailHeight: 95
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
                                        state: {selected: 1}
                                        }}>back</Link>
                                {/* <div class="row justify-content-sm-end">

                                    <div class="col-4">
                                        <div class="col-4">
                                            <Link style={style3} 
                                                to={{
                                                    pathname: "/day2",
                                                    }}>next</Link>
                                        </div>
                                    </div>
                                </div>        */}
                            </div>
                            <div class="col-12 col-sm-9" style={{marginBottom: "40px"}}>
                                <h2>2018.07.09</h2>
                                <h2>｢ logo ｣ SUN AND MOON</h2>
                                <div><Link style={{}} 
                                            to={{
                                                pathname: "/day5",
                                                }}>Created for Daily UI - Day5: App Icon</Link>
                                </div>
                                <hr/>
                                
                                <div> 
                                    <Gallery images={images} enableImageSelection={false} backdropClosesModal={true} showLightboxThumbnails={true}/>
                                    <div style={{float: "left", marginTop: "2%"}}>
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