import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./home";
import Cadastro from "./cadastro";

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cadastro" element={<Cadastro />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
