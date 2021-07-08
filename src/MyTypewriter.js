import React, { Component } from 'react'
import Typewriter from "typewriter-effect";
import {randomPhrasePickup} from "./config/functionHelpers.js"
import phrases from "./config/Phrases.js";
import "./MyTypewriter.css"

class MyTypewriter extends Component {
    render() {
        var randPhrases = randomPhrasePickup();
        return (
            <div className = "typewriter">
                <Typewriter onInit = {(typewriter) => {
                    typewriter.typeString("what am I up to?")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(phrases[randPhrases[0]] + "")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(phrases[randPhrases[1]] + "")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(phrases[randPhrases[2]] + "")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(phrases[randPhrases[3]] + "")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(phrases[randPhrases[4]] + "")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(phrases[randPhrases[5]] + "")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(phrases[randPhrases[6]] + "")
                    .stop()
                    .start();
                }}/>
            </div>
        )
    }
}

export default MyTypewriter;
