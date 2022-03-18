import React from "react";
// Page Home
import Home from "./page/Home";
import SearchNav from "./components/SearchNav";
import Footer from "./components/Footer";
// Global Styles
import GlobalStyles from "./components/GlobalStyles";
// React Router dom
import {Routes, Route } from "react-router-dom";
// Uuid for key
import { v4 as uuidv4  } from "uuid";


const App = () => {


    return (
        <div>
            <GlobalStyles />
            <SearchNav />
            <Routes>
                {
                    ['/', 'games/:id'].map((path) => (
                        <Route key={uuidv4()} path={path} element={<Home />} />
                    ))
                }
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
