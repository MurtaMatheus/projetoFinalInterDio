import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contato from "../pages/contato";
import Home from "../pages/home";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact={true} element={<Home />} />
                <Route path="/contato" exact={true} element={<Contato />} />
            </Routes>

        </BrowserRouter>
    )
}

export default Rotas;