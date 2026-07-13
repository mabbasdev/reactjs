import React from 'react'

const Card = (props) => {
    console.log(props);
    
    return (
        <div className="profile-card">
            <img src={props.img} alt="Profile Picture" className="profile-img"></img>
            <h2 className="profile-name">I'm {props.user}!</h2>
            <p className="profile-bio">Product Designer based in San Francisco, creating clean and functional user experiences.</p>
            <button className="profile-btn">Follow</button>
        </div>
    )
}

export default Card
