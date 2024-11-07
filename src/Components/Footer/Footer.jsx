import React from "react";
import './Footer.css'
import githubMark from '/github-mark.png'

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer>
            <a href="https://github.com/Gyanaa-Vaibhav" target="_blank">
                <img src={githubMark} alt="Github Logo" />Gyanaa Vaibhav
            </a>
            <p>{year}®</p>
        </footer>
    )
}