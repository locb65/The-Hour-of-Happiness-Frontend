import React from "react";
import { AccountComponent } from "./components/accountComponent";
import { ProfileHeader } from "./components/profileHeader";

export const AccountPage =({sessionUser, navigate}) => {
    return (
        <div className="account-page-container">
            <div>
                <ProfileHeader sessionUser={sessionUser}/>
            </div>
            <div>
                <AccountComponent sessionUser={sessionUser} navigate = {navigate}/>
            </div>
        </div>
    )
}