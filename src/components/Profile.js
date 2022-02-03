import React from "react";

function Profile() {
    return (
        <header className='profile'>
            <img src={require('../img/profile_laura.png')} alt="" className='profile--photo' />
            <h1 className="profile--name">Laura Smith</h1>
            <h2 className="profile--title">Frontend Developer</h2>
            <p className="profile--website">laurasmith.website</p>
        </header>
    )
}

export default Profile