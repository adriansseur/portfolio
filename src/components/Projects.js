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
                    <div className="demo-secret-code">
                        <input type="text" value="yipee" id="myInput" style={{display: "none"}}></input>
                        <button onClick={() => {

                            // works on computer but not on mobile
                            let copyText = document.getElementById("myInput")
                            copyText.select()
                            copyText.setSelectionRange(0, 99999)
                            navigator.clipboard.writeText(copyText.value)
                            // .then(() => {
                            //     alert("Successfully Copied")
                            // })
                            // .catch(() => {
                            //     alert("Something Went Wrong")
                            // })
                            
                            }}>Copy</button>
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