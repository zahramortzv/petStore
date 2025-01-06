import React from 'react'
import LandImage from "../assets/image/landing.svg";

function LandSection() {
    return (
        <section className="relative w-full h-auto">
            <img
                src={LandImage}
                alt="Landing"
                className="w-full h-auto object-cover"
            />
        </section>
    );
}

export default LandSection