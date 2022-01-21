import React from "react"

export default function Projects() {
    return (
        // must simpify, make projectsData.js file from which to pull all of this
        <div className="projects-container">
            <h1>Projects</h1>
            <div className="projects-content">
                <div className="project">
                    <p>Study Tool</p>
                    <div className="screenshot">Screenshot</div>
                    <p>A digital whiteboard to track MCAT studies.</p>
                    <div className="buttons-container">
                        <a href="#">Code</a>
                        <a href="#">Demo</a>
                    </div>
                </div>
                <div className="project">
                    <p>Word Game</p>
                    <div className="screenshot">Screenshot</div>
                    <p>Can you pronounce words from Merriam-Webster's Medical Dictionary? Copy this if you're going to the Demo (you'll need it): _____</p>
                    <div className="buttons-container">
                        <a href="#">Code</a>
                        <a href="#">Demo</a>
                    </div>
                </div>
                <div className="project">
                    <p>YouTube Video Sources</p>
                    <div className="screenshot">Screenshot</div>
                    <p>A better version of a Kurzgesagt video sources ("further reading") page.</p>
                    <div className="buttons-container">
                        <a href="#">Code</a>
                        <a href="#">Demo</a>
                    </div>
                </div>
                <div className="project">
                    <p>Cosmic Calendar Calculator</p>
                    <div className="screenshot">Screenshot</div>
                    <p>A tribute to Carl Sagan's concept of compressing all of time into a single calendar year.</p>
                    <div className="buttons-cona">
                        <a href="#">Code</a>
                        <a href="#">Demo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}