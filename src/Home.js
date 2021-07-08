import React, { Component } from 'react'
import ParticleBackground from "./ParticleBackground.js"
import MyTypewriter from "./MyTypewriter.js";
import "./Home.css"

class Home extends Component {
    render() {
        return (
            <div className = "">
                <div id="particles-js" >
                <ParticleBackground />
                </div>
                <div className = "container">
                    <div className = "info-container">
                        <div className = "name">
                        <span aria-hidden = {true}>Aryan Malik</span>
                        Aryan Malik
                        <span aria-hidden = {true}>Aryan Malik</span>
                        </div>
                        <div className = "major-info">
                        <div className = "cs-std">computer science student</div>
                        <div className = "university"><a href = "https://umich.edu" className = "btn btn-center">university of michigan</a></div>
                        <MyTypewriter className = "inside-parent-div-writer"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
