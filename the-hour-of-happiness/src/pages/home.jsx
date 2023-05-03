import React from "react";
import { SearchBar } from "./components/searchBar";
import { Header } from "./components/header";
import { HappyHourList } from "./components/happyHourListView";

export const HomeView = () => {
    return (
        <div>
            <Header/>
            <div>
                <HappyHourList/>
            </div>
        </div>
    );
};