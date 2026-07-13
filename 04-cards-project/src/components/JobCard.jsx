import React from 'react'
import '../css/JobCard.css'

const JobCard = (props) => {
    return (
        <div className="job-card">
            {/* Top Section: Logo & Save Button */}
            <div className="card-header">
                <div className="logo-container">
                    <h3>{`${props.nameOfCompany} Logo`}</h3>
                </div>
                <button className="save-btn">
                    Save
                    <svg className="bookmark-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                </button>
            </div>

            {/* Main Content Section */}
            <div className="card-body">
                <div className="company-meta">
                    <span className="company-name">{props.nameOfCompany}</span>
                    <span className="time-posted">5 days ago</span>
                </div>
                <h2 className="job-title">{props.post}</h2>

                {/* Tags */}
                <div className="tags-container">
                    <span className="tag">{props.tag1}</span>
                    <span className="tag">{props.tag2}</span>
                </div>
            </div>

            <hr className="divider" />

            {/* Footer Section: Price & Action */}
            <div className="card-footer">
                <div className="salary-location">
                    <div className="salary">${props.pay}/hr</div>
                    <div className="location">{props.location}</div>
                </div>
                <button className="apply-btn">Apply Now</button>
            </div>
        </div>
    );
}

export default JobCard