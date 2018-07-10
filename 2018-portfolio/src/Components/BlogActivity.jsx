import React from "react";
import Navigation from "./Navigation";
import {Link} from "react-router-dom";

export default class BlogActivity extends React.Component {
    constructor(props) {
        super(props);
        if(this.props.location.state) {
            this.state = {
                selected: this.props.location.state.selected
            }
        } else {
            this.state = {
                selected: 0
            }
        }
    }

    emotion() {
        if (this.state.selected != 0) {
            this.setState({
                selected: 0
            });
        }
    }

    logo() {
        if (this.state.selected != 1) {
            this.setState({
                selected: 1
            });
        }
    }

    dailyui() {
        if (this.state.selected != 2) {
            this.setState({
                selected: 2
            });
        }
    }


    render() {
        return(
            <div>
                <Navigation/>
                <div>
                    <div style={{marginTop: "100px"}}>
                        <div class="row">
                            <div class="col-12 col-sm-2 fix" style={{marginBottom: "20px"}}>
                                <h2 style={{marginBottom: "20px"}}>單純</h2>
                                <h3>daan<sup>1</sup> seon<sup>4</sup></h3>
                                <div>simply; purely; merely</div>

                                <h3 style={{color: this.state.selected == 0 ? "black" : "gray"}} onClick={() => this.emotion()}>｢ emotion ｣</h3>
                                <h3 style={{color: this.state.selected == 1 ? "black" : "gray"}} onClick={() => this.logo()}>｢ logo ｣</h3>
                                <h3 style={{color: this.state.selected == 2 ? "black" : "gray"}} onClick={() => this.dailyui()}>｢ daily ui ｣</h3>
                            </div>
                            <div class="col-12 col-sm-9">
                                <div>
                                    <h2>Happenings</h2>
                                    <div>｢ emotion ｣ is something I'm doing in my pasttime while mobile app ideas are pivoting. I'm using InDesign for song inspirations
                                    and seeing where the creations take themselves.</div>
                                    <div>｢ logo ｣ is using Illustrator to learn and practice creating vectors.</div>
                                    <div>｢ daily ui ｣ - I'm taking on the 100 day challenge and using it as a starting points to develop concepts.</div>
                                </div>
                                <div>
                                    <h4>Future Happenings</h4>
                                    <div>｢ os design ｣ Recreating what I had to do for INFO 365 - Mobile App Design by defining my own OS.</div>
                                    <div>｢ geometric ｣ Making designs restricted by the number of sides or particular ratios.</div>
                                </div>
                                <hr/>
                                <div>
                                    {this.state.selected == 0 ? 
                                        <div>
                                            <div class="row">
                                                <div class="col-9 col-sm-4">                       
                                                    <div class="card" onClick={() => this.props.history.push("/break")}>
                                                        <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.07.04.break%2Fbreak.jpg?alt=media&amp;token=acdbc680-93fc-4f4e-8c68-5308da50ab2e" alt="Card image cap"/>
                                                        <div class="card-body">
                                                        2018.07.04 ｣｢ three days grace - break
                                                        </div>
                                                    </div>         
                                                </div>
                                                <div class="col-9 col-sm-4">                       
                                                    <div class="card" onClick={() => this.props.history.push("/demons")}>
                                                        <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.07.02.demons%2Fdemons.jpg?alt=media&amp;token=d9f89f3c-21ea-4795-bf5e-f0a2759dccbf" alt="Card image cap"/>
                                                        <div class="card-body">
                                                        2018.07.02 ｣｢ joji - demons
                                                        </div>
                                                    </div>         
                                                </div>
                                                <div class="col-9 col-sm-4">                                    
                                                    <div class="card" onClick={() => this.props.history.push("/colorgreen")}>
                                                        <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.06.02.colorgreen%2Fcolorgreen.png?alt=media&amp;token=d284f4e2-149e-4b93-a9ff-3d5ed1c33d1d" alt="Card image cap"/>
                                                        <div class="card-body">
                                                            2018.06.02 ｣｢ new politics - color green
                                                        </div>
                                                    </div>         
                                                </div>

                                            </div>
                                            <div class="row">
                                                <div class="col-9 col-sm-4">                                    
                                                    <div class="card" onClick={() => this.props.history.push("/awas")}>
                                                        <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.06.01.awas%2Fangelwithashotgun.png?alt=media&amp;token=3e472fc8-91fc-45d1-b346-9474652c71ac" alt="Card image cap"/>
                                                        <div class="card-body">
                                                        2018.06.01 ｣｢ the cab - angel with a shotgun
                                                        </div>
                                                    </div>         
                                                </div>
                                                <div class="col-9 col-sm-4">                                    
                                                        <div class="card" onClick={() => this.props.history.push("/iflid")}>
                                                        <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.05.31.iflid%2Fifeellikeimdrowning.png?alt=media&amp;token=6a1addf5-e1dd-4ae7-a1d7-98585fef28af" alt="Card image cap"/>
                                                        <div class="card-body">
                                                            2018.05.31 ｣｢ two feet - i feel like i'm drowning
                                                        </div>
                                                    </div>         
                                                </div>
                                                <div class="col-9 col-sm-4">                                    
                                                    <div class="card" onClick={() => this.props.history.push("/dirtyneon")}>
                                                        <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.05.31.dirtyneon%2Fdirtyneon.png?alt=media&amp;token=1a234886-4092-4aed-8e31-a43b133a45bf" alt="Card image cap"/>
                                                        <div class="card-body">
                                                            2018.05.31 ｣｢ 3lau - dirty neon
                                                        </div>
                                                    </div>         
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-9 col-sm-4">                                    
                                                    <div class="card" onClick={() => this.props.history.push("/backbone")}>
                                                        <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.05.29.backbone%2Fbackbone.png?alt=media&amp;token=9e73d75d-0fa6-45be-a8f2-3bef73b5f0e3" alt="Card image cap"/>
                                                        <div class="card-body">
                                                            2018.05.29 ｣｢ daughtry - backbone
                                                        </div>
                                                    </div>         
                                                </div>
                                                <div class="col-9 col-sm-4">                                    
                                                    <div class="card" onClick={() => this.props.history.push("/genesis")}>
                                                        <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.05.22.genesis%2Fgenesis_01.png?alt=media&amp;token=d60a885c-484b-4e43-bd5f-968f4a6a4809" alt="Card image cap"/>
                                                        <div class="card-body">
                                                            2018.05.22 ｣｢ jj lin - genesis
                                                        </div>
                                                    </div>         
                                                </div>
                                            </div>
                                        </div>
                                            :
                                        <div></div>
                                    }
                                    {this.state.selected == 1 ? 
                                        <div> 
                                            <div class="row">
                                                <div class="col-9 col-sm-4">                                    
                                                    <div class="card" onClick={() => this.props.history.push("/sunmoon")}>
                                                    <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fsunmoon%2Flogo_sun_moon.jpg?alt=media&amp;token=cd9fd4bb-9600-4905-9353-63836d3d7ce9" alt="Card image cap"/>
                                                    <div class="card-body">
                                                        2018.07.09 ｣｢ sun and moon
                                                    </div>
                                                    </div>         
                                                </div>
                                            </div>
                                        </div>
                                        : <div></div>}
                                    {this.state.selected == 2 ? 
                                        <div> 
                                            <div class="row">
                                                <div class="col-9 col-sm-4">                                    
                                                    <div class="card" onClick={() => this.props.history.push("/day4")}>
                                                    <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Fdailyui%2Fday4_calculator.jpg?alt=media&amp;token=bdbaf0ee-6aea-4ea2-ae65-dad9b1d19539" alt="Card image cap"/>
                                                    <div class="card-body">
                                                        2018.07.08 ｣｢ day 4 - calculator
                                                    </div>
                                                    </div>         
                                                </div>
                                                <div class="col-9 col-sm-4">                                    
                                                    <div class="card" onClick={() => this.props.history.push("/day3")}>
                                                    <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Fdailyui%2Fday3_landing_page.jpg?alt=media&amp;token=47165e7a-0703-40ec-bd46-9c8fca225ce2" alt="Card image cap"/>
                                                    <div class="card-body">
                                                        2018.07.06 ｣｢ day 3 - landing page
                                                    </div>
                                                    </div>         
                                                </div>
                                                <div class="col-9 col-sm-4">                                    
                                                    <div class="card" onClick={() => this.props.history.push("/day2")}>
                                                    <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Fdailyui%2Fday2_credit_checkout.jpg?alt=media&amp;token=b0d8264d-778d-4a58-9a51-3ffba912ca21" alt="Card image cap"/>
                                                    <div class="card-body">
                                                        2018.07.05 ｣｢ day 2 - credit card checkout
                                                    </div>
                                                    </div>         
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-9 col-sm-4">                                    
                                                    <div class="card" onClick={() => this.props.history.push("/day1")}>
                                                    <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Fdailyui%2Fday1_sign_up.jpg?alt=media&amp;token=25be41e9-d963-4f52-848c-98d66c96b178" alt="Card image cap"/>
                                                    <div class="card-body">
                                                        2018.07.03 ｣｢ day 1 - sign up
                                                    </div>
                                                    </div>         
                                                </div>
                                            </div>
                                        </div>
                                        
                                        : <div></div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}