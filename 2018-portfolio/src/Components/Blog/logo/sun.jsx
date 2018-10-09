import React from "react";
import Navigation from "../../Navigation";
import {Link} from "react-router-dom";
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

export default class Sun extends React.Component {
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
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fsun%2Faevus_loading-01.png?alt=media&token=38be260b-ef67-4848-802b-ae24f9c66616",
                width: 3,
                height: 1
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fsun%2Faevus_loading-02.png?alt=media&token=6cf8c295-2260-44c7-a6ca-89b71027702e",
                width: 3,
                height: 1
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fsun%2Faevus_loading-03.png?alt=media&token=c6a90252-0718-4916-a2ee-858f64cf4e76",
                width: 3,
                height: 1
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fsun%2Faevus_loading-04.png?alt=media&token=f1528bd6-36cb-4e6c-956c-a9208e525dae",
                width: 3,
                height: 1
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fsun%2Faevus_loading-05.png?alt=media&token=551ab849-507f-4748-9348-beba399ca5ba",
                width: 3,
                height: 1
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fsun%2Faevus_loading-06.png?alt=media&token=b322d00b-24c8-4506-ae2f-ad7da711dde8",
                width: 3,
                height: 1
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fsun%2Faevus_loading-07.png?alt=media&token=a9462e90-cc89-41f5-bb52-734909312663",
                width: 3,
                height: 1
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fsun%2Faevus_loading-08.png?alt=media&token=bd53a926-2c9c-4fe4-91a0-66d74b9668df",
                width: 3,
                height: 1
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fsun%2Floading.gif?alt=media&token=4b4c1c08-69a4-4870-b6c1-220efd1fbdda",
                width: 1,
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
                                                pathname: "/lotus",
                                                }}>prev</Link>
                                    </div>
                                    <div class="col-4">
                                        <Link style={style3} 
                                            to={{
                                                pathname: "/cloud",
                                                }}>next</Link>
                                    </div>
                                </div> 
                            </div>
                            <div class="col-12 col-sm-8" style={{marginBottom: "40px"}}>
                                <h2>2018.08.14</h2>
                                <h2>｢ logo ｣ SUN</h2>
                                <div>Asset progress for my project - aevus.
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