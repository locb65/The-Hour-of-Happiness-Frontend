import React from "react";
import './header.css'
import { SearchBar } from "./searchBar";

export const Header = () => {
    return (
        <div className="header-container">
            <h1 className="header-title">Clink City</h1>
            <div className="search-bar-container">
                <SearchBar/>
            </div>
        </div>
    )
}