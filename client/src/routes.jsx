import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/loginPage";
import CriarConta from "./pages/criarConta";
import HomePage from "./pages/homePage";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} ></Route>
                <Route path="/criarconta" element={<CriarConta />} ></Route>
                <Route path="/home" element={<HomePage />} ></Route>
            </Routes>        
        </BrowserRouter>
    )
}