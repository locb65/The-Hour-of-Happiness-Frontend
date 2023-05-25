import React, {useState} from "react";
import { FcSearch} from 'react-icons/fc'
import './searchBar.css';
import axios from "axios";
import debounce from "lodash.debounce";

export const SearchBar = ({ handleSearch }) => {
    const [searchValue, setSearchValue] = useState("");

    const performSearch = async (query) => {
        try {
            const encodedQuery = encodeURI(query);
            let res;
            if(encodedQuery === '') {
                res = await axios.get(`https://clink-city-mern-backend.herokuapp.com/happy-hour-time/locations`)
            } else {
                res = await axios.get(`https://clink-city-mern-backend.herokuapp.com/happy-hour-time/search/name?name=${encodedQuery}`);
            }
            handleSearch(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    const debouncedSearch = debounce(performSearch, 300);
    
    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        debouncedSearch(value);
    };;
    
    return (
        <div className="searchBar-component-container">
            <div className="search-icon-container">
                <FcSearch/>
            </div>
            <input 
            type="search" 
            placeholder="Search"
            value={searchValue}
            onChange={handleInputChange}
            />
        </div>
    )
}