import React from "react";
import { FcSearch} from 'react-icons/fc'
import './searchBar.css';

export const SearchBar = () => {
    return (
        <div className="searchBar-component-container">
            <div className="search-icon-container">
                <FcSearch/>
            </div>
            <input type="search" placeholder="Search"/>
        </div>
    )
}