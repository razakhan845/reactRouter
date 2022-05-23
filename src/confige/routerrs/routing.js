import { Dashboard } from "@mui/icons-material";
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import LogIn from "../../pages/login";
import Mainapp from "../../pages/Main";
import Signup from "../../pages/signup";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LogIn/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/Main" element={<Mainapp/>}/>
                <Route path="*" element={<><h1>404 Error</h1></>}/>
            </Routes>
        </Router>
    );
}