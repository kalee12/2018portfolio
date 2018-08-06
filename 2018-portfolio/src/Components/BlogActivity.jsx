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
                                                    <div class="card" onClick={() => this.props.history.push("/clouds")}>
                                                        <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.07.15%2Fclouds.png?alt=media&amp;token=dfb47117-a8cc-49e5-8924-4dc5df48b74e" alt="Card image cap"/>
                                                        <div class="card-body">
                                                        2018.07.15 ｣｢ new politics - clouds
                                                        </div>
                                                    </div>         
                                                </div>
                                                <div class="col-9 col-sm-4">                       
                                                    <div class="card" onClick={() => this.props.history.push("/break")}>
                                                        <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.07.04.break%2Fbreak.png?alt=media&amp;token=606ef938-a335-4533-bd1f-ef9202bf0de7" alt="Card image cap"/>
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
                                            </div>

                                            <div class="row">
                                                <div class="col-9 col-sm-4">                                    
                                                    <div class="card" onClick={() => this.props.history.push("/colorgreen")}>
                                                        <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.06.02.colorgreen%2Fcolorgreen.png?alt=media&amp;token=d284f4e2-149e-4b93-a9ff-3d5ed1c33d1d" alt="Card image cap"/>
                                                        <div class="card-body">
                                                            2018.06.02 ｣｢ new politics - color green
                                                        </div>
                                                    </div>         
                                                </div>
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

                                            </div>
                                            <div class="row">
                                                <div class="col-9 col-sm-4">                                    
                                                    <div class="card" onClick={() => this.props.history.push("/dirtyneon")}>
                                                        <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2F2018.05.31.dirtyneon%2Fdirtyneon.png?alt=media&amp;token=1a234886-4092-4aed-8e31-a43b133a45bf" alt="Card image cap"/>
                                                        <div class="card-body">
                                                            2018.05.31 ｣｢ 3lau - dirty neon
                                                        </div>
                                                    </div>         
                                                </div>
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
                                                        <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Flogo%2Fsunmoon%2Flogo_sun_moon.png?alt=media&amp;token=8fcc2b4a-5291-43ff-8bb7-45bfa78fe9dc" alt="Card image cap"/>
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
                                                    <div class="card" onClick={() => this.props.history.push("/day13")}>
                                                        <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Fdailyui%2Fday13_direct_messaging.png?alt=media&amp;token=bca1e056-2a71-43f9-81d6-bceae04cb307" alt="Card image cap"/>
                                                        <div class="card-body">
                                                            2018.07.24 ｣｢ day 13 - direct messaging
                                                        </div>
                                                    </div>         
                                                </div>
                                                <div class="col-9 col-sm-4">                                    
                                                    <div class="card" onClick={() => this.props.history.push("/day12")}>
                                                        <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Fdailyui%2Fday12_e_commerce.png?alt=media&amp;token=a360dbd4-b474-4a6d-b276-9239642f5c27" alt="Card image cap"/>
                                                        <div class="card-body">
                                                            2018.07.23 ｣｢ day 12 - e-commerce
                                                        </div>
                                                    </div>         
                                                </div>
                                                <div class="col-9 col-sm-4">                                    
                                                    <div class="card" onClick={() => this.props.history.push("/day11")}>
                                                        <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Fdailyui%2Fday11_flash_message.png?alt=media&amp;token=4b2d99af-3d7f-481b-8b40-2433e6f167d5" alt="Card image cap"/>
                                                        <div class="card-body">
                                                            2018.07.23 ｣｢ day 11 - flash message
                                                        </div>
                                                    </div>         
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-9 col-sm-4">                                    
                                                    <div class="card" onClick={() => this.props.history.push("/day10")}>
                                                        <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Fdailyui%2Fday10_social_share.png?alt=media&amp;token=1f05d280-4725-438e-a957-cd9b86964e2c" alt="Card image cap"/>
                                                        <div class="card-body">
                                                            2018.07.22 ｣｢ day 10 - social share
                                                        </div>
                                                    </div>         
                                                </div>
                                                <div class="col-9 col-sm-4">                                    
                                                    <div class="card" onClick={() => this.props.history.push("/day9")}>
                                                        <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Fdailyui%2Fday9_music_player.png?alt=media&amp;token=6d0b4ebf-b089-4c0b-8d80-a3e53ffe4698" alt="Card image cap"/>
                                                        <div class="card-body">
                                                            2018.07.16 ｣｢ day 9 - music player
                                                        </div>
                                                    </div>         
                                                </div>
                                                <div class="col-9 col-sm-4">                                    
                                                    <div class="card" onClick={() => this.props.history.push("/day8")}>
                                                        <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Fdailyui%2Fday8_404_page.png?alt=media&amp;token=c8089794-b723-4ef0-bc27-877ea4be307c" alt="Card image cap"/>
                                                        <div class="card-body">
                                                            2018.07.15 ｣｢ day 8 - 404 page
                                                        </div>
                                                    </div>         
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-9 col-sm-4">                                    
                                                    <div class="card" onClick={() => this.props.history.push("/day7")}>
                                                        <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Fdailyui%2Fday7_settings.png?alt=media&amp;token=c0f6c44c-40b5-4b4b-92be-0de5c796c39e" alt="Card image cap"/>
                                                        <div class="card-body">
                                                            2018.07.12 ｣｢ day 7 - settings
                                                        </div>
                                                    </div>         
                                                </div>
                                                <div class="col-9 col-sm-4">                                    
                                                    <div class="card" onClick={() => this.props.history.push("/day6")}>
                                                        <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Fdailyui%2Fday6_user_profile.png?alt=media&amp;token=91ae91df-ea78-4842-ada9-5fed6d59e349" alt="Card image cap"/>
                                                        <div class="card-body">
                                                            2018.07.12 ｣｢ day 6 - user profile
                                                        </div>
                                                    </div>         
                                                </div>
                                                <div class="col-9 col-sm-4">                                    
                                                    <div class="card" onClick={() => this.props.history.push("/day5")}>
                                                        <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-11385.appspot.com/o/blog%2Fdailyui%2Fday5_app_icon.png?alt=media&amp;token=bbe75299-6539-4ecb-9331-e98dcb5b5d58" alt="Card image cap"/>
                                                        <div class="card-body">
                                                            2018.07.09 ｣｢ day 5 - app icon
                                                        </div>
                                                    </div>         
                                                </div>
                                            </div>

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