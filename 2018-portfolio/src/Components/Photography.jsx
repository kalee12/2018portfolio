import React from "react";
import Navigation from "./Navigation"

import Gallery from 'react-grid-gallery';


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
        let t5i = [
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_0379.jpg?alt=media&token=1714dd90-9fb1-4b48-8648-79bc278f31c8",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_0379.jpg?alt=media&token=1714dd90-9fb1-4b48-8648-79bc278f31c8",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_0341.jpg?alt=media&token=20372bcb-cd8f-4bfc-b00c-21c4d9cef2e1",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_0341.jpg?alt=media&token=20372bcb-cd8f-4bfc-b00c-21c4d9cef2e1",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_0339.jpg?alt=media&token=87a76a99-3cd5-4791-aee1-c4cc3ee56610",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_0339.jpg?alt=media&token=87a76a99-3cd5-4791-aee1-c4cc3ee56610",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_9965%20v2.jpg?alt=media&token=adf2e84f-5eb0-4075-a700-5be5d4b7fb4d",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_9965%20v2.jpg?alt=media&token=adf2e84f-5eb0-4075-a700-5be5d4b7fb4d",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },

            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_9741%20v3.jpg?alt=media&token=40db6968-739a-466b-8730-a93f4fbceff5",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_9741%20v3.jpg?alt=media&token=40db6968-739a-466b-8730-a93f4fbceff5",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_9732%20v2.jpg?alt=media&token=04b66ce5-a626-42db-a600-daa66236628e",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_9732%20v2.jpg?alt=media&token=04b66ce5-a626-42db-a600-daa66236628e",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_9524%20v3.jpg?alt=media&token=fa66ce7c-ee4d-4b45-8193-bd9702befb1a",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_9524%20v3.jpg?alt=media&token=fa66ce7c-ee4d-4b45-8193-bd9702befb1a",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_6862%20v2.jpg?alt=media&token=78450d62-2e02-4434-8ffb-6381ef1a02f0",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_6862%20v2.jpg?alt=media&token=78450d62-2e02-4434-8ffb-6381ef1a02f0",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_8770%20v2.jpg?alt=media&token=e35e5ea6-2725-4462-81c3-50e8ad1aa886",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_8770%20v2.jpg?alt=media&token=e35e5ea6-2725-4462-81c3-50e8ad1aa886",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_7720%20v2.jpg?alt=media&token=09f76d26-ebdf-4bf3-ae18-d76c49d38ed0",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_7720%20v2.jpg?alt=media&token=09f76d26-ebdf-4bf3-ae18-d76c49d38ed0",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_7312%20v2.jpg?alt=media&token=0392f580-fc59-4b63-95a4-bb5f25404938",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_7312%20v2.jpg?alt=media&token=0392f580-fc59-4b63-95a4-bb5f25404938",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_6620%20v2.jpg?alt=media&token=43da9ad2-5776-4148-b742-c1a795c41f20",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_6620%20v2.jpg?alt=media&token=43da9ad2-5776-4148-b742-c1a795c41f20",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_6002%20v2.jpg?alt=media&token=b90fbc54-2ce4-405a-a83f-3a04ff180b73",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_6002%20v2.jpg?alt=media&token=b90fbc54-2ce4-405a-a83f-3a04ff180b73",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_5023%20v2.jpg?alt=media&token=00423bd7-bf53-482d-8ad3-fa5b7ff61ee4",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_5023%20v2.jpg?alt=media&token=00423bd7-bf53-482d-8ad3-fa5b7ff61ee4",
                thumbnailWidth: 324,
                thumbnailHeight: 216 
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_3581%20v2.jpg?alt=media&token=5ec0a5d3-dc6f-4ecf-90c9-97c1f3aeedf8",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_3581%20v2.jpg?alt=media&token=5ec0a5d3-dc6f-4ecf-90c9-97c1f3aeedf8",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_3538%20v2.jpg?alt=media&token=858406af-de57-4e9f-9447-de7f1dfa97a4",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/t5i%2FIMG_3538%20v2.jpg?alt=media&token=858406af-de57-4e9f-9447-de7f1dfa97a4",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            }
        ];

        let g12 = [
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/g12%2FIMG_4520.jpg?alt=media&token=2920ab9a-092b-446b-a6e0-3c1df703b255",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/g12%2FIMG_4520.jpg?alt=media&token=2920ab9a-092b-446b-a6e0-3c1df703b255",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/g12%2FIMG_3031%20v2.jpg?alt=media&token=12f42f9d-c468-4890-8bcc-3465bac2f534",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/g12%2FIMG_3031%20v2.jpg?alt=media&token=12f42f9d-c468-4890-8bcc-3465bac2f534",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/g12%2FIMG_2772%20v2.jpg?alt=media&token=39dfb77a-7f2b-4a8d-a270-4063a5abfd1b",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/g12%2FIMG_2772%20v2.jpg?alt=media&token=39dfb77a-7f2b-4a8d-a270-4063a5abfd1b",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/g12%2FIMG_2068%20v2.jpg?alt=media&token=961f613e-52ee-4e2b-ba06-0862c73ba40a",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/g12%2FIMG_2068%20v2.jpg?alt=media&token=961f613e-52ee-4e2b-ba06-0862c73ba40a",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/g12%2FIMG_2003%20v2.jpg?alt=media&token=fcadfa01-d0c7-41e3-aab4-69d7724b4e5e",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/g12%2FIMG_2003%20v2.jpg?alt=media&token=fcadfa01-d0c7-41e3-aab4-69d7724b4e5e",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },

            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/g12%2FIMG_1871%20v2.jpg?alt=media&token=bba49c3a-f34c-4682-be09-e710c98b3f7e",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/g12%2FIMG_1871%20v2.jpg?alt=media&token=bba49c3a-f34c-4682-be09-e710c98b3f7e",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/g12%2FIMG_1877%20v2.jpg?alt=media&token=5a62fd8e-da6c-4e77-a282-3ebc585ef6e1",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/g12%2FIMG_1877%20v2.jpg?alt=media&token=5a62fd8e-da6c-4e77-a282-3ebc585ef6e1",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/g12%2FIMG_1390%20v2.jpg?alt=media&token=af7c66f9-5396-439a-8b09-7dac6d72b3a2",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/g12%2FIMG_1390%20v2.jpg?alt=media&token=af7c66f9-5396-439a-8b09-7dac6d72b3a2",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/g12%2FIMG_1332%20v2.jpg?alt=media&token=99967d12-177e-454c-9ac1-0eb199ce09f9",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/g12%2FIMG_1332%20v2.jpg?alt=media&token=99967d12-177e-454c-9ac1-0eb199ce09f9",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/g12%2FIMG_0513%20v2.jpg?alt=media&token=bbf90b8e-57d1-49d5-8e1d-e8f4645ace3a",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/g12%2FIMG_0513%20v2.jpg?alt=media&token=bbf90b8e-57d1-49d5-8e1d-e8f4645ace3a",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/g12%2FIMG_9583%20v2.jpg?alt=media&token=4cd70a95-b36c-4f60-9f22-5080ad3b5540",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/g12%2FIMG_9583%20v2.jpg?alt=media&token=4cd70a95-b36c-4f60-9f22-5080ad3b5540",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/g12%2FIMG_6500%20v2.jpg?alt=media&token=f84442aa-5b8e-4a83-997d-2aadf9de0020",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/g12%2FIMG_6500%20v2.jpg?alt=media&token=f84442aa-5b8e-4a83-997d-2aadf9de0020",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
        ];
        
        let muses = [
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/muses%2F27972499767_95b60d1c79_o.jpg?alt=media&token=d75dc222-6eba-4559-adc0-9dc9ff9517fe",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/muses%2F27972499767_95b60d1c79_o.jpg?alt=media&token=d75dc222-6eba-4559-adc0-9dc9ff9517fe",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/muses%2F27972492787_7c29dbe2dc_o.jpg?alt=media&token=a35dda97-e513-4330-8b33-4dff36dc7110",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/muses%2F27972492787_7c29dbe2dc_o.jpg?alt=media&token=a35dda97-e513-4330-8b33-4dff36dc7110",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/muses%2FIMG_9878%20v3.jpg?alt=media&token=93942f77-d5f7-417a-a03c-d96c75d263d6",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/muses%2FIMG_9878%20v3.jpg?alt=media&token=93942f77-d5f7-417a-a03c-d96c75d263d6",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/muses%2FIMG_9877%20v3.jpg?alt=media&token=320ed89c-545f-4b77-a542-847bc5c9f4e6",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/muses%2FIMG_9877%20v3.jpg?alt=media&token=320ed89c-545f-4b77-a542-847bc5c9f4e6",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/muses%2FIMG_9872%20v3.jpg?alt=media&token=1f5186b0-c3a7-42fb-aeeb-44a77a598e68",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/muses%2FIMG_9872%20v3.jpg?alt=media&token=1f5186b0-c3a7-42fb-aeeb-44a77a598e68",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/muses%2FIMG_9870%20v3.jpg?alt=media&token=ad5865bb-c619-4ba2-a677-8fabf68a5d57",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/muses%2FIMG_9870%20v3.jpg?alt=media&token=ad5865bb-c619-4ba2-a677-8fabf68a5d57",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/muses%2FIMG_9763%20v3.jpg?alt=media&token=ddaa6dd5-d509-405f-a4c4-9c5660d02b9c",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/muses%2FIMG_9763%20v3.jpg?alt=media&token=ddaa6dd5-d509-405f-a4c4-9c5660d02b9c",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/muses%2FIMG_7609%20v2.jpg?alt=media&token=f9a74af9-2979-47ca-b6fa-63fc246c902b",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/muses%2FIMG_7609%20v2.jpg?alt=media&token=f9a74af9-2979-47ca-b6fa-63fc246c902b",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/muses%2FIMG_7536%20v2.jpg?alt=media&token=f85f6051-f97d-455d-b9d9-b08bb5f87e33",
                thumbnail: "https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/muses%2FIMG_7536%20v2.jpg?alt=media&token=f85f6051-f97d-455d-b9d9-b08bb5f87e33",
                thumbnailWidth: 324,
                thumbnailHeight: 216
            }
        ]

        return(
            <div>
                <Navigation/>
                <div>
                    <div style={{marginTop: "100px", height: "90%", marginBottom: "50px"}}>
                        <div class="row">
                            <div class="col-12 col-md-2 fix2">
                                <h2 style={{marginBottom: "50px"}}>photography</h2>
                                <h2 style={{color: this.state.selected == 0 ? "black" : "gray"}} onClick={() => this.t5i()}>canon t5i</h2>
                                <h2 style={{color: this.state.selected == 1 ? "black" : "gray"}} onClick={() => this.g12()}>canon g12</h2>
                                <br/>
                                <h2 style={{color: this.state.selected == 2 ? "black" : "gray"}} onClick={() => this.muses()}>muses</h2>
                            </div>
                            <div class="col-12 col-md-8">
                                {this.state.selected == 0? 
                                    <Gallery images={t5i} enableImageSelection={false} backdropClosesModal={true}
                                    showLightboxThumbnails={true}/>
                                    :
                                        <div></div>
                                }
                                {this.state.selected == 1 ? 
                                    <Gallery images={g12} enableImageSelection={false} backdropClosesModal={true}
                                    showLightboxThumbnails={true}/>
                                    :
                                        <div></div>
                                }
                                {this.state.selected == 2 ? 
                                    <Gallery images={muses} enableImageSelection={false} backdropClosesModal={true}
                                    showLightboxThumbnails={true}/>
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