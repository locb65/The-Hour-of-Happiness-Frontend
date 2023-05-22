import React, {useState}from "react";
import { HappyHourList } from "./components/happyHourListView";

export const HomeView = ({searchResults}) => {
    return (
            <div>
                <HappyHourList searchResults={searchResults}/>
            </div>
    );
};