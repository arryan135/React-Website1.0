import React from 'react'
import Particles from "react-particles-js";
import ParticleConfig from "./config/Particle-config.js"

function ParticleBackground() {
    return (
        <Particles params = {ParticleConfig}></Particles>
    )
}

export default ParticleBackground;
