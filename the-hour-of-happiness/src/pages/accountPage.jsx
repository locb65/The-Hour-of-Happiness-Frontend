import React from "react";
import { AccountComponent } from "./components/accountComponent";
import { ProfileHeader } from "./components/profileHeader";

export const AccountPage =({sessionUser, navigate, user, handleDeleteUser}) => {
    return (
        <div className="account-page-container">
            <div>
                <ProfileHeader sessionUser={sessionUser}/>
            </div>
            <div>
                <AccountComponent user={user} handleDeleteUser= {handleDeleteUser} sessionUser={sessionUser} navigate = {navigate}/>
            </div>
        </div>
    )
}