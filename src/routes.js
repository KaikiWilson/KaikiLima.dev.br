import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import HomePage from "./Components/pages/HomePage";
import AboutPage from "./Components/pages/AboutPage";

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