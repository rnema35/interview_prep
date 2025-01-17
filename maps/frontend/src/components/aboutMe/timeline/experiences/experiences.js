import React from "react";
import "./experiences.css"

const Experience = (position, company, start_date, end_date, location, description) => {
    return (
        <div className="exp-block">
            <div className="exp-header">
                <div className="exp-position-company">
                    <h2>Position</h2>
                    <h3>Company</h3>
                </div>
                <div className="exp-info">
                    <h3>Location</h3>
                    <h3>Date</h3>
                </div>
            </div>
            <div className="exp-desc">
                <p>Description</p>
            </div>
        </div>
    )
}

export default Experience;