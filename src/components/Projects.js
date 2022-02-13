import React from "react"
import data from "../projects_data"

export default function Projects() {

    // copying secret code to clipboard
    // function myFunction() {
    //     let copyText = document.getElementById("myInput");
    //     copyText.select();
    //     copyText.setSelectionRange(0, 99999); /* For mobile devices */
    //     navigator.clipboard.writeText(copyText.value);
    //     alert("Copied the text: " + copyText.value);
    // }

    const projectElements = data.map(project => {
        return (
            <div className="project">
                <div className="screenshot">
                    <img src={process.env.PUBLIC_URL + project.screenshot} alt="screenshot of project"></img>
                </div>
                <div className="project-text-container">
                    <p className="project-name">{project.name}</p>
                    <p>{project.description}</p>
                    {project.name === "Word Game" && [
                    <div className="secret-code-container">
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
        <div className="projects-container" id="projects-container">
            <h1>Projects</h1>
            <div className="projects-content">
                {projectElements}
            </div>
        </div>
    )
}