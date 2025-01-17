import React from "react";
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <div>
                <h1 className="bokor-regular-header">Raghu Nema</h1>
            </div>
            <div>
                <h2 className="bokor-regular-header">About Me</h2>
                <h2 className="bokor-regular-header">Projects</h2>
                <h2 className="bokor-regular-header">Resume</h2>
            </div>
        </div>
    )
}

export default Header