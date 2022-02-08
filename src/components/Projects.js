import React from "react"
import data from "../projects_data"

export default function Projects() {

    const projectElements = data.map(project => {
        return (
            <div className="project">
                <div className="screenshot">
                    <img src={process.env.PUBLIC_URL + project.screenshot} alt="screenshot of project"></img>
                </div>
                <div className="project-text-container">
                    <p className="project-name">{project.name}</p>
                    <p>{project.description}</p>
                    <div className="link-container">
                        <a className="link-code" href={project.codeLink}>Code</a>
                        <a href={project.demoLink}>Demo</a>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="projects-container" id="projects-container">
            <h1>Projects</h1>
            <div className="projects-content">
                {projectElements}
            </div>
        </div>
    )
}