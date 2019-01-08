import React from "react";
import Navigation from "./Navigation"

import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

import {Carousel} from 'react-bootstrap';

export default class Photography extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        }
    }

    t5i() {
        if (this.state.selected != 0) {
            this.setState({
                selected: 0
            });
        }
    }

    g12() {
        if (this.state.selected != 1) {
            this.setState({
                selected: 1
            });
        }
    }

    muses() {
        if (this.state.selected != 2) {
            this.setState({
                selected: 2
            });
        }
    }

    render() {        
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

        return(
            <div>
                <Navigation/>
                <div>
                    <div style={{marginTop: "50px", height: "90%", marginBottom: "50px"}}>
                        <div class="row">
                            <div class="col-12 col-md-2 fix2">
                                <h3 style={{marginBottom: "50px"}}>｢ photography ｣</h3>
                                <h3 style={{color: this.state.selected == 0 ? "black" : "gray"}} onClick={() => this.t5i()}>canon t5i</h3>
                                <h3 style={{color: this.state.selected == 1 ? "black" : "gray"}} onClick={() => this.g12()}>canon g12</h3>
                                <br/>
                                <h3 style={{color: this.state.selected == 2 ? "black" : "gray"}} onClick={() => this.muses()}>muses</h3>
                            </div>
                            <div class="col-12 col-md-7">
                                {this.state.selected == 0?
                                    <div> 
                                        <Carousel>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_0528%20v3.jpg?alt=media&amp;token=6665d240-207d-4fdc-835c-83ae96000f59" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_0477-2%20v3.jpg?alt=media&amp;token=42f9a7eb-fd1d-4ac4-8096-dcea24a849d6" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_0470%20v2.jpg?alt=media&amp;token=8f2b67ed-374f-4b14-a0a9-4954bf1a7f38" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_0379.jpg?alt=media&amp;token=0abcf8cc-9472-4e31-89c4-5b7e6d9cf7cc" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_0343%20v3.jpg?alt=media&amp;token=51908b0c-5695-4794-839b-8647eb9cbddf" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_0341%20v3.jpg?alt=media&amp;token=2a1910f9-622b-4a19-af7d-35a30b708677" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_0154%20v3.jpg?alt=media&amp;token=c191b603-6703-48f6-8c69-b29c680b509c" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>

                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_9965%20v2.jpg?alt=media&amp;token=670ce7c3-2d40-4c93-9e54-474ae6298921" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_9791%20v3.jpg?alt=media&amp;token=f57b0bef-d48d-4788-a45e-69927d64c372" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_9741%20v3.jpg?alt=media&amp;token=95ee25ab-4d95-490c-a7bb-caa479e36524" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_9731%20v2.jpg?alt=media&amp;token=3dda8d46-a04a-4094-9736-0533af91c413" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_9680%20v3.jpg?alt=media&amp;token=aaa4612b-2b7b-494e-a60b-2e973c22491b" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_9567%20v3.jpg?alt=media&amp;token=cd105fde-aaab-44b0-b3f1-e6700f3049de" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_9524%20v3.jpg?alt=media&amp;token=d32d986d-7f44-4058-96f8-7839652c7b05" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>

                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_8770%20v3.jpg?alt=media&amp;token=7ab516a9-e130-4d5f-809b-7451cf85198d" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_8767%20v3.jpg?alt=media&amp;token=1a725e57-8d0d-47e5-848b-dfd7bd228bc9" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>

                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_8450%20v3.jpg?alt=media&amp;token=1ed3a927-71b1-4c59-a85a-4b54bbed29d2" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_7720%20v3.jpg?alt=media&amp;token=c508fe3d-6700-4f19-84ae-bc482c6297df" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>

                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_7565%20v3.jpg?alt=media&amp;token=9590adf2-d7fd-4b43-8f5c-cd38adf68320" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_7476%20v3.jpg?alt=media&amp;token=30b62c42-3dc1-42ad-a0cb-3d66f98b4fba" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_7312%20v3.jpg?alt=media&amp;token=14f7184e-9178-4f25-9458-e24d6f151744" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_7273%20v3.jpg?alt=media&amp;token=0b65f86e-6fd3-4015-a88a-c2e35ceeb25a" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>

                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_6862%20v3.jpg?alt=media&amp;token=614af549-e011-42bf-aa5d-ed010c84426e" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>

                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_6799%20v3.jpg?alt=media&amp;token=4c902046-dc9a-4884-8b97-1396324bc3d4" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>

                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_6620%20v3.jpg?alt=media&amp;token=d940ac43-88a1-410d-bc32-56eaf1733336" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>

                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_6002%20v3.jpg?alt=media&amp;token=ef178ab6-858f-424a-aa42-5b8d3c69697f" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_5475%20v3.jpg?alt=media&amp;token=876ee7ef-ef4c-4cb5-9fae-d13cf452757d" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_5441%20v3.jpg?alt=media&amp;token=cf42234e-aabf-427a-a3bb-526f29ba33be" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_5023%20v3.jpg?alt=media&amp;token=4bc6c420-4697-403e-87f4-ad23c52d1a69" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>

                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_4315%20v3.jpg?alt=media&amp;token=79650fbd-4b7a-4f31-be4a-c22794690230" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_3581%20v3.jpg?alt=media&amp;token=14d70922-65c7-4387-b76d-3188c80d1834" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_3538%20v3.jpg?alt=media&amp;token=94c4b40f-f652-4c19-ae4e-2bd4a5aaafc6" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel>
                                        <div style={{display: "inline-block", width: "50%"}}>
                                            <Carousel>
                                                <Carousel.Item>
                                                    <img width={600} height={900} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_9966%20v2.jpg?alt=media&amp;token=1ee085dd-14be-4f0c-8855-6cc4c3485455" />
                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img width={600} height={900} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_9342%20v2.jpg?alt=media&amp;token=cbdc363f-e559-4d34-8e7b-55a55e6fd3e7" />
                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img width={600} height={900} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_9317%20v2.jpg?alt=media&amp;token=8d74a4a2-b948-4792-b9f7-7b04e62945e1" />
                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>

                                                <Carousel.Item>
                                                    <img width={600} height={900} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_8452%20v3.jpg?alt=media&amp;token=c763af3f-ae68-45d3-8305-e69acfda1d48" />
                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>

                                                <Carousel.Item>
                                                    <img width={600} height={900} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_7718%20v3.jpg?alt=media&amp;token=ac18d1c9-2534-4fce-97dd-2496e78df3e9" />
                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img width={600} height={900} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_7580%20v3.jpg?alt=media&amp;token=d171188f-573c-4b02-9ca5-5325632fa058" />
                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                        <div style={{display: "inline-block", width: "50%"}}>
                                            <Carousel>
                                                <Carousel.Item>
                                                    <img width={600} height={900} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_6922%20v3.jpg?alt=media&amp;token=59d1d362-728b-4d6e-8d6c-6aa5ba92533b" />
                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>

                                                <Carousel.Item>
                                                    <img width={600} height={900} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_6809%20v3.jpg?alt=media&amp;token=41463abc-dd82-4ccc-9e46-93339aed5361" />
                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>

                                                <Carousel.Item>
                                                    <img width={600} height={900} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_6684%20v3.jpg?alt=media&amp;token=1114c9a3-474f-410b-944d-05dcbcd25891" />
                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>

                                                <Carousel.Item>
                                                    <img width={600} height={900} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_6617%20v3.jpg?alt=media&amp;token=ade7fdbb-7a59-4bba-8f9f-671005f3e53c" />
                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>

                                                <Carousel.Item>
                                                    <img width={600} height={900} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_4333%20v3.jpg?alt=media&amp;token=2160f766-7358-400b-9fa0-0a35bb18e0b6" />
                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img width={600} height={900} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Ft5i%2FIMG_4319%20v3.jpg?alt=media&amp;token=e2f49e73-91b1-4b06-b63b-7822ea30bf56" />
                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                    </div>
                                    :
                                    <div></div>
                                }
                                {this.state.selected == 1 ?
                                    <div> 
                                    <Carousel>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fg12%2FIMG_4520%20v2.jpg?alt=media&amp;token=8b85dc8a-054c-4f38-ac47-c83422ef8a9a" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>

                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fg12%2FIMG_3031%20v3.jpg?alt=media&amp;token=9b3cd29c-e083-4a16-b5bb-5b43bb63d12e" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>

                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fg12%2FIMG_2772%20v3.jpg?alt=media&amp;token=01f46eaa-633a-435d-9ea8-ecbb59f559db" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>

                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fg12%2FIMG_2068%20v3.jpg?alt=media&amp;token=bbdef3dc-f7d6-4ae8-8f33-8b0f37835d7d" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>

                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fg12%2FIMG_2003%20v3.jpg?alt=media&amp;token=2763bd57-2247-4bbd-b6e6-72ab53440815" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fg12%2FIMG_1877%20v3.jpg?alt=media&amp;token=1ddc0d94-fe44-41a8-ba9d-1af3df373a9b" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fg12%2FIMG_1871%20v3.jpg?alt=media&amp;token=8a0434c1-f359-4977-aec5-009a0e166fcf" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fg12%2FIMG_1390%20v3.jpg?alt=media&amp;token=3a9300fa-0ab7-4d8d-8e38-daeb75471643" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fg12%2FIMG_1332%20v3.jpg?alt=media&amp;token=9de69834-5996-4b12-a5a6-a3e613c9a768" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fg12%2FIMG_0513%20v3.jpg?alt=media&amp;token=f205171e-8009-4827-8dda-848b754f9b56" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fg12%2FIMG_9583%20v3.jpg?alt=media&amp;token=fd3ca4e5-6b96-4b01-b308-22183719a0a1" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fg12%2FIMG_6500%20v3.jpg?alt=media&amp;token=07265a85-af54-49db-8f98-bbb38126910f" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel>
                                        <div style={{display: "inline-block", width: "50%"}}>
                                            <Carousel>
                                                <Carousel.Item>
                                                    <img width={600} height={900} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fg12%2FIMG_3256%20v3.jpg?alt=media&amp;token=e910c9dc-cf7b-42d3-9eec-315d82e556fa" />
                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>

                                                <Carousel.Item>
                                                    <img width={600} height={900} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fg12%2FIMG_2004%20v3.jpg?alt=media&amp;token=4c66b110-0163-48aa-b39c-838e77d43867" />
                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>

                                                <Carousel.Item>
                                                    <img width={600} height={900} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fg12%2FIMG_1701%20v3.jpg?alt=media&amp;token=2ef80540-a0bc-4b04-8270-0f6881868921" />
                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>

                                                <Carousel.Item>
                                                    <img width={600} height={900} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fg12%2FIMG_0508%20v3.jpg?alt=media&amp;token=dbdb9e59-cbfb-4ff0-927c-7b4c58558989" />
                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>

                                                <Carousel.Item>
                                                    <img width={600} height={900} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fg12%2FIMG_9700%20v3.jpg?alt=media&amp;token=fbf8ed83-773c-46ad-a958-37e41609039c" />
                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                        <div style={{display: "inline-block", width: "50%"}}>
                                            <Carousel>
                                                <Carousel.Item>
                                                    <img width={600} height={900} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fg12%2FIMG_7918%20v3.jpg?alt=media&amp;token=a8cab02e-6110-4307-bd21-9d524a45590f" />
                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>

                                                <Carousel.Item>
                                                    <img width={600} height={900} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fg12%2FIMG_5934%20v3.jpg?alt=media&amp;token=54937038-7bcb-4304-950b-f27a204c6523" />
                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>

                                                <Carousel.Item>
                                                    <img width={600} height={900} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fg12%2FIMG_5330%20v3.jpg?alt=media&amp;token=f370a07b-c857-4e53-9cf9-0774cdcdd05d" />
                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>

                                                <Carousel.Item>
                                                    <img width={600} height={900} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fg12%2FIMG_5129%20v3.jpg?alt=media&amp;token=27652105-91d1-4ae2-aa51-25b1eea29bde" />
                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>

                                                <Carousel.Item>
                                                    <img width={600} height={900} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fg12%2FIMG_4880%20v3.jpg?alt=media&amp;token=162efb40-7222-4ad2-a8ba-d6537d036bfc" />
                                                    <Carousel.Caption>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                    </div>
                                    :
                                        <div></div>
                                }
                                {this.state.selected == 2 ?
                                    <div> 
                                        <Carousel>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fmuses%2F42841542681_66ef213dec_o%20v3.jpg?alt=media&amp;token=9d9501f4-9b55-47d3-adf8-369041ec4f4f" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>

                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fmuses%2F27972499767_95b60d1c79_o%20v3.jpg?alt=media&amp;token=c91b52fe-ebbd-4235-85de-5947700e6778" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>

                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fmuses%2F27972492787_7c29dbe2dc_o%20v3.jpg?alt=media&amp;token=cc1c492e-021d-4dfc-a6d0-f42451a22e30" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>

                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fmuses%2FIMG_9878%20v3.jpg?alt=media&amp;token=99a1a8e6-5c54-4c17-851c-8993d4294278" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>

                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fmuses%2FIMG_9877%20v3.jpg?alt=media&amp;token=c3aa98cb-bee6-4e48-8b3b-27790d4f8819" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fmuses%2FIMG_9872%20v3.jpg?alt=media&amp;token=c2aec4a1-4600-4607-bd6b-76f1db825ccd" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fmuses%2FIMG_9870%20v3.jpg?alt=media&amp;token=5670df71-347c-49a9-befd-aad7c6873e12" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fmuses%2FIMG_9763%20v3.jpg?alt=media&amp;token=bae68e43-158d-40d8-b02a-37372a619422" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fmuses%2FIMG_9135%20v3.jpg?alt=media&amp;token=ddddcf23-4767-417b-b5b5-f4d017e07d4c" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fmuses%2FIMG_9131%20v3.jpg?alt=media&amp;token=856cc678-e46d-4fb9-83fb-28bedf41fc9d" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fmuses%2FIMG_9100%20v3.jpg?alt=media&amp;token=72640417-92cd-4d32-8ad2-cda1a668fcea" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img width={900} height={600} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/photography%2Fmuses%2FSNAP_00118%20v2.jpg?alt=media&amp;token=d4d4778a-db4b-4fb8-952d-d50f73b0a378" />
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                    :
                                        <div></div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}