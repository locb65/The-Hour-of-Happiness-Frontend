import React from "react";
import { ProfileHeader } from "./components/profileHeader";
import { RestaurantForm } from "./components/restaurantForm";

export const ProfilePage = ({ sessionUser }) =>{
    return (
        <div className="profile-page-container">
            <div className="profile-header-container">
                <ProfileHeader sessionUser={sessionUser}/>
            </div>
            <div className="profile-body-container">
                <RestaurantForm/>
            </div>
        </div>
    )
}