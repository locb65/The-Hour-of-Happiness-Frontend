import React from "react";
import './header.css'
import { SearchBar } from "./searchBar";

export const Header = () => {
    return (
        <div className="header-container">
            <h1 className="header-title">The Hour Of Happiness</h1>
            <div>
                <SearchBar/>
            </div>
        </div>
    )
}