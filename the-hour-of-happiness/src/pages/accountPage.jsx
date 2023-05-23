import React from "react";
import { AccountComponent } from "./components/accountComponent";

export const AccountPage =({sessionUser}) => {
    return (
        <div className="account-page-container">
            <AccountComponent sessionUser={sessionUser}/>
        </div>
    )
}