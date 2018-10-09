import React from "react";
import Navigation from "../../Navigation";
import {Link} from "react-router-dom";
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

export default class Cloud extends React.Component {
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
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fcloud%2Faevus_cloud-01.png?alt=media&token=2cabe2b7-5ca7-4c16-9a1b-8346b786e205",
                width: 3,
                height: 1
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fcloud%2Faevus_cloud-02.png?alt=media&token=57281f9e-991f-493a-b535-f4694064ea81",
                width: 3,
                height: 1
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fcloud%2Faevus_cloud-03.png?alt=media&token=0527cebe-98ed-4a8f-bfd0-6b3d900e7994",
                width: 3,
                height: 1
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fcloud%2Faevus_cloud-04.png?alt=media&token=3c855ddd-1aca-4690-aa30-a746f633e7dc",
                width: 3,
                height: 1
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fcloud%2Faevus_cloud-05.png?alt=media&token=a2187078-ae6b-42ec-963c-7fb47fdac38f",
                width: 3,
                height: 1
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fcloud%2Faevus_cloud-06.png?alt=media&token=7b8c3bec-55d3-4bfc-b3c9-a045644e2b79",
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
                                                pathname: "/sun",
                                                }}>prev</Link>
                                    </div>
                                    <div class="col-4">
                                        {/* <Link style={style3} 
                                            to={{
                                                pathname: "/lotus",
                                                }}>next</Link> */}
                                    </div>
                                </div> 
                            </div>
                            <div class="col-12 col-sm-8" style={{marginBottom: "40px"}}>
                                <h2>2018.08.14</h2>
                                <h2>｢ logo ｣ CLOUD</h2>
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