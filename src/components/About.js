import React from 'react'
import './about.css'

export default function About(props) {
    return (
        <>
            <div className="text" style={props.mode}>
                <div className="def_Contener">
                    <h1 style={props.color}>About Me :-</h1>
                    <p style={props.color}>Hello, everyone! My name is Mitesh Amin, and I am a software developer. I have a deep passion for coding and creating innovative solutions to complex problems. With Final years of experience in software development, I have honed my skills in Full Stack Developer,Software Developer and also working in AI.

                        Throughout my career, I have been involved in various projects, ranging from web applications to mobile apps and even enterprise software systems. I am well-versed in the entire software development lifecycle, from gathering requirements and designing robust architectures to implementing efficient code and ensuring rigorous testing.

                        I thrive in collaborative environments and have excellent teamwork and communication skills. I enjoy working closely with cross-functional teams, including designers, product managers, and QA engineers, to deliver high-quality software solutions that meet both user needs and business goals.</p>
                </div>
            </div>
        </>
    )
}
