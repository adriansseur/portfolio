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
                    <p>{project.name}</p>
                    <p>{project.description}</p>
                    <div className="link-container">
                        <a href={project.codeLink} target="_blank">Code</a>
                        <a href={project.demoLink} target="_blank">Demo</a>
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