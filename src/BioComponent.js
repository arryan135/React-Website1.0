import React, {Component} from "react"
import "./BioComponent.css"
import ManAtDesk from "./assests/ManAtDesk.png"
import Parallax from "react-rellax";
// import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button"

class BioComponent extends Component {
    constructor(props){
        super(props);
        this.handleGoBack = this.handleGoBack.bind(this);
    }
    handleGoBack(){
        this.props.history.push("/");
    }
    render(){
        return (
            <div>
                <div className = "upperhalf">
                    <div className = "full-page">
                        <div className = "left-side">
                            <Parallax speed = {9}>  {/*7*/}
                                <h1 className = "bio-header">{`<bio/>`}</h1>
                            </Parallax>
                            <Parallax speed = {7}>  {/*5*/}
                                <p className = "paragraphs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </Parallax>
                            <Parallax speed = {5}>  {/*3*/}
                                <p className = "paragraphs"> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </Parallax>
                            <Parallax speed = {3}>  {/*1*/}
                                <p className = "paragraphs">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </Parallax>
                        </div>
                        <div className = "right-side">
                            <Parallax speed = {-16} style = {{paddingTop: "15vh", paddingLeft: "5vh"}}>
                                <img src={ManAtDesk} alt="Man At Desk" />
                            </Parallax>
                        </div>
                    </div>
                </div>
                <div className = "red-section">
                    <Parallax speed = {-5}>
                        <div className = "left-side extra-pad">
                            <h2>Here's all my works in my extended <a className = "resume-keyword btn-c btn-center" href = "www.google.com">resume</a></h2>
                            <div className = "btn-container"><a className= "go-back-btn btn-2" ><span className = "inside-button">Go Back</span></a></div>
                        </div>
                    </Parallax>
                </div>
            </div>
        )
    }
}

export default BioComponent;