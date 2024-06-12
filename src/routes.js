import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

const MyRoutes = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route index element = { <HomePage/> }  path="/" exact />
                <Route element = { <AboutPage/> }  path="/About" />
                <Route element = { <ProjectsPage/> } path="/Projects" />
            </Routes>
       </BrowserRouter>
   )
}

export default MyRoutes;