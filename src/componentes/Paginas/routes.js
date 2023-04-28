import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./home";
import Cadastro from "./cadastro";
import Login from "./login";

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cadastro" element={<Cadastro />}></Route>
            <Route path="/login" element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
