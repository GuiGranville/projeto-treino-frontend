import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom"
import Login from "../pages/Login/Login"
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Home from "../pages/Home/Home";

function PrivateRoutes() {
    
    // const token = sessionStorage.getItem("token");

    // // if (!token) {
    // //     return <Navigate to="/login" />;
    // // }

    return (
        <>
            <NavigationBar />
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
        </>
    )
}

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<PrivateRoutes />} />
            </Routes>
        </BrowserRouter>
    )
}
