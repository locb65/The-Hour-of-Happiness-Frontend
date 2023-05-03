import React from "react";
import { FcSearch} from 'react-icons/fc'

export const SearchBar = () => {
    return (
        <div className="searchBar-container">
            <div>
                <FcSearch/>
            </div>
            <input type="search" placeholder="Search"/>
        </div>
    )
}