import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";

const MyRoutes = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route index element = { <HomePage/> }  path="/" exact />
                <Route element = { <AboutPage/> }  path="/About" />
            </Routes>
       </BrowserRouter>
   )
}

export default MyRoutes;