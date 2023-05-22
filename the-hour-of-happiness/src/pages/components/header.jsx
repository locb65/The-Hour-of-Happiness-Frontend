import React from "react";
import './header.css'
import { SearchBar } from "./searchBar";
import { DropDownMenu } from "./dropDownMenu";

export const Header = ({user, handleLogout, navigate, handleSearch}) => {
    const handleNavigateHome = () => {
        navigate('/home');
    }
    return (
        <div className="header-container" >
            <h1 className="header-title"onClick={handleNavigateHome}>Clink City</h1>
            <div className="search-bar-container">
                <SearchBar handleSearch={handleSearch} />
                <div className="header-dropdown-container">
                    <DropDownMenu user = {user} handleLogout = {handleLogout}/>
                </div>
            </div>
        </div>
    )
}