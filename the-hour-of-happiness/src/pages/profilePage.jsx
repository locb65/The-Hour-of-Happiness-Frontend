import React from "react";
import { ProfileHeader } from "./components/profileHeader";
import { Header } from "./components/header";

export const ProfilePage = ({ sessionUser }) =>{
    return (
        <div>
            <div className="profile-page-container"></div>
                <ProfileHeader sessionUser={sessionUser}/>
        </div>
    )
}