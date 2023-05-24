import React, {useState}from "react";
import { HappyHourList } from "./components/happyHourListView";
import './home.css'

export const HomeView = ({searchResults}) => {
    return (
            <div className="home-view-container">
                <HappyHourList searchResults={searchResults}/>
            </div>
    );
}; 