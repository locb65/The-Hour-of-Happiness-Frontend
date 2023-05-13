import React from "react";
import { ProfileHeader } from "./components/profileHeader";
import { Header } from "./components/header";

export const ProfilePage = () =>{
    return (
        <div>
            <Header/>
            <div className="profile-page-container"></div>
                <ProfileHeader/>
        </div>
    )
}