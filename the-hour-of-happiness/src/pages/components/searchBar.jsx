import React, {useState} from "react";
import { FcSearch} from 'react-icons/fc'
import './searchBar.css';
import axios from "axios";

export const SearchBar = () => {
    const [searchResults, setSearchResults] = useState([]);
    return (
        <div className="searchBar-component-container">
            <div className="search-icon-container">
                <FcSearch/>
            </div>
            <input type="search" placeholder="Search"/>
        </div>
    )
}