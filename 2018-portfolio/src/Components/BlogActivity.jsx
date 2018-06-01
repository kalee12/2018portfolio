import React from "react";
import Navigation from "./Navigation";
import {Link} from "react-router-dom";

export default class BlogActivity extends React.Component {
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
                            </div>
                            <div class="col-12 col-sm-9">
                                <Link class="blog" to="/iflid">2018.05.31 ｢ emotion ｣ two feet - i feel like i'm drowning</Link> <br/>
                                <Link class="blog" to="/dirtyneon">2018.05.31 ｢ emotion ｣ 3lau - dirty neon</Link> <br/>
                                <Link class="blog" to="/backbone">2018.05.29 ｢ emotion ｣ daughtry - backbone</Link> <br/>
                                <Link class="blog" to="/genesis">2018.05.22 ｢ emotion ｣ jj lin - genesis</Link>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}