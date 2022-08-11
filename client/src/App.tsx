import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import SignIn from "./pages/auth/auth-components/SignIn";
import LandingPage from "./pages/auth/auth-components/LandingPage";
import Home from "./pages/home/Home";
import SignUp from "./pages/auth/auth-components/SignUp";

function App() {
    const token: string = "";

    return (
        <BrowserRouter>
            <Routes>
                {!token ? (
                    <Route>
                        <Route path="/" element={<Auth />}>
                            <Route index element={<LandingPage />} />
                            <Route path="signin" element={<SignIn />} />
                            <Route path="signup" element={<SignUp />} />
                        </Route>
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Route>
                ) : (
                    <Route>
                        <Route
                            path="/"
                            element={<Navigate to="/home" replace />}
                        />
                        <Route path="/">
                            <Route path="home" element={<Home />} />
                        </Route>
                        <Route
                            path="*"
                            element={<Navigate to="/home" replace />}
                        />
                    </Route>
                )}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
