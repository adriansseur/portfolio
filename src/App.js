import React from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import {gsap} from "gsap"

export default function App() {

    const tl = gsap.timeline({defaults: {duration: 1, ease: "back.inOut(3)"}})

    return (
        <div className="portfolio-container">
            <Hero tl={tl}/>
            <About />
            <Projects />
            <Contact />
        </div>
    )
}