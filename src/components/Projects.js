import React from "react"
import data from "../projects_data"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function Projects() {

    // projects animation on scroll
    const projectsContainer = React.useRef()
    const projectsChildren = gsap.utils.selector(projectsContainer)
    const projectsTl = gsap.timeline({
        scrollTrigger: {
            start: "25%",
            end: "70%",
            scrub: true,
            ease: "back.inOut(3)"
        }
    })
    React.useEffect(() => {
        // animation runs only on mobile portrait
        // but if window is resized and page not refreshed, mobile landscape animates
        if (window.innerWidth < 768 && !(window.innerWidth > window.innerHeight)) {
            gsap.set(projectsChildren([".projects-title", ".project"]), { opacity: 0})
            projectsTl
                .fromTo(projectsChildren([".projects-title", ".project"]), { x: -50 }, { x: 0, opacity: 1, stagger: 0.5 })
                .fromTo(projectsChildren([".project"]), {backgroundColor: "#f6f8f7"}, {backgroundColor: "#cdd2d3", stagger: 0.5, ease: "none", delay: 0.2 }, "<")
        }
    }, [])

    const projectElements = data.map(project => {
        return (
            <div key={project.key} className="project">
                <div className="screenshot">
                    <img src={process.env.PUBLIC_URL + project.screenshot} alt="screenshot of project"></img>
                </div>
                <div className="project-text-container">
                    <p className="project-name">{project.name}</p>
                    <p>{project.description}</p>
                    {project.name === "Word Game" && [
                    <div key={project.key} className="secret-code-container">
                        <p className="secret-code-title">Copy this <span>Secret Code</span> for Demo:</p>
                        <div className="secret-code">f5038ffa-9e54-4906-b84a-a348b48dcf97</div>
                    </div>
                    ]} 
                    <div className="link-container">
                        <a className="link-code" href={project.codeLink}>Code</a>
                        <a href={project.demoLink}>Demo</a>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div ref={projectsContainer} className="projects-container" id="projects-container">
            <h1 className="projects-title">Projects</h1>
            <div className="projects-content">
                {projectElements}
            </div>
        </div>
    )
}