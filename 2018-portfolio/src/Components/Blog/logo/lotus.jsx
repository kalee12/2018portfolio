import React from "react";
import Navigation from "../../Navigation";
import {Link} from "react-router-dom";
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

export default class Lotus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImage: 0
        }
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }

    openLightbox(event, obj) {
        this.setState({
          currentImage: obj.index,
          lightboxIsOpen: true,
        });
      }
      closeLightbox() {
        this.setState({
          currentImage: 0,
          lightboxIsOpen: false,
        });
      }
      gotoPrevious() {
        this.setState({
          currentImage: this.state.currentImage - 1,
        });
      }
      gotoNext() {
        this.setState({
          currentImage: this.state.currentImage + 1,
        });
      }

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
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Flotus%2Flotus-01.png?alt=media&token=5c17938c-3eba-49c0-ad6c-767764fc2f45",
                width: 3,
                height: 1
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Flotus%2Flotus_Artboard%202.png?alt=media&token=e243a913-4584-468f-a609-afeb05b91973",
                width: 3,
                height: 1
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Flotus%2Flotus_Artboard%203.png?alt=media&token=6258ba85-cf87-46c5-9e18-095694052133",
                width: 3,
                height: 1
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Flotus%2Flotus_Artboard%204.png?alt=media&token=14e3f7a4-8940-429a-9ebb-ddb31fc6c9b7",
                width: 3,
                height: 1
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Flotus%2Flotus_Artboard%205.png?alt=media&token=3b0da1c8-b399-41d2-8f8e-eefd93bef015",
                width: 3,
                height: 1
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Flotus%2Flotus_Artboard%206.png?alt=media&token=58db3b02-235d-41ed-be51-42b1b0e0bffd",
                width: 3,
                height: 1
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
                                <div class="row justify-content-sm-end">
                                    <div class="col-4">
                                        <Link style={style3} 
                                            to={{
                                                pathname: "/sunmoon",
                                                }}>prev</Link>
                                    </div>
                                    <div class="col-4">
                                        {/* <Link style={style3} 
                                            to={{
                                                pathname: "/sun",
                                                }}>next</Link> */}
                                    </div>
                                </div> 
                            </div>
                            <div class="col-12 col-sm-8" style={{marginBottom: "40px"}}>
                                <h2>2018.08.05</h2>
                                <h2>｢ logo ｣ LOTUS</h2>
                                <div><Link style={{}} 
                                            to={{
                                                pathname: "/clouds",
                                                }}>Based on the design I did for ｢ emotion ｣ new politics - clouds</Link>
                                </div>
                                <hr/>
                                <div class="col-11"> 
                                    <Gallery photos={images} direction={"column"} columns={1} onClick={this.openLightbox}/>
                                    <Lightbox images={images}
                                    onClose={this.closeLightbox}
                                    onClickPrev={this.gotoPrevious}
                                    onClickNext={this.gotoNext}
                                    currentImage={this.state.currentImage}
                                    isOpen={this.state.lightboxIsOpen}
                                    />
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