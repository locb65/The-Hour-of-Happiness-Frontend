import React, {useState} from "react";
import { ProfileHeader } from "./components/profileHeader";
import { RestaurantForm } from "./components/restaurantForm";

export const ProfilePage = ({ sessionUser }) =>{
    const [isFormOpen, setIsFormOpen] = useState(false)

    const toggleForm = () =>{
        setIsFormOpen(!isFormOpen)
    } 

    return (
        <div className="profile-page-container">
            <div className="profile-header-container">
                <ProfileHeader sessionUser={sessionUser}/>
            </div>
            <div className="profile-body-container">
                <div className="add-restaurant-btn-container">
                    <button type="button" className="add-restaurant-btn" onClick={toggleForm}>{isFormOpen ? "Hide Form" : "Add Restaurant"}</button>
                </div> 
                {isFormOpen && <RestaurantForm toggleForm={toggleForm}/>}
            </div>
        </div>
    )
}