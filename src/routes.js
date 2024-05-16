import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import WelcomePage from "./Pages/Welcome/Welcome";
import About from "./Pages/About/About";

const MyRoutes = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route index element = { <WelcomePage/> }  path="/" exact />
                <Route element = { <About/> }  path="/About" />
            </Routes>
       </BrowserRouter>
   )
}

export default MyRoutes;