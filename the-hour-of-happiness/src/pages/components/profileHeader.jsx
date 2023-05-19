import React from 'react';

export const ProfileHeader = ({ sessionUser }) => {
    return (
        <div className="profile-header">
            <div className="profile-img-container">
                <img src="" alt=""/>
                <h1>{sessionUser?.name}</h1>
            </div>
        </div>
    )
}
