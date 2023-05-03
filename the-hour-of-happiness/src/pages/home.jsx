import React from "react";
import { SearchBar } from "./components/searchBar";
import { Header } from "./components/header";

export const HomeView = () => {
    return (
        <div>
            <Header/>
            <div>
                <SearchBar/>
            </div>
        </div>
    );
};